const { app, BrowserWindow } = require("electron");
const devtools = require("./devtools");
const axios = require("axios").default;
const os=require('os')

//activar herramientas de desarrollo
if (process.env.NODE_ENV === "development") {
  devtools.run_dev_tools();
}

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 400,
    height: 400,
  });
  win.loadFile("index.html");
  win.toggleDevTools();


  //timer cada 5 segundos para mostrar la ventana
  let timer = setInterval(() => {
    if (win.isVisible()) {
      win.focus();
    } else {
      win.show();
    }
  }, 5000);


  //peticion axios a api
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
     // console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })

    //nombre del usaurio logado en la sesion del pc
    console.log(os.userInfo().username)
    
});
