const { exec } = require('child_process');
const os = require('os');

const isWindows = os.platform() === 'win32';

const script = isWindows
  ? '.\\systemScripts\\web-postinstall-fix.bat'
  : 'sh ./systemScripts/web-postinstall-fix.sh';

exec(script, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});
