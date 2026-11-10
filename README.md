# BQ03 Studio – Web Beta 0.2

Die Web-App für den **BQ03** mit BLE V5G (AE30/AE01/AE02). Weiterentwicklung der beim Benutzer erfolgreich gedruckten Web-Beta 0.1. Die Anwendung basiert auf den vorhandenen eigenen Hardwareprotokollen, nicht auf einer AH-M2-Protokollannahme.

## Neue Funktionen

- Feste Formate **40×20 mm (hardwarebestätigt), 50×50 mm, 30×15 mm, 25×25 mm, 20×10 mm** und individuell anpassbare Etikettenmaße.
- Vorschau im richtigen **Seitenverhältnis**; nicht im physikalischen 1:1-Maßstab auf dem Bildschirm.
- Texte, Bilder, QR-Codes, EAN-13 und Code 128, drag-and-drop im Canvas, Position/Größe/Rotation/Skalierung, Schriftart/-größe und links/zentriert/rechts.
- Vorlagen lokal im Browser speichern, laden, löschen, als JSON exportieren oder importieren; Deutsch/Englisch.
- Druckversatz in Druckpunkten. PNG-Ausgabe entspricht dem Druckraster.

## Update auf GitHub Pages

1. ZIP lokal **entpacken**.
2. Im bestehenden GitHub-Repository `BQ03-WebApp` **alle Dateien und den Ordner `vendor`** in das Stammverzeichnis hochladen bzw. bestehende Dateien überschreiben. Die Verzeichnisstruktur `vendor/qr.mjs` muss erhalten bleiben.
3. GitHub Pages ist bereits aktiviert. Nach dem Commit die bisherige HTTPS-Webadresse in Chrome oder Edge **mit Strg+F5** neu laden.
4. Zuerst nur Vorschau und QR-/Barcodes testen, dann **40×20 mm** drucken. Andere Größen nur mit Papier und unter Aufsicht testen.

Lokal: im Projektordner `python -m http.server 8000`, dann `http://localhost:8000` in Chrome/Edge öffnen. `file://` unterstützt Web Bluetooth nicht zuverlässig.

## Technischer Prüfstand

- Unveränderte V5G-Befehlsreihenfolge `F5` + Status/Start/Energie/Bildzeilen/Ende + `A1`, 20-Byte-BLE-Blöcke, 30 ms Pause, Sicherheitsabbruch bei unbekannten Nachrichten.
- Für **40×20 mm** mit Null-Offsets wird das bewährte Raster **384×137**, mit Bildfläche **311×120**, `x=71`, `top=17` beibehalten.
- Die weiteren Größen basieren auf in der Hersteller-App analysierten **horizontalen** Rändern und 200-dpi-Höhenabschätzung. **Nicht hardwarebestätigt**. Bei **50×50 mm** überschreitet die theoretische Breite von 50 mm die Druckkopfbreite von 384 Punkten; die Bildbreite wird auf den Druckkopf begrenzt. Keine Garantie für Papiererkennung oder Vorschub.
- Ein „Stop“ beendet weitere Übertragungspakete, kann bereits gesendete Daten nicht rückgängig machen.
- Das Browserprojekt ist ein statischer Prototyp; es wurde nicht selbst auf dem physischen Drucker getestet.

## Tests

`node tests/protocol.test.mjs`

Zusätzlich muss die Seite für eine echte Browserprüfung im Webbrowser gestartet werden. Der Druck benötigt einen echten BLE-Drucker und kann durch automatisierte Tests allein nicht bestätigt werden.

## Sicherheit und Privatsphäre

Web Bluetooth fragt die Zustimmung für das Gerät ab. Druckdaten werden vom Browser direkt per BLE gesendet, Vorlagen bleiben im Browser (`localStorage`). Keine Netzwerkschnittstelle für Druckdaten. Fonts sind Systemschriften. QR-Code-Algorithmus: Kazuhiko Arase, MIT; siehe `LICENSE-THIRD-PARTY.txt`.
