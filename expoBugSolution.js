const { execSync } = require('child_process');

//Solution
try {
  console.log('Updating project dependencies...');
n  execSync('npm install', { stdio: 'inherit' });
  console.log('Updating project dependencies completed.');
  console.log('Cleaning cache...');
  execSync('expo prebuild --clean', { stdio: 'inherit' });
  console.log('Cache cleaned.');
  console.log('Attempting to start the project');
  execSync('expo start', { stdio: 'inherit' });
} catch (error) {
  console.error('Error resolving Expo CLI issue:', error);
}