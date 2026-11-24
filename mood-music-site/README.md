# Mon er Kotha

Mood likho -> mood onujayi Bangla/English quote + live-generated music.
Sad -> slow minor music, romantic -> warm chords, happy -> bright, angry -> heavy, calm -> soft pads.

## Run
Just open `index.html` in a browser (no build step). Or: `python3 -m http.server`

## Customize
Edit `MOODS` in `app.js`: add keywords (Bangla/Banglish/English), quotes, or tweak music (`root`, `bpm`, `chords`).

## Push to GitHub
    git init && git add . && git commit -m "first commit"
    git branch -M main
    git remote add origin <your-repo-url>
    git push -u origin main

Free hosting: GitHub Pages (Settings -> Pages -> main branch).
