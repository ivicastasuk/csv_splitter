const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const Papa = require('papaparse');
const archiver = require('archiver');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            enableRemoteModule: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('select-and-split', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
        title: 'Izaberi CSV fajl',
        filters: [{ name: 'CSV fajlovi', extensions: ['csv'] }],
        properties: ['openFile']
    });

    if (canceled || filePaths.length === 0) return { canceled: true };

    const filePath = filePaths[0];
    const rowsPerFile = 100;
    const baseFileName = path.basename(filePath, path.extname(filePath)); // npr. 'hoteli' iz 'hoteli.csv'

    let data;
    try {
        data = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        return { error: 'Greška prilikom čitanja CSV fajla.' };
    }

    const parsedData = Papa.parse(data, { header: true }).data;

    const zipPath = dialog.showSaveDialogSync({
        title: 'Sačuvaj ZIP fajl',
        defaultPath: 'rasparcani.csv.zip',
        filters: [{ name: 'ZIP Fajlovi', extensions: ['zip'] }],
    });

    if (!zipPath) return { canceled: true };

    try {
        const archive = archiver('zip', { zlib: { level: 9 } });
        const output = fs.createWriteStream(zipPath);
        archive.pipe(output);

        for (let i = 0; i < parsedData.length; i += rowsPerFile) {
            const chunk = parsedData.slice(i, i + rowsPerFile);
            const csvChunk = '\ufeff' + Papa.unparse(chunk);
            archive.append(csvChunk, { name: `${baseFileName}-${i / rowsPerFile + 1}.csv` });
        }

        return new Promise((resolve, reject) => {
            output.on('close', () => {
                resolve({ success: true, path: zipPath });
            });
        
            output.on('error', (err) => {
                reject({ error: 'Greška prilikom snimanja ZIP fajla.' });
            });
        
            archive.finalize();
        });
    } catch (err) {
        return { error: 'Greška prilikom kreiranja ZIP fajla.' };
    }
});
