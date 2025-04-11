const processBtn = document.getElementById('processBtn');
const status = document.getElementById('status');
const rowsInput = document.getElementById('rowsPerFile');

processBtn.addEventListener('click', async () => {
    status.textContent = 'Učitavanje CSV fajla...';

    const rows = parseInt(rowsInput.value);
    if (isNaN(rows) || rows < 1) {
        status.textContent = 'Unesite validan broj redova (> 0).';
        return;
    }

    const result = await window.csvTools.selectAndSplitCSV(rows);

    if (result?.success) {
        status.textContent = 'Uspešno kreiran ZIP fajl: ' + result.path;
    } else if (result?.error) {
        status.textContent = 'Greška: ' + result.error;
    } else {
        status.textContent = 'Operacija otkazana.';
    }
});