# 📁 CSV Splitter Desktop Aplikacija

Ova aplikacija omogućava jednostavno rasparčavanje velikih CSV fajlova na manje delove i njihovo pakovanje u ZIP arhivu – sve to kroz moderan i jednostavan grafički interfejs.

Izgrađena je pomoću Electron-a, uz podršku za srpski jezik i mogućnost pokretanja kao .exe aplikacija za Windows.

<details>
<summary>✨ Funkcionalnosti</summary>

- ✅ Unos CSV fajla putem dijaloga (ili drag & drop - u budućnosti)
- ✅ Automatsko cepanje fajla na delove od po 100 redova (ili konfigurisano)
- ✅ Svaki deo se zove kao originalni fajl + -1, -2, ...
- ✅ Automatsko pakovanje svih delova u ZIP arhivu
- ✅ Dijalog za čuvanje .zip fajla na disku
- ✅ Podrška za srpska slova (UTF-8 sa BOM)

</details>
<details>
<summary>📸 Izgled aplikacije</summary>

[Screenshot uskoro!]

</details>
<details>
<summary>🚀 Pokretanje lokalno (dev mode)</summary>

1. Kloniraj repozitorijum:
   ```
   git clone https://github.com/tvoj-user/csv-splitter.git
   cd csv-splitter
   ```

2. Instaliraj zavisnosti:
   `npm install`

3. Pokreni aplikaciju:
   `npm start`

</details>
<details>
<summary>🛠️ Build za Windows (.exe)</summary>

Za kreiranje desktop aplikacije koristi se electron-builder:

    npm run dist

Aplikacija će biti generisana u dist/ folderu kao samostalni .exe sa svim potrebnim pratećim fajlovima.

</details>
<details>
<summary>🧩 Tehnologije</summary>

- Electron
- PapaParse – za parsiranje CSV-a
- Archiver – za kreiranje ZIP fajla
- HTML / CSS / JavaScript
- 
</details>
<details>
<summary>📁 Struktura projekta</summary>

```
.
├── main.js           // Electron main proces
├── preload.js        // Most ka rendereru
├── index.html        // UI
├── renderer.js       // Frontend logika
├── package.json
├── icon.ico          // Ikonica aplikacije (opciono)
└── README.md
```

</details>
<details>
<summary>📝 TODO / Planirani dodaci</summary>

- [x] Podešavanje broja redova po fajlu
- [ ] Drag & drop CSV fajla u aplikaciju
- [ ] Tema (dark/light)
- [ ] Verzija za macOS i Linux
- [ ] Napredna podešavanja i preview CSV-a pre obrade
- [ ] 
</details>
<details>
<summary>📄 Licenca</summary>

   GPL-3.0 © Ivica Stašuk
   
</details>
