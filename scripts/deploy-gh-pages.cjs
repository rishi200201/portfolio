const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

try {
  const repoRoot = path.resolve(__dirname, '..');
  const distPath = path.join(repoRoot, 'dist');

  if (!fs.existsSync(distPath)) {
    console.error('Error: dist folder not found. Run `npm run build` first.');
    process.exit(1);
  }

  // Determine remote repo URL from parent repo
  let repoUrl = process.env.REPO;
  if (!repoUrl) {
    try {
      repoUrl = execSync('git config --get remote.origin.url', { cwd: repoRoot, encoding: 'utf8' }).trim();
    } catch (err) {
      console.error('Unable to read remote.origin.url. Set REPO environment variable or run this from a git repo.');
      process.exit(1);
    }
  }

  // Clean any existing .git in dist
  const gitDir = path.join(distPath, '.git');
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
  }

  // Initialize git in dist
  run('git init', { cwd: distPath });
  run('git checkout -b gh-pages', { cwd: distPath });

  // Configure a fallback user for the commit
  const userName = 'github-pages-deploy';
  const userEmail = 'deploy@local.dev';

  run(`git add -A`, { cwd: distPath });

  // Use -c to provide user info just for this commit (avoids global config requirement)
  try {
    run(`git -c user.name="${userName}" -c user.email="${userEmail}" commit -m "chore: deploy to gh-pages"`, { cwd: distPath });
  } catch (err) {
    // If no changes to commit, continue
    console.log('No changes to commit. Continuing.');
  }

  // Add remote and push
  try {
    run(`git remote add origin ${repoUrl}`, { cwd: distPath });
  } catch (err) {
    // remote may already exist, try to set it
    run(`git remote set-url origin ${repoUrl}`, { cwd: distPath });
  }

  run('git push --force origin gh-pages', { cwd: distPath });

  console.log('\nDeployed to gh-pages branch successfully.');
} catch (err) {
  console.error('Deploy failed:', err.message || err);
  process.exit(1);
}
