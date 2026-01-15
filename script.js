/* ========== DATA: add/remove matches here ========== */
const MATCHES = {
  // IDs must be URL-safe (kebab-case)
  "aca199-frolov-vs-emeev": {
    id: "aca199-frolov-vs-emeev",
    sport: "mma",
    titleLine: "🥊 ACA 199 – Middleweight Bout",
    fightLine: "Fight: Frolov vs. Emeev",
    title: "ACA 199: Frolov vs. Emeev",
    description: "ACA 199 – Frolov vs. Emeev prediction and event details.",
    event: "Absolute Championship Akhmat (ACA)",
    category: "Middleweight",
    date: "January 16, 2026",
    time: "19:00",
    venue: "Basket Hall, Krasnodar, Russia",
    winner: "Frolov",
    method: `This prediction is based on recent fights, fighter statistics, and style matchups.
I focused on striking accuracy, grappling control, and cardio durability.
I also considered momentum, training camp changes, weight cut conditions, and each fighter’s performance against similar opponents.`,
    opinion: `Frolov enters this matchup with stronger boxing fundamentals, better timing, and more consistent cage control.
His pressure and footwork force opponents to fight backward, which creates openings for both strikes and takedowns.
While his opponent is explosive, Frolov has the higher fight IQ, superior conditioning, and the ability to dictate pace from start to finish.
If he avoids early danger, Frolov should break his opponent down and take over the later rounds.`
  },

  "aca199-polpudnikov-vs-magomedov": {
    id: "aca199-polpudnikov-vs-magomedov",
    sport: "mma",
    titleLine: "🥊 ACA 199 – Lightweight Bout",
    fightLine: "Fight: Polpudnikov vs. Magomedov",
    title: "ACA 199: Polpudnikov vs. Magomedov",
    description: "ACA 199 – Polpudnikov vs. Magomedov prediction and event details.",
    event: "Absolute Championship Akhmat (ACA)",
    category: "Lightweight",
    date: "January 16, 2026",
    time: "19:00",
    venue: "Basket Hall, Krasnodar, Russia",
    winner: "Magomedov",
    method: `Magomedov holds a clear physical and athletic advantage in this matchup.
His output is significantly higher, landing nearly 50% more meaningful strikes per round than Polpudnikov.
Unlike his opponent, who relies almost entirely on standup, Magomedov can mix takedowns, positional grappling, and cage pressure.`,
    opinion: `This prediction was made by comparing striking volume, accuracy, grappling efficiency, and positional control from both fighters.
I analyzed their statistical profiles per round, total cage control time, and offensive threats in different phases: distance, clinch, and ground.
Experience, recent form, physical advantages, and historical performance against stylistic opposites were also included in the evaluation.`
  },

  "aca199-vadimogar-vs-zaurghadzhiev": {
    id: "aca199-vadimogar-vs-zaurghadzhiev",
    sport: "mma",
    titleLine: "🥊 ACA 199 – Lightweight Bout",
    fightLine: "Fight: Vadim Ogar vs. Zaur Ghadzhiev",
    title: "ACA 199: Vadim Ogar vs. Zaur Ghadzhiev",
    description: "ACA 199 – Vadim Ogar vs. Zaur Ghadzhiev prediction and event details.",
    event: "Absolute Championship Akhmat (ACA)",
    category: "Lightweight",
    date: "January 16, 2026",
    time: "19:00",
    venue: "Basket Hall, Krasnodar, Russia",
    winner: "Vadim Ogar",
    method: `Submission (Round 2 or Round 3)`,
    opinion: `Vadim Ogar enters this matchup with a clear stylistic advantage. Despite being the shorter fighter, Ogar has a proven submission-first approach, securing 60% of his professional victories by tap-out. His compact frame, lower center of gravity, and grappling fundamentals make him difficult to take down and control for longer-limbed opponents.
Zaur Ghadzhiev has physical tools—height and reach—but his style works directly against him in this matchup. His stats show:
Low significant strike accuracy (3 of 18)
Limited ground offense
No submission threat
Heavy reliance on control time rather than finishing ability
Ghadzhiev may find early success securing a takedown, but his inability to finish from top position could backfire. Against a submission specialist like Ogar, prolonged grappling exchanges increase danger rather than reduce it. Vadim only needs one scramble or positional mistake to lock up a choke or joint submission.
If Zaur cannot dominate at distance—which his striking numbers suggest is unlikely—he is forced into the exact area where Vadim thrives. Ogar’s experience and finishing instinct make him the more dangerous fighter throughout all three rounds.
Pick: Vadim Ogar via Submission (R2–R3)`
  },

"aca199-nikabagamaev-vs-glebkhabibulin": {
    id: "aca199-nikabagamaev-vs-glebkhabibulin",
    sport: "mma",
    titleLine: "🥊 ACA 199 – Featherweight Bout",
    fightLine: "Fight: Nikabagamaev vs. Gleb Khabibulin",
    title: "ACA 199: Nikabagamaev vs. Gleb Khabibulin",
    description: "ACA 199 – Nikabagamaev vs. Gleb Khabibulin prediction and event details.",
    event: "Absolute Championship Akhmat (ACA)",
    category: "Featherweight",
    date: "January 16, 2026",
    time: "19:00",
    venue: "Basket Hall, Krasnodar, Russia",
    winner: "Nikabagamaev",
    method: `Decision (UD)`,
    opinion: `Bagama’s grappling pressure and pace give him the clearest path to victory. While Kukhlebov lands more volume on the feet, he offers almost no takedown threat and struggles under sustained wrestling pressure. Chadaev can clinch, drag the fight to the mat, and control position long enough to win rounds. Even without a finish, his top pressure and work rate should bank 2 of 3 rounds.`
}

};

