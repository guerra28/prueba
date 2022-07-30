const { contextBridge, ipcRenderer } = require("electron");
const os = require("node:os");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  usuario: os.userInfo(),
});

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
});

// contextBridge.exposeInMainWorld("usuario", {
//   username: () => {
//     os.userInfo().username;
//   },
//   //username: () => process.versions.node,
// });


contextBridge.exposeInMainWorld("peticionesApi", {
  getUser: () => ipcRenderer.invoke("get-user"),
});