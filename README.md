# BQ03 Studio – Web Beta 0.2

Die Web-App für den **BQ03** mit BLE V5G (AE30/AE01/AE02). Weiterentwicklung der beim Benutzer erfolgreich gedruckten Web-Beta 0.1. Die Anwendung basiert auf den vorhandenen eigenen Hardwareprotokollen, nicht auf einer AH-M2-Protokollannahme.

## Neue Funktionen

- Feste Formate **40×20 mm (hardwarebestätigt), 50×50 mm, 30×15 mm, 25×25 mm, 20×10 mm** und individuell anpassbare Etikettenmaße.
- Vorschau im richtigen **Seitenverhältnis**; nicht im physikalischen 1:1-Maßstab auf dem Bildschirm.
- Texte, Bilder, QR-Codes, EAN-13 und Code 128, drag-and-drop im Canvas, Position/Größe/Rotation/Skalierung, Schriftart/-größe und links/zentriert/rechts.
- Vorlagen lokal im Browser speichern, laden, löschen, als JSON exportieren oder importieren; Deutsch/Englisch.
- Druckversatz in Druckpunkten. PNG-Ausgabe entspricht dem Druckraster.



Lokal: im Projektordner `python -m http.server 8000`, dann `http://localhost:8000` in Chrome/Edge öffnen. `file://` unterstützt Web Bluetooth nicht zuverlässig.


## Tests

`node tests/protocol.test.mjs`

Zusätzlich muss die Seite für eine echte Browserprüfung im Webbrowser gestartet werden. Der Druck benötigt einen echten BLE-Drucker und kann durch automatisierte Tests allein nicht bestätigt werden.

## Sicherheit und Privatsphäre

Web Bluetooth fragt die Zustimmung für das Gerät ab. Druckdaten werden vom Browser direkt per BLE gesendet, Vorlagen bleiben im Browser (`localStorage`). Keine Netzwerkschnittstelle für Druckdaten. Fonts sind Systemschriften. QR-Code-Algorithmus: Kazuhiko Arase, MIT; siehe `LICENSE-THIRD-PARTY.txt`.
