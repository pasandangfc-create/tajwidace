/* ==============================
   TAJWID ACE – FINAL FULL VERSION (5 LEVEL + SISTEM KUNCI LEVEL)
   ============================== */

// ----- DATA LEVEL -----
const LEVEL_META = {
  1: "Santri Pemula",
  2: "Pembaca Lancar",
  3: "Qari Muda",
  4: "Tajwid Master",
  5: "Tajwid Ace 🏆"
};

// ----- BANK SOAL -----
const QUESTION_BANK = {

  1: [
    {q: "Apa arti dari tajwid secara bahasa?", c: ["Membaca", "Memperindah", "Melafalkan", "Menghafal"], a: 1},
    {q: "Hukum membaca Al-Qur'an dengan tajwid adalah...", c: ["Sunnah", "Makruh", "Mubah", "Wajib"], a: 3},
    {q: "Tujuan utama mempelajari ilmu tajwid adalah...", c: ["Supaya cepat menghafal Al-Qur'an","Agar suara menjadi indah","Agar tidak salah dalam membaca Al-Qur'an","Supaya bisa menjadi imam"], a: 2},
    {q: "Huruf-huruf Al-Qur'an dibaca dengan aturan yang disebut...", c: ["Fiqih","Hadits","Tajwid","Tafsir"], a: 2},
    {q: "Hukum bacaan jika mim sukun (مْ) bertemu dengan huruf ba (ب) disebut...", c: ["Ikhfa’ Syafawi","Idgham Mimi","Idzhar Syafawi","Qalqalah"], a: 0},
    {q: "Mad Thabi’i dibaca selama...", c: ["1 harakat","2 harakat","3 harakat","6 harakat"], a: 1},
    {q: "Manakah potongan ayat yang memiliki kandungan hukum Ikhfa Syafawi?", c: ["تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ","مَا لَمْ يَعْلَمْ","أَمۡ لَهُمۡ","عَذَابٌ أَلِيمٞ"], a: 0},
    {q: "Huruf Idgham bi ghunnah yaitu?", c: ["ح, خ, ع, غ, ه, ء","ل, ر","و ,ن ,ي , م","ن, م"], a: 2},
    {q: "Cara membaca iqlab adalah…", c: ["Meleburkan suara nun kepada huruf berikutnya","Mengganti suara nun dengan mim","Menyamarkan makhraj dan sifat nun","Menjelaskan makhraj dan sifat nun"], a: 1},
    {q: "Secara bahasa, ikhfa’ artinya…", c: ["Jelas","Memasukkan","Menggantikan","Menyamarkan"], a: 3}
  ],

  2: [
    {type:"audio",q:"Hukum tajwid apabila tanwin bertemu dengan huruf حَ disebut?", audio:"audio/l2-1.mp3", c:["Ikhfa","Idzhar","Idgham Bighunnah","Idgham Bila Ghunnah"], a:1},
    {type:"audio",q:"Hukum bacaan ketika nun sukun bertemu huruf ر disebut?", audio:"audio/l2-2.mp3", c:["Ikhfa","Idzhar","Idgham bila ghunnah","Idgham bi ghunnah"], a:2},
    {type:"audio",q:"Hukum bacaan jika mim sukun bertemu huruf ب disebut…", audio:"audio/l2-3.mp3", c:["Idzhar","Ikhfa Syafawi","Idgham Bi ghunnah","Idgham Mimi"], a:1},
    {q:"Apabila ada mim sukun bertemu dengan huruf mim maka hukum bacaannya disebut…", c:["Ikhfa syafawi","Idzhar","Idgham mimi","Izhar Syafawi"], a:2},
    {q:"Berikut yang merupakan contoh izhar syafawi…", c:["فِيْ قُلُوْبِهِمْ مَّرَضٌۙ","اُولٰۤىِٕكَ هُمْ خَيْرُ الْبَرِيَّةِۗ","تَرْمِيْهِمْ بِحِجَارَةٍ مِّنْ سِجِّيْلٍۙ","الَّذِيْٓ اَطْعَمَهُمْ مِّنْ جُوْعٍ"], a:1},
    {q:"Apabila ada Mim bertasydid atau Nun bertasydid maka dibaca dengan…", c:["Jelas","Ghunnah","Panjang","Qalqalah"], a:1},
    {q:"Yang bukan contoh mim/nun tasydid adalah…", c:["قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ","وَّامْرَاَتُهٗۗ حَمَّالَةَ الْحَطَبِۚ","مَلِكِ النَّاسِۙ","قُلْ هُوَ اللّٰهُ اَحَدٌۚ"], a:3},
    {q:"Yang bukan huruf Qamariyah adalah…", c:["ب, ج, ح, خ, ع","غ, ف, ق, ك, م","و, ه, ي","ت, ث, د, ذ"], a:3},
    {q:"Cara membaca huruf syamsiah yang benar adalah…", c:["Dimasukkan ke huruf syamsiah","Dibaca jelas","Disamarkan","Didengungkan"], a:0},
    {type:"audio",q:"Pada ayat تِلْكَ آَيَاتُ اللَّهِ hukum pada Lam Jalalah disebut apa?", audio:"audio/l2-10.mp3", c:["Idzhar","Tarqiq","Tafkhim","Idgham Bi Ghunnah"], a:2}
  ],

  3: [
    {type:"audio",q:"Lam Jalalah pada lafaz بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ hukumnya adalah…", audio:"audio/l3-1.mp3", c:["Tarqiq karena sebelumnya fathah","Tarqiq karena sebelumnya kasrah","Tafkhim karena sesudahnya kasrah","Tafkhim karena sebelumnya dhammah"], a:1},
    {q:"Yang bukan termasuk Idgham Mutamatsilain adalah…", c:["ٱضْرِب بِّعَصَاكَ","اِذْ ذَّهَبَ","فَمَا رَبِحَتْ تِّجَارَتُهُمْ","فِى يَوْمٍ كَانَ"], a:3},
    {q:"Cara membaca Idgham Mutaqaribain adalah…", c:["Dimasukkan ke huruf kedua","Tidak diidghamkan","Didengungkan","Dibaca jelas"], a:0},
    {type:"audio",q:"Pada ayat وَقُلْ رَّبِّ hukum tajwidnya adalah…", audio:"audio/l3-4.mp3", c:["Idgham Mimi","Idgham Mutaqaribain","Idgham Bila Ghunnah","Idgham Mutamatsilain"], a:1},
    {q:"Hukum idgham pada (بَسَطْتَ) adalah…", c:["Idgham mutamatsilain","Idgham mutajanisain","Idgham mutaqaribain","Idgham syamsiyyah"], a:1},
    {q:"Huruf-huruf qalqalah ada sebanyak…", c:["3","4","5","6"], a:2},
    {q:"Qalqalah kubra terjadi bila huruf qalqalah…", c:["Berada di tengah ayat","Sukun karena waqaf","Berharakat kasrah","Didahului mad"], a:1},
    {q:"Hukum bacaan jika mim sukun bertemu dengan ba disebut…", c:["Ikhfa’ Syafawi","Idgham Mimi","Idzhar Syafawi","Qalqalah"], a:0},
    {type:"audio",q:"Lafaz قَدْ pada ayat قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ memiliki hukum…", audio:"audio/l3-9.mp3", c:["Qalqalah Sughra","Qalqalah Kubra","Tidak ada Qalqalah","Ikhfa’ Haqiqi"], a:0},
    {type:"audio",q:"Pada lafaz رَبِّكَ hukum bacaan huruf Ra adalah…", audio:"audio/l3-10.mp3", c:["Tafkhim karena kasrah","Tarqiq karena sebelumnya kasrah","Tafkhim karena fathah","Tarqiq karena ra sukun"], a:2}
  ],

  4: [
    {type:"audio",q:"Jenis mad pada kata وَالضَّالِّينَ adalah…", audio:"audio/l4-1.mp3", c:["Mad Thabi’i","Mad Wajib Muttasil","Mad Jaiz Munfasil","Mad Lazim Mutsaqqal Kilmi"], a:3},
    {q:"Hukum mad pada kata ءَآلْآنَ dibaca sepanjang…", c:["2 harakat","4/5 harakat","6 harakat","3 harakat"], a:2},
    {type:"audio",q:"Hukum pada kata خَوْفٍ ketika dibaca waqaf adalah…", audio:"audio/l4-3.mp3", c:["Mad ‘Aridh Lissukun","Mad Layin","Mad Wajib Muttasil","Ikhfa’"], a:1},
    {q:"Hukum bacaan pada kata العَالَمِينَ ketika dibaca waqaf adalah…", c:["Mad Thabi’i","Mad Wajib Muttasil","Mad ‘Āriḍ Lissukūn","Mad Layin"], a:2},
    {q:"Kata كِتَابَهُ mengandung mad…", c:["Silah Qasirah","Silah Thawilah","Badal","Jaiz Munfasil"], a:0},
    {type:"audio",q:"Hukum tajwid pada آتَيْنَاهُ آيَاتِنَا adalah…", audio:"audio/l4-6.mp3", c:["Mad Silah Qasirah","Mad Silah Thawilah","Mad Wajib Muttasil","Mad ‘Aridh Lissukun"], a:1},
    {type:"audio",q:"Ketika berhenti di kata حَكِيمًا dibaca menurut hukum…", audio:"audio/l4-7.mp3", c:["حَكِيمَن","حَكِيمًا","حَكِيمٌ","حَكِيمَا"], a:3},
    {q:"Kata أُوتُوا mengandung hukum mad…", c:["Mad Thabi’i","Mad Jaiz Munfasil","Mad Badal","Mad Wajib Muttasil"], a:2},
    {type:"audio",q:"Jenis mad pada bacaan الٓمّٓ adalah…", audio:"audio/l4-9.mp3", c:["Mad Thabi’i","Mad Lazim Harfi Musyabbah","Mad Wajib Muttasil","Mad Jaiz Munfasil"], a:1},
    {type:"audio",q:"Jenis mad pada huruf طٰهٰ adalah…", audio:"audio/l4-10.mp3", c:["Mad Thabi’i","Mad Wajib Muttasil","Mad Lazim Harfi Musyabbah","Mad Lazim Harfi Mukhaffaf"], a:3}
  ],

  5: [
    {q:"Bacaan Mad Tamkin terjadi ketika…", c:["Ada dua huruf mad berdempetan","Ada ya’ tasydid didahului ya’ kasrah","Ada alif dan hamzah dalam satu kata","Ada huruf mati karena waqaf"], a:1},
    {type:"audio",q:"Mad Farqi terjadi ketika…", audio:"audio/l5-2.mp3", c:["Mad thabi’i bertemu huruf sukun","Mad bertemu hamzah satu kata","Huruf mad sebelum hamzah istifham bertasydid","Ada alif lam syamsiyah"], a:2},
    {q:"Bacaan huruf ر dibaca tebal jika…", c:["Berharakat kasrah","Didahului huruf isti‘la’","Berharakat fathah atau dhammah","Dibaca waqaf"], a:2},
    {q:"Bacaan ر pada kata رِزْقًا dibaca…", c:["Tebal","Tipis","Tashil","Idgham"], a:1},
    {q:"Huruf qalqalah ada sebanyak…", c:["3","4","5","6"], a:2},
    {q:"Qalqalah kubra terjadi bila huruf qalqalah…", c:["Di tengah ayat","Sukun karena waqaf","Berharakat kasrah","Didahului mad"], a:1},
    {type:"audio",q:"Jenis mad pada kata وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًا ketika berhenti adalah…", audio:"audio/l5-7.mp3", c:["Mad Silah Qasirah","Mad Silah Thawilah","Mad ‘Iwadh","Mad Badal"], a:2},
    {q:"Hukum mad pada kata أُوتُوا adalah…", c:["Mad Thabi’i","Mad Jaiz Munfasil","Mad Badal","Mad Wajib Muttasil"], a:2},
    {type:"audio",q:"Jenis mad pada bacaan الٓمّٓ adalah…", audio:"audio/l5-9.mp3", c:["Mad Thabi’i","Mad Lazim Harfi Musyabbah","Mad Wajib Muttasil","Mad Jaiz Munfasil"], a:1},
    {type:"audio",q:"Jenis mad pada huruf طٰهٰ adalah…", audio:"audio/l5-10.mp3", c:["Mad Thabi’i","Mad Wajib Muttasil","Mad Lazim Harfi Musyabbah","Mad Lazim Harfi Mukhaffaf"], a:3}
  ]
};

