const reload = require('electron-reload')
const electronDebug= require('electron-debug')

function run_dev_tools() {
    reload(__dirname)
    electronDebug({showDevTools:true})
}

 

exports.run_dev_tools = run_dev_tools