/* ========== UTILS ========== */
function el(sel) { return document.querySelector(sel); }
function els(sel) { return Array.from(document.querySelectorAll(sel)); }

/* ========== THEME (keep if you use) ========== */
function setTheme(theme) {
  document.body.className = theme;
  try { localStorage.setItem("theme", theme); } catch (e) {}
}
(function loadTheme(){
  try {
    const t = localStorage.getItem("theme");
    if (t) document.body.className = t;
  } catch (e) {}
})();

/* ========== INDEX: render MMA list (football & basketball left empty) ========== */
function renderIndexIfNeeded() {
  const mmaList = el("#mma-list");
  if (!mmaList) return; // not on index
  mmaList.innerHTML = "";

  // collect MMA matches in the order you want
  const mmaMatches = Object.values(MATCHES).filter(m => m.sport === "mma");

  if (mmaMatches.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-note";
    p.textContent = "No MMA predictions yet.";
    mmaList.appendChild(p);
    return;
  }

  mmaMatches.forEach(m => {
    const a = document.createElement("a");
    a.className = "match-card";
    a.href = `match-template.html?id=${encodeURIComponent(m.id)}`;
    // two-line look: titleLine then fightLine
    a.innerHTML = `<div class="match-line-title">${m.titleLine}</div>
                   <div class="match-line-fight" style="opacity:0.85;margin-top:6px;">${m.fightLine}</div>`;
    mmaList.appendChild(a);
  });
}

/* ========== INDEX: tabs ========== */
function showTab(tabId) {
  els(".tab-content").forEach(s => s.classList.remove("active"));
  const target = el(`#${tabId}`);
  if (target) target.classList.add("active");

  // tab active ui
  els(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
}

/* ========== MATCH TEMPLATE: load data by ?id=... ========== */
function loadMatchTemplateIfNeeded() {
  if (!el("#match-title")) return; // not on match page
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  if (!id || !MATCHES[id]) {
    // nothing found: show placeholder
    el("#match-title").textContent = "Match not found";
    el("#match-event").textContent = "";
    el("#match-datetime").textContent = "";
    el("#match-venue").textContent = "";
    el("#match-winner").textContent = "";
    el("#match-method").textContent = "";
    return;
  }

  const m = MATCHES[id];

  // SEO
  if (m.title) {
    document.title = `${m.title} | PredictionCourt`;
    const metaDesc = el("#meta-desc");
    if (metaDesc) metaDesc.content = m.description || "";
  }

  el("#match-title").textContent = m.title || m.titleLine;
  el("#match-event").textContent = `Organization: ${m.event} — Category: ${m.category}`;
  el("#match-datetime").textContent = `Date: ${m.date} — Time: ${m.time}`;
  el("#match-venue").textContent = `Venue: ${m.venue}`;
  el("#match-winner").textContent = m.winner || "";
  el("#match-method").textContent = m.method || "";
  // leave analysis empty for you:
  el("#match-analysis").textContent = m.opinion || "";
   if (!el(".back-button")) {
    const backBtn = document.createElement("a");
    backBtn.className = "back-button";
    backBtn.href = "../index.html";
    backBtn.textContent = "← Back to all matches";
    const main = el("main.container.match-page");
    main.insertBefore(backBtn, main.firstChild);
  }
}

/* ========== BOOTSTRAP ========== */
document.addEventListener("DOMContentLoaded", () => {
  renderIndexIfNeeded();
  loadMatchTemplateIfNeeded();

  // default tab MMA veya hash’e göre
  const hash = location.hash.replace("#", "");
  const defaultTab = hash || "mma"; 
  showTab(defaultTab);

  // LOGO: scroll to top
  const logo = el(".logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