// ======== VARIABEL GAME ========
let state = { level: 1, index: 0, score: 0, correct: 0, lives: 3 };
let unlockedLevel = parseInt(localStorage.getItem("unlockedLevel") || "1");
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ======== FUNGSI NAVIGASI ========
function showScene(id) {
  $$(".scene").forEach(s => s.classList.remove("active"));
  $("#" + id).classList.add("active");
  if (id === "levels") renderLevels();
}

// ======== INISIALISASI ========
document.addEventListener("DOMContentLoaded", () => {
  $("#startBtn").addEventListener("click", () => showScene("menu"));
  $$("[data-target]").forEach(btn => btn.addEventListener("click", () => showScene(btn.dataset.target)));
  renderLevels();

  const resetBtn = document.createElement("button");
  resetBtn.id = "resetProgress";
  resetBtn.className = "btn small";
  resetBtn.textContent = "🔄 Reset Progres";
  resetBtn.onclick = () => {
    if (confirm("Hapus progres dan mulai dari level 1?")) {
      localStorage.removeItem("unlockedLevel");
      unlockedLevel = 1;
      renderLevels();
    }
  };
  document.querySelector("#levels .panel").appendChild(resetBtn);
});

// ======== LEVEL ========
function renderLevels() {
  const grid = $("#levelsGrid");
  grid.innerHTML = "";

  Object.keys(QUESTION_BANK).forEach(k => {
    const lvl = parseInt(k);
    const card = document.createElement("div");
    card.className = "level-card";
    const locked = lvl > unlockedLevel;
    card.innerHTML = `
      <div style="font-weight:800;font-size:1.05rem;color:#2e7a34">Level ${lvl} — ${LEVEL_META[lvl]}</div>
      <div style="color:#666;margin-top:6px">10 soal — minimal 7 benar untuk lulus</div>
      <div style="margin-top:10px;">
        ${
          !locked
            ? `<button class="btn green select-level" data-level="${lvl}">Mulai Level ${lvl}</button>`
            : `<button class="btn small" disabled style="background:#ccc;cursor:not-allowed;">🔒 Terkunci</button>`
        }
      </div>`;
    grid.appendChild(card);
  });

  document.querySelectorAll(".select-level").forEach(b => {
    b.addEventListener("click", e => {
      const lvl = parseInt(e.currentTarget.dataset.level, 10);
      startLevel(lvl);
    });
  });
}

