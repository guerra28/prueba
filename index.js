const { app, BrowserWindow } = require("electron");
const devtools = require("./devtools");
const axios = require("axios").default;
const os=require('os')


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

  let timer = setInterval(() => {
    if (win.isVisible()) {
      win.focus();
    } else {
      win.show();
    }
  }, 5000);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
     // console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })

    console.log(os.userInfo())
    
});
