/* ---------- Mood data: quotes + keywords + music ---------- */
const MOODS = {
  sad: {
    label: "Mon kharap – tumi ekla nou 💙",
    words: ["kharap","koshto","kanna","kando","ekla","eka","lonely","sad","hurt","dukkho","dukho","bhenge","valo lagche na","bhalo lagche na","cry","broken","miss korchi","খারাপ","কষ্ট","কান্না","একা","দুঃখ","ভালো লাগছে না"],
    quotes: [
      ["কষ্টগুলো আসলে ভালোবাসারই অন্য নাম; যা হারিয়েছ, তা তোমার কাছে কতটা দামি ছিল সেটাই সে বলে।","Pain is just love with nowhere to go."],
      ["আজকের অন্ধকার চিরকালের নয়। ভোর সবসময় রাতের শেষেই আসে।","Tonight's dark is not forever. Morning always comes after the longest night."],
      ["কাঁদা দুর্বলতা নয়, মনের ভার নামিয়ে রাখার সবচেয়ে সৎ উপায়।","Crying isn't weakness; it's the heart setting down what it can't carry."]
    ],
    // synthesized: slow, minor
    music: {root:45, bpm:62, wave:"sine", cutoff:900, chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]], scale:[0,3,5,7,10,12,15], density:.35}
  },
  romantic: {
    label: "Prem prem bhab 💗",
    words: ["bhalobasi","valobasi","bhalobashi","valobashi","prem","love","romantic","crush","miss you","tomake","ভালোবাসি","ভালবাসি","প্রেম","ভালোবাসা","প্রিয়","মিস ইউ"],
    quotes: [
      ["ভালোবাসা মানে একসাথে একই দিকে তাকানো নয়; ভালোবাসা মানে চোখ বন্ধ করেও একজনকে দেখতে পাওয়া।","Love is seeing someone clearly even with your eyes closed."],
      ["তুমি আছো বলেই সাধারণ দিনগুলোও গল্প হয়ে যায়।","Because you exist, ordinary days become stories."],
      ["কিছু মানুষের সঙ্গে সময় কাটে না, সময় নতুন করে শুরু হয়।","With some people, time doesn't pass. It begins again."]
    ],
    music: {root:48, bpm:72, wave:"triangle", cutoff:1800, chords:[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,5]], scale:[0,2,4,7,9,12,14,16], density:.5}
  },
  happy: {
    label: "Khushir din! 🌤️",
    words: ["khushi","khushi","happy","valo","bhalo","moja","darun","excited","great","awesome","sundor","খুশি","আনন্দ","ভালো আছি","মজা","দারুণ"],
    quotes: [
      ["আনন্দ কোনো গন্তব্য নয়, এটা পথ চলার ভঙ্গি। আজ মন খুলে হাসো।","Joy isn't a destination. It's a way of walking. Laugh freely today."],
      ["ছোট ছোট সুখগুলোই জীবনের আসল সম্পদ; চায়ের কাপ, বৃষ্টির শব্দ, প্রিয় মানুষের হাসি।","Small joys are the real wealth: tea, rain, someone's laugh."],
      ["আজকের এই ভালো লাগাটা মনে রেখো; কঠিন দিনে এটাই তোমার আলো হবে।","Remember today's feeling. On hard days it will be your light."]
    ],
    music: {root:48, bpm:112, wave:"triangle", cutoff:3000, chords:[[0,4,7],[-5,-1,2],[-3,0,4],[-7,-3,0]], scale:[0,2,4,7,9,12,14,16], density:.8}
  },
  angry: {
    label: "Rag ta ber kore dao 🔥",
    words: ["rag","raag","angry","ragi","biroktto","birokto","frustrated","hate","annoyed","pagol","রাগ","বিরক্ত","ঘৃণা","মেজাজ"],
    quotes: [
      ["রাগ আগুনের মতো; ঠিক জায়গায় রাখলে আলো দেয়, ভুল জায়গায় রাখলে সব পুড়িয়ে ফেলে।","Anger is fire: light in the right place, ruin in the wrong one."],
      ["একটা লম্বা শ্বাস নাও। যা বলতে চাও, দশ সেকেন্ড পরেও তা বলার সুযোগ থাকবে।","Take one long breath. What you want to say will still be there in ten seconds."],
      ["রাগের নিচে সাধারণত একটা কষ্ট লুকিয়ে থাকে; সেটাকে নাম দিলেই রাগ শান্ত হয়।","Under anger there's usually hurt. Name it, and the anger softens."]
    ],
    music: {root:40, bpm:96, wave:"sawtooth", cutoff:1200, chords:[[0,7,12],[3,10,15],[5,12,17],[2,9,14]], scale:[0,3,5,6,7,10,12], density:.6}
  },
  calm: {
    label: "Shanto thako 🌿",
    words: ["chinta","tension","anxious","stress","clueless","bhoy","ghum","tired","klanto","চিন্তা","টেনশন","ভয়","ক্লান্ত","শান্ত"],
    quotes: [
      ["সবকিছু আজ ঠিক করতে হবে না। একটু একটু করে এগোলেই চলবে।","You don't have to fix everything today. Little by little is enough."],
      ["নদী কখনো তাড়াহুড়ো করে না, তবু সমুদ্রে ঠিকই পৌঁছায়।","The river never hurries, yet it reaches the sea."],
      ["থামাও দোষ নয়। থেমে নিঃশ্বাস নেওয়াও এগিয়ে চলার অংশ।","Pausing is not failing. Breathing is part of moving forward."]
    ],
    music: {root:50, bpm:56, wave:"sine", cutoff:1400, chords:[[0,7,14],[-2,5,12],[-5,2,9],[0,5,12]], scale:[0,2,7,9,12,14,19], density:.3}
  }
};
const ORDER = ["sad","romantic","happy","angry","calm"];
const BIG = ["valo lagche na","bhalo lagche na","ভালো লাগছে না"]; // negative phrases outweigh "valo"