// ======== MULAI LEVEL ========
function startLevel(lvl) {
  state = { level: lvl, index: 0, score: 0, correct: 0, lives: 3 };
  showScene("quiz");
  renderQuestion();
}

// ======== RENDER SOAL ========
function renderQuestion() {
  const qset = QUESTION_BANK[state.level];
  if (!qset || state.index >= qset.length) return finishLevel();

  const q = qset[state.index];
  $("#levelName").textContent = `Level ${state.level} — ${LEVEL_META[state.level]}`;
  $("#score").textContent = "Skor : " + state.score;
  $("#lives").textContent = "❤️ " + state.lives;

  $("#questionText").textContent = q.q;
  const list = $("#choiceList");
  list.innerHTML = "";

  const audioBox = $("#audioBox");
  audioBox.innerHTML = "";
  if (q.type === "audio" && q.audio) {
    const audio = document.createElement("audio");
    audio.src = q.audio;
    audio.controls = true;
    audio.style.marginBottom = "10px";
    audioBox.appendChild(audio);
  }

  q.c.forEach((txt, i) => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = txt;
    b.onclick = () => checkAnswer(i);
    list.appendChild(b);
  });
}

// ======== CEK JAWABAN ========
function checkAnswer(i) {
  const q = QUESTION_BANK[state.level][state.index];
  const buttons = $$(".choice");
  buttons.forEach(b => (b.disabled = true));

  const correct = i === q.a;
  if (correct) {
    buttons[i].classList.add("correct");
    state.score += 10;
    state.correct++;
    showFeedback("Benar ✅", "#4caf50");
  } else {
    buttons[i].classList.add("wrong");
    buttons[q.a].classList.add("correct");
    state.lives--;
    showFeedback("Salah ❌", "#e74c3c");
  }

  $("#score").textContent = "Skor : " + state.score;
  $("#lives").textContent = "❤️ " + state.lives;

  setTimeout(() => {
    if (state.lives <= 0) finishLevel();
    else {
      state.index++;
      renderQuestion();
    }
  }, 1000);
}

