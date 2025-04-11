# 📁 CSV Splitter Desktop Aplikacija

Ova aplikacija omogućava jednostavno rasparčavanje velikih CSV fajlova na manje delove i njihovo pakovanje u ZIP arhivu – sve to kroz moderan i jednostavan grafički interfejs.

Izgrađena je pomoću Electron-a, uz podršku za srpski jezik i mogućnost pokretanja kao .exe aplikacija za Windows.

✨ Funkcionalnosti

- ✅ Unos CSV fajla putem dijaloga (ili drag & drop - u budućnosti)
- ✅ Automatsko cepanje fajla na delove od po 100 redova (ili konfigurisano)
- ✅ Svaki deo se zove kao originalni fajl + -1, -2, ...
- ✅ Automatsko pakovanje svih delova u ZIP arhivu
- ✅ Dijalog za čuvanje .zip fajla na disku
- ✅ Podrška za srpska slova (UTF-8 sa BOM)

📸 Izgled aplikacije

[Screenshot uskoro!]

🚀 Pokretanje lokalno (dev mode)

1. Kloniraj repozitorijum:
   git clone https://github.com/tvoj-user/csv-splitter.git
   cd csv-splitter

2. Instaliraj zavisnosti:
   npm install

3. Pokreni aplikaciju:
   npm start

🛠️ Build za Windows (.exe)

Za kreiranje jednog .exe fajla koristi se electron-builder:

    npm run dist

Aplikacija će biti generisana u dist/ folderu kao samostalni .exe.

🧩 Tehnologije

- Electron
- PapaParse – za parsiranje CSV-a
- Archiver – za kreiranje ZIP fajla
- HTML / CSS / JavaScript

📁 Struktura projekta

csv-splitter/
├── main.js           // Electron main proces
├── preload.js        // Most ka rendereru
├── index.html        // UI
├── renderer.js       // Frontend logika
├── package.json
├── icon.ico          // Ikonica aplikacije (opciono)
└── README.md

📝 TODO / Planirani dodaci

- [ ] Podešavanje broja redova po fajlu
- [ ] Drag & drop CSV fajla u aplikaciju
- [ ] Tema (dark/light)
- [ ] Verzija za macOS i Linux
- [ ] Napredna podešavanja i preview CSV-a pre obrade

📄 Licenca

GPL 3.0 © Ivica Stašuk
