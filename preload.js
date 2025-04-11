const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('csvTools', {
    selectAndSplitCSV: () => ipcRenderer.invoke('select-and-split')
});