// ======== FEEDBACK ========
function showFeedback(text, color) {
  const overlay = $("#feedbackOverlay");
  overlay.innerHTML = `<div class="feedback-text" style="color:${color}">${text}</div>`;
  overlay.classList.add("show");
  setTimeout(() => overlay.classList.remove("show"), 800);
}

// ======== HASIL LEVEL ========
function finishLevel() {
  showScene("result");
  $("#finalScore").textContent = state.score;
  $("#correctCount").textContent = state.correct;
  const box = $("#resultButtons");
  box.innerHTML = "";

  if (state.correct >= 7) {
    if (state.level >= unlockedLevel) {
      unlockedLevel = state.level + 1;
      localStorage.setItem("unlockedLevel", unlockedLevel);
    }
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn green";
    nextBtn.textContent = "Lanjut Level Berikutnya";
    nextBtn.onclick = () => {
      const next = state.level + 1;
      if (QUESTION_BANK[next]) startLevel(next);
      else alert("🎉 Selamat! Kamu telah menyelesaikan semua level!");
    };
    const menuBtn = document.createElement("button");
    menuBtn.className = "btn small";
    menuBtn.textContent = "Menu Utama";
    menuBtn.onclick = () => showScene("menu");
    box.append(nextBtn, menuBtn);
  } else {
    const retry = document.createElement("button");
    retry.className = "btn green";
    retry.textContent = "Coba Lagi";
    retry.onclick = () => startLevel(state.level);
    const menu = document.createElement("button");
    menu.className = "btn small";
    menu.textContent = "Menu Utama";
    menu.onclick = () => showScene("menu");
    box.append(retry, menu);
  }
}