/* ---------- Mood detection ---------- */
function detectMood(text){
  const t = text.toLowerCase();
  const score = {};
  ORDER.forEach(m => score[m] = MOODS[m].words.reduce((s,w)=> s + (t.includes(w)?1:0), 0));
  if (BIG.some(p => t.includes(p))) score.sad += 3;
  const best = ORDER.reduce((a,b)=> score[b] > score[a] ? b : a, "calm");
  return score[best] > 0 ? best : "calm";
}

/* ---------- Music engine (Web Audio, no copyrighted files) ---------- */
let ctx, master, delay, timer = null, playing = false, step = 0;
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);

function setup(){
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = +document.getElementById("vol").value;
  delay = ctx.createDelay(1); delay.delayTime.value = .38;
  const fb = ctx.createGain(); fb.gain.value = .38;
  delay.connect(fb); fb.connect(delay); delay.connect(master); master.connect(ctx.destination);
}
function note(freq, when, dur, type, vol, cutoff){
  const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
  o.type = type; o.frequency.value = freq; f.type = "lowpass"; f.frequency.value = cutoff;
  g.gain.setValueAtTime(0, when);
  g.gain.linearRampToValueAtTime(vol, when + Math.min(.4, dur/3));
  g.gain.exponentialRampToValueAtTime(.0001, when + dur);
  o.connect(f); f.connect(g); g.connect(master); g.connect(delay);
  o.start(when); o.stop(when + dur + .05);
}
function startMusic(mood){
  setup(); stopMusic(); ctx.resume();
  const m = MOODS[mood].music, beat = 60 / m.bpm; step = 0;
  const tick = () => {
    const t = ctx.currentTime + .05, bar = Math.floor(step / 4) % m.chords.length, chord = m.chords[bar];
    if (step % 4 === 0) chord.forEach(n => note(mtof(m.root + 12 + n), t, beat * 4.2, m.wave, .07, m.cutoff));
    if (step % 4 === 0) note(mtof(m.root + chord[0]), t, beat * 3.5, "sine", .12, 500); // bass
    if (Math.random() < m.density){
      const n = m.scale[Math.floor(Math.random() * m.scale.length)];
      note(mtof(m.root + 24 + n), t, beat * 2.2, m.wave === "sawtooth" ? "square" : "sine", .09, m.cutoff * 2);
    }
    step++;
  };
  tick(); timer = setInterval(tick, beat * 1000); playing = true;
  document.getElementById("toggle").textContent = "Gaan thamao";
}
function stopMusic(){
  if (timer) clearInterval(timer); timer = null; playing = false;
  document.getElementById("toggle").textContent = "Gaan chalao";
}

/* ---------- UI ---------- */
const $ = id => document.getElementById(id);
let current = "calm";

function showQuote(){
  const [bn, en] = MOODS[current].quotes[Math.floor(Math.random() * MOODS[current].quotes.length)];
  $("quote").textContent = bn; $("quoteEn").textContent = en;
}
function applyMood(mood){
  current = mood;
  document.body.dataset.mood = mood;
  $("result").hidden = false;
  $("moodLabel").textContent = MOODS[mood].label;
  $("songNote").textContent = "Gaan ta ei browser-e live toiri hocche, tai kono copyright jhamela nei.";
  showQuote(); startMusic(mood);
}
ORDER.forEach(m => {
  const b = document.createElement("button");
  b.type = "button"; b.textContent = m; b.onclick = () => applyMood(m);
  $("chips").appendChild(b);
});
$("go").onclick = () => {
  const text = $("input").value.trim();
  if (!text){ $("input").focus(); return; }
  applyMood(detectMood(text));
};
$("another").onclick = showQuote;
$("toggle").onclick = () => playing ? stopMusic() : startMusic(current);
$("vol").oninput = e => { if (master) master.gain.value = +e.target.value; };
