document.getElementById('processBtn').addEventListener('click', async () => {
    const status = document.getElementById('status');
    status.textContent = 'Učitavanje CSV fajla...';

    const result = await window.csvTools.selectAndSplitCSV();

    if (result?.success) {
        status.textContent = 'Uspešno kreiran ZIP fajl: ' + result.path;
    } else if (result?.error) {
        status.textContent = 'Greška: ' + result.error;
    } else {
        status.textContent = 'Operacija otkazana.';
    }
});
