const {app, BrowserWindow} = require ('electron')
const devtools = require('./devtools')

if(process.env.NODE_ENV ==='development'){

    devtools.run_dev_tools()
}


app.on('ready',()=>{
    let win =new BrowserWindow({
        width:400,
        height:400
    })
    win.loadFile('index.html')
    win.toggleDevTools()
    
})