// ======== KELUAR ========
$("#quitBtn").onclick = () => showScene("menu");
const exitBtn = document.getElementById("exitBtn");
if (exitBtn) {
  exitBtn.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin keluar dari aplikasi?")) {
      window.close();
    }
  });
}

/* =====================================================
   FITUR BARU : AYO BELAJAR (KARTU DIGITAL)
   ===================================================== */

const LEARN_CARDS = [
  {h:"ا",t:"Ikhfa Haqiqi",x:"Nun sukun/tanwin bertemu 15 huruf dibaca samar.",e:"مِن شَرِّ مَا خَلَقَ",a:"audio/l2-1.mp3"},
 {h:"ب",t:"Iqlab",x:"Nun sukun/tanwin bertemu ba berubah mim dengung.",e:"فَمَن تَابَ",a:"audio/ace2.mp3"},
 {h:"ت",t:"Izhar",x:"Nun sukun/tanwin bertemu huruf halqi dibaca jelas.",e:"فَصَلِّ لِرَبِّكَ",a:"audio/ace3.mp3"},
 {h:"ث",t:"Idgham Bighunnah",x:"Nun/tanwin bertemu ي ن م و dibaca dengung.",e:"فَمَنْ يَّعْمَلْ",a:"audio/ace4.mp3"},
 {h:"ج",t:"Idgham Bila Ghunnah",x:"Nun/tanwin bertemu ل ر dibaca tanpa dengung.",e:"وَلَمْ يَكُن",a:"audio/ace5.mp3"},
 {h:"ح",t:"Idzhar Syafawi",x:"Mim sukun bertemu selain م dan ب.",e:"لَهُمْ فِيهَا",a:"audio/ace6.mp3"},
 {h:"خ",t:"Idgham Mimi",x:"Mim sukun bertemu mim dibaca dengung.",e:"لَهُمْ مَا",a:"audio/ace7.mp3"},
 {h:"د",t:"Ikhfa Syafawi",x:"Mim sukun bertemu ba dibaca samar.",e:"تَرْمِيهِمْ",a:"audio/ace8.mp3"},
 {h:"ذ",t:"Mim & Nun Tasydid",x:"Mim atau nun tasydid wajib ghunnah.",e:"ثُمَّ إِنَّهُمْ",a:"audio/ace9.mp3"},
 {h:"ر",t:"Lam Ta'rif",x:"Qamariyah dibaca jelas, syamsiyah dilebur.",e:"الشَّمْسُ",a:"audio/ace10.mp3"},
 {h:"ز",t:"Lam Tebal & Tipis",x:"Lam jalalah tebal/fathah, tipis/kasrah.",e:"بِسْمِ اللَّهِ",a:"audio/ace11.mp3"},
 {h:"س",t:"Idgham Mutamatsilain",x:"Dua huruf sama dilebur.",e:"قَد دَّخَلُوا",a:"audio/ace12.mp3"},
 {h:"ش",t:"Idgham Mutaqaribain",x:"Makhraj berdekatan dilebur.",e:"وَقُل رَّبِّ",a:"audio/ace13.mp3"},
 {h:"ص",t:"Idgham Mutajanisain",x:"Makhraj sama sifat beda.",e:"قَد تَّبَيَّنَ",a:"audio/ace14.mp3"},
 {h:"ض",t:"Mad Thabi'i",x:"Huruf mad dibaca 2 harakat.",e:"قَالَ",a:"audio/ace15.mp3"},
 {h:"ط",t:"Mad Wajib Muttasil",x:"Mad + hamzah satu kata.",e:"جَاءَ",a:"audio/ace16.mp3"},
 {h:"ظ",t:"Mad Jaiz Munfasil",x:"Mad + hamzah beda kata.",e:"فِي أَنفُسِكُمْ",a:"audio/ace17.mp3"},
 {h:"ع",t:"Mad Lazim Mutsaqqal",x:"Mad + tasydid.",e:"وَلَا الضَّالِّينَ",a:"audio/ace18.mp3"},
 {h:"غ",t:"Mad Lazim Mukhaffaf",x:"Mad + sukun asli.",e:"ءَالْـٰٔنَ",a:"audio/ace19.mp3"},
 {h:"ف",t:"Mad Layin",x:"Waw/ya sukun didahului fathah.",e:"بَيْتٍ",a:"audio/ace20.mp3"},
 {h:"ق",t:"Mad Arid Lissukun",x:"Mad bertemu waqaf.",e:"الْعَالَمِينَ",a:"audio/ace21.mp3"},
 {h:"ك",t:"Mad Silah Qasirah",x:"Ha dhamir di tengah kata.",e:"إِنَّهُ كَانَ",a:"audio/ace22.mp3"},
 {h:"ل",t:"Mad Badal",x:"Hamzah bertemu huruf mad.",e:"أُوتُوا",a:"audio/ace23.mp3"},
 {h:"م",t:"Mad Lazim Harfi Musyabba",x:"Huruf muqatta'at tasydid.",e:"المّ",a:"audio/ace24.mp3"},
 {h:"ن",t:"Mad Lazim Harfi Mukhaffaf",x:"Huruf muqatta'at sukun.",e:"صٓ",a:"audio/ace25.mp3"},
 {h:"ه",t:"Mad Farqi",x:"Hamzah istifham + alif lam.",e:"ءَآللَّهُ",a:"audio/ace26.mp3"},
 {h:"و",t:"Mad Tamkin",x:"Ya tasydid bertemu ya sukun.",e:"فِي يَوْمٍ",a:"audio/ace27.mp3"},
 {h:"ي",t:"Qalqalah",x:"Huruf ق ط ب ج د dibaca memantul.",e:"يَجْعَلْ",a:"audio/ace28.mp3"}
];
let cardIndex = 0;

function renderCard(){
 const c = LEARN_CARDS[cardIndex];
 $("#cardBox").innerHTML = `
  <div class="huruf">${c.h}</div>
  <h3>${c.t}</h3>
  <p>${c.x}</p>
  <b>Contoh:</b>
  <p>${c.e}</p>
 `;
 $("#cardAudio").src = c.a || "";
}

$("#nextCard").onclick = ()=>{
 if(cardIndex < LEARN_CARDS.length-1){cardIndex++;renderCard();}
};

$("#prevCard").onclick = ()=>{
 if(cardIndex > 0){cardIndex--;renderCard();}
};

const learnObserver = new MutationObserver(()=>{
 if($("#learn").classList.contains("active")){
  cardIndex = 0;
  renderCard();
 }
});

learnObserver.observe($("#learn"),{attributes:true});
