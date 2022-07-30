const reload = require("electron-reload");
const electronDebug = require("electron-debug");

module.exports=function devtools() {
  reload(__dirname);
  electronDebug({ showDevTools: true });
}

