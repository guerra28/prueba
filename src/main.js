"use strict";

const { app, BrowserWindow, ipcMain, Menu, screen, Tray } = require("electron");
const devtools = require("./devtools");
const getUser = require("./peticiones-api");
const handleErrors = require("./handle-errors.js");

const os = require("os");
const path = require("path");

global.win;
global.tray;

if (process.env.NODE_ENV === "development") {
  devtools();
}

app.whenReady().then(async () => {
  ipcMain.handle("get-user", createDialog);

  //crea una nueva ventana
  createWindow();
  

  //muestra la ventana cuando esta lista
  global.win.once("ready-to-show", () => {
    global.win.show();
  });

  //inicia el timer para mostrar la ventana cada x tiempo
  let timer = setInterval(() => {
    if (global.win.isVisible()) {
      global.win.focus();
    } else {
      global.win.show();
    }
  }, 600000);

  //cuando la ventana es cerrada sale de la aplicacion
  global.win.on("close", (e) => {
    e.preventDefault();
    //global.win = null
    //app.quit()
    global.win.hide();
  });

  global.win.on("closed", () => {
    global.win = null;
    app.quit();
  });

  let icon = path.join(__dirname, "assets", "icons", "cohete.ico");

  global.tray = new Tray(icon);
  global.tray.setToolTip("Eco Agentes");
  global.tray.on("click", () => {
    global.win.isVisible() ? global.win.focus() : global.win.show();
  });

  global.win.loadFile(path.join(__dirname, "index.html"));
});

const createWindow = () => {
  let size = screen.getPrimaryDisplay().size;
  global.win = new BrowserWindow({
    width: 430,
    height: 300,
    title: "Eco Agentes",
    show: false,
    resizable: false,
    minimizable: true,
    alwaysOnTop: true,
    closable: true,

    icon: path.join(__dirname, "assets", "img", "cohete 128.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webgl: false,
    },
  });

  global.win.setPosition(size.width - 430, size.height - 324);

  global.win.removeMenu();
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("createWindow", () => {
  app.quit();
});

const createDialog=()=>{
  let dialog=new BrowserWindow({
    width:700,
    height:600,
    parent:global.win,
    modal:true,
    resizable:false
  })
  dialog.removeMenu()
  dialog.loadFile(path.join(__dirname,'config.html'))
}
