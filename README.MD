# DT207G – Laboration 4 – Webbplats med inloggningssystem 
En fristående webbplats med inloggnings- och registreringsfunktioner samt en skyddad undersida som konsumerar den separata backend-webbtjänsten via Fetch API och JWT.

## GitHub-repo
https://github.com/ardalansale/dt207g-lab-frontend

## Publicerad webbplats
https://dt207g-lab3.netlify.app/

## Funktionalitet
- Formulär för att skapa konto och logga in med enkel klientvalidering.
- Sparar och hanterar JWT-token säkert via webbläsarens `sessionStorage`.
- Skyddad undersida (`secret.html`) som verifierar inloggning och hämtar data från API:et i tabellform.
- Utloggningsfunktion som rensar token och omdirigerar användaren.
- Responsiv design med enhetlig CSS och anpassad typografi.

## Komponenter och struktur
- `index.html` – Startsida med formulär för registrering och inloggning.
- `secret.html` – Skyddad undersida som kräver giltig token för att visa innehåll.
- `script.js` – Gemensam JavaScript-logik för formulärhantering, API-anrop (`fetch`) och sessioner.
- `style.css` – Global stilmall med CSS-reset, layout och komponentstilar.

## Tekniker
- HTML5
- CSS3 (med Google Fonts - DM Sans)
- JavaScript (Fetch API, sessionStorage, Asynkrona anrop)

## Körning
1. Säkerställ att backend-servern körs lokalt på `http://localhost:3000`.
2. Öppna `index.html` i en webbläsare eller via Live Server i VS Code.