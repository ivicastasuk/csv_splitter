const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('csvTools', {
    selectAndSplitCSV: (rowsPerFile) => ipcRenderer.invoke('select-and-split', rowsPerFile)
});