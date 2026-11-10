# BQ03 Studio – Web Bluetooth (Beta 0.1)

Eigenständige deutschsprachige Web-App für **BQ03 / V5G**, nicht für AH-M2. Basierend auf den vom Eigentümer bereitgestellten Hardwaretestprotokollen der BQ03-Windows-Beta 0.2 und dem browserbasierten Ansatz von sajingeo/blethermal. Kein Quellcode des fremden Projekts kopiert.

## Start

- **GitHub Pages:** Die Dateien `index.html`, `app.mjs` und `protocol.mjs` in das Stammverzeichnis eines öffentlichen Repositories hochladen. Unter Settings → Pages → Deploy from a branch → main / (root) aktivieren. Nach der Veröffentlichung die HTTPS-Adresse in Chrome/Edge öffnen.
- **Lokal:** Im Ordner `python -m http.server 8000` ausführen und `http://localhost:8000` in Chrome/Edge öffnen. Nicht über `file://` starten.
- Drucker einschalten, andere Drucker-Apps trennen, Bluetooth verbinden, Etikett gestalten, Checkbox bestätigen und erst dann einen Druck auslösen.

## Verifizierungsstand

- Automatische Node-Tests: `node --test tests/protocol.test.mjs` – V5G-Rahmen, CRC-8, belegte Kommandos, 7802-Byte-Etikettenauftrag.
- Hardwaredaten stammen aus `HARDWARETEST_PROTOKOLL.md` der hochgeladenen ZIP: BLE `ae30/ae01/ae02`, 20-Byte-Pakete mit 30 ms Pause, 384 Pixel, 200 dpi, 40×20 mm mit 311×120 Pixel Motiv und 17 Leerzeilen.
- **Browser-Bluetooth, UI und Druck wurden hier nicht am echten Gerät getestet.** Druck nur unter Aufsicht. Die App druckt pro Klick genau einen Auftrag und begrenzt die Druckhöhe auf 137 Zeilen im Etikettenmodus.
- Ein Status 0x80 bedeutet „beschäftigt“; hier wird vor dem Druck auf Status 0 gewartet. Unbekannte Benachrichtigungen, D6/BB/D7 oder andere Statuswerte brechen ab. Ein Not-Stopp kann bereits gesendete Pakete nicht zurückholen.
- Die Druckvorschau verwendet Text und optional ein Bild. Bei Bild und Text können sich Inhalte überlagern. Das Layout ist eine neue Implementierung und wurde nicht mit dem Windows-Editor abgeglichen.

## Nicht implementiert

Weitere Etikettengrößen, Kopien, Dichteänderungen, dynamische Paketgrößen, Dithering, robuste Wiederaufnahme nach Bluetooth-Unterbrechung und vollständige Protokollinterpretation. Die Ausrichtung erfolgt über den separaten F3-Button, nicht automatisch vor jedem Druck.
