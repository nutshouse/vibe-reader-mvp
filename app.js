const IG_REEL_URL = "https://www.instagram.com/reel/DXuC0ZtEwkT/";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=6EmxbBXnHvo";
const YOUTUBE_ID = "6EmxbBXnHvo";
const DEFAULT_URL = IG_REEL_URL;

const instagramSource = {
  kind: "Instagram Reel",
  title: "Vibe Reader：Podcast / 教學影片一鍵變成洞察卡",
  author: "Instagram Reel",
  url: IG_REEL_URL,
  image: "./assets/reel-cover.svg",
  duration: "Reel",
};

const youtubeSource = {
  kind: "YouTube video",
  title: "心流學習，10倍你的吸收力｜終極學習秘籍",
  author: "Bad Bad Channel",
  url: YOUTUBE_URL,
  image: "./assets/video-thumb.jpg",
  duration: "2h 14m",
};

const instagramCards = [
  {
    id: "reel-memory-layer",
    time: 0,
    tag: "Recall",
    title: "不用再回頭重聽，重點應該自動變成可回看的洞察。",
    core: "Reel 的主張很直接：聽完 Podcast 或看完教學影片後，真正麻煩的是回想精華，而不是播放內容本身。",
    why: "它抓住現代內容消費的痛點：我們看很多、聽很多，但知識沒有留下可搜尋、可追問、可分享的形狀。",
    data: "公開摘要提到 Podcast、教學影片、摘要功能與加速學習效率。",
    impact: "對產品而言，Vibe Reader 賣的不是摘要，而是記憶層：把一次性內容變成可反覆調用的知識物件。",
    use: "每聽完一集內容，只保留 3 張卡：一個核心觀點、一個可用案例、一個你今天能做的行動。",
  },
  {
    id: "reel-ask-ai",
    time: 8,
    tag: "Ask AI",
    title: "聊天追問，讓摘要從靜態筆記變成查詢介面。",
    core: "Reel 強調可以用聊天問問題，找到你真正想要的答案。",
    why: "因為用戶不一定知道自己要找哪一段；比起翻筆記，直接問問題更符合手機上的使用習慣。",
    data: "功能點：摘要後可以用聊天方式追問內容。",
    impact: "這代表摘要產品的核心互動會從「讀完」轉向「隨時查」。知識不再是一頁筆記，而是一個可對話的索引。",
    use: "把每張卡後面接 3 個預設問題：一句話解釋、給我例子、我可以怎樣用。",
  },
  {
    id: "reel-reading-mode",
    time: 14,
    tag: "Share",
    title: "網頁閱讀模式，讓 AI 摘要變成可交付成果。",
    core: "Reel 提到 Vibe Reader 能產生網頁閱讀模式，一鍵分享給別人。",
    why: "這把摘要從個人筆記提升成可傳播的內容物：讀者不用安裝工具，也能快速理解原內容。",
    data: "功能點：生成網頁閱讀模式、一鍵傳給他人。",
    impact: "對 MVP 來說，GitHub Pages / PWA 很合理，因為重點不是本地工具，而是產出一個可打開的閱讀頁。",
    use: "每次生成摘要時，同步產生一個公開閱讀頁：標題、5 張卡、原始連結、追問入口。",
  },
  {
    id: "reel-learning-loop",
    time: 20,
    tag: "Learning",
    title: "真正的價值不是省時間，而是縮短學習迴圈。",
    core: "Reel 的底層承諾是：讓 Podcast 和教學影片變成更快吸收的學習流程。",
    why: "用戶不是只想少花時間，而是想從長內容中拿到可行動的東西，並在需要時快速回看。",
    data: "公開摘要提到「不管聽 Podcast 還是看教學類型影片，都能加速學習效率」。",
    impact: "投資或產品判斷上，這類工具的壁壘在工作流：輸入內容、生成卡片、追問、分享、回看，而非單一摘要模型。",
    use: "把每次學習拆成 4 步：導入內容、生成卡、問一個問題、做一個行動。",
  },
  {
    id: "reel-positioning",
    time: 26,
    tag: "Positioning",
    title: "Vibe Reader 的定位：把長內容變成手機友善的知識卡。",
    core: "這支 Reel 不是在賣 AI 技術，而是在賣一個更輕的閱讀體驗。",
    why: "手機上不適合讀長摘要，也不適合看複雜報告；最有效率的是一張卡只抓一個 insight。",
    data: "展示語言集中在：摘要、聊天、網頁閱讀模式、分享、學習效率。",
    impact: "Web/PWA MVP 應該少欄位、短段落、強節奏，先讓讀者滑完，再讓他追問細節。",
    use: "卡片只保留 5 件事：Core、Why Now、Data、Impact、Use It。其餘細節交給 Ask AI。",
  },
];

const youtubeCards = [
  {
    id: "belief-filter",
    time: 333,
    tag: "Meta learning",
    title: "學不進去，不是吸收力差。",
    core: "很多時候不是你記憶力差，而是資訊被信念、偏見和舊經驗先擋住。",
    why: "講者先拆掉「努力吸收就會學到」這個假設，為後面的心流和 deep identification 鋪路。",
    data: "05:33 開始鋪墊 deep identification；31:08 正式說明學習要進入對方經驗。",
    impact: "AI 摘要不能只壓縮內容，還要幫讀者看見作者的前提、脈絡和推理路徑。",
    use: "讀任何內容前先問：我現在有哪些預設立場，可能令我聽不進去？",
  },
  {
    id: "stop-inner-voice",
    time: 742,
    tag: "Flow",
    title: "心流的最低門檻，是內在聲音安靜。",
    core: "不用追求神秘心流，學習時只要能暫時停止自我評論，就已經進入有效狀態。",
    why: "講者把心流降維成普通人可練的注意力技巧。",
    data: "12:22 提到 stop the world；建議至少 30 分鐘練習不讓內心自動說話。",
    impact: "閱讀產品應減少干擾，同屏不要塞太多功能，讓用戶先沉浸。",
    use: "設 10 分鐘，只讀一段內容，不批判、不摘錄、不跳走。",
  },
  {
    id: "flow-cycle",
    time: 868,
    tag: "Process",
    title: "心流不是一開始就順。",
    core: "心流通常經過 struggle、release、flow、recovery；卡住是第一階段，不是失敗。",
    why: "講者要糾正「一不順就換材料」的習慣。",
    data: "14:28 講四階段；16:30 用讀書看不進去作例子；18:32 提到 recovery。",
    impact: "學習工具可以根據階段設計體驗：熱身、沉浸、整理、恢復。",
    use: "讀不進去時先低速讀 3-5 分鐘；稍微順起來後，短暫放鬆再回來。",
  },
  {
    id: "dopamine-reading",
    time: 1236,
    tag: "Attention",
    title: "現代人讀不進書，是被刺激訓練壞了。",
    core: "很多人不是不會讀，而是只追有趣、刺激、爽點；一旦內容平淡就跳走。",
    why: "講者把手機、AI、短影音環境放進背景，說明深讀能力越來越稀缺。",
    data: "20:36 提到手機、AI、Reels；22:38 提到多巴胺式閱讀；建議看牆上一點 30 分鐘。",
    impact: "好的摘要不是只抽爆點，而是保留觀點之間的因果鏈。",
    use: "第一輪完整讀完，不跳段；第二輪才標記重點。",
  },
  {
    id: "deep-identification",
    time: 1868,
    tag: "Identification",
    title: "真正學習，是進入對方世界。",
    core: "學習不是接收資訊，而是進入作者、老師或高手的世界，沿著他的經驗走一遍。",
    why: "前面的心流和注意力訓練，都是為了讓你暫時放下自己，進入對方。",
    data: "31:08 正式提出 deep identification；35:27 說任何深度學習都涉及身份代入。",
    impact: "AI 總結若能重建講者模型，價值會高於普通 TLDR。",
    use: "看一段內容時問：如果我是作者，我到底看到了什麼問題？",
  },
  {
    id: "make-it-work",
    time: 2224,
    tag: "Application",
    title: "學到，不等於覺得有道理。",
    core: "學到的標準不是「我覺得很對」，而是能回答：我怎樣把它用在自己身上？",
    why: "講者避免 deep identification 變成純感覺，所以把它拉回應用。",
    data: "37:04 提出 How can I make this work；121:30 再次強調 test。",
    impact: "學習產品應從摘要走向行動化，幫用戶生成練習、驗證任務和回顧問題。",
    use: "每張卡只寫一個使用場景：下一次會議、下一篇文章、下一次學習。",
  },
  {
    id: "learn-by-failing",
    time: 3647,
    tag: "Experiment",
    title: "學習的動詞是 fail。",
    core: "學習不是避免錯，而是透過錯誤取得新資訊。",
    why: "講者拆解學校式學習造成的完美主義：太怕錯，就永遠卡在 struggle。",
    data: "60:47 用打輸、踩單車等例子說明；81:05 提到完美主義阻礙心流。",
    impact: "AI tutor 最有價值的地方，是縮短 feedback loop，不只是給標準答案。",
    use: "把一個觀點做成低成本實驗，記錄錯在哪裡，下一次只改一個變量。",
  },
  {
    id: "memory-network",
    time: 4558,
    tag: "Memory",
    title: "記憶是一張網，不是垃圾桶。",
    core: "記住不是把資料塞進腦袋，而是讓新知識和舊知識建立連結。",
    why: "講者反駁機械背誦，說明為什麼知識越多的人反而學得越快。",
    data: "75:58 講記憶與連結；用記人名 Johnny 作例子；再延伸到心理學和歷史跨網絡連結。",
    impact: "知識管理產品應支援概念節點、跨卡引用、時間戳和個人場景，而不是只做收藏。",
    use: "每學一個概念，立刻寫下它能連到你已知的哪個案例。",
  },
  {
    id: "personal-method",
    time: 4865,
    tag: "Method",
    title: "沒有統一學習法。",
    core: "每個人的大腦不同，學習入口也不同；問題不是你不行，而是方法還沒匹配你的大腦。",
    why: "講者用自己的 ADHD 經驗說明，有人需要問題和多巴胺，有人需要安靜和整理。",
    data: "81:05 提到每個人學習方法不同；120:49 提到 open loop。",
    impact: "未來學習產品不只要內容個人化，也要節奏、動機、輸出形式個人化。",
    use: "找出你最容易進入狀態的入口：問題、偶像、壓力、實作、圖像或討論。",
  },
  {
    id: "teacher-mirror",
    time: 6083,
    tag: "Practice",
    title: "模仿老師，抓住隱性知識。",
    core: "學習不只聽文字，也要感受老師的語氣、節奏、表情和身體狀態。",
    why: "影片尾段把 deep identification 落地成具體練習：mirror、open loop、test。",
    data: "101:23 講 mirror；106:24 講代入老師影像；120:49 講上課前製造 open loops。",
    impact: "影片摘要需要時間戳跳轉，因為隱性知識常藏在原片語氣與節奏裡。",
    use: "看教學影片時，先用 5 分鐘模仿老師的小動作和語氣，再開始記重點。",
  },
];

const fallbackCards = [
  {
    id: "fallback-main",
    time: 0,
    tag: "Imported",
    title: "連結已進入卡片化流程。",
    core: "這個靜態 MVP 先展示 Vibe Reader 式的閱讀體驗。",
    why: "正式版會抽取影片字幕、文章正文或 Podcast 逐字稿，再生成精簡 insight cards。",
    data: "支援方向：YouTube、Instagram、文章、Podcast。",
    impact: "一張卡只保留一個 insight，其餘細節交給追問。",
    use: "先用這個格式驗證閱讀節奏，再接後端抽取與模型摘要。",
  },
];

let state = {
  cards: instagramCards,
  source: instagramSource,
  activeIndex: 0,
  activeView: "insight",
  saved: new Set(),
  notes: {},
  readerScale: 1,
  processing: false,
};

const els = {
  form: document.querySelector("#sourceForm"),
  url: document.querySelector("#sourceUrl"),
  sourceKind: document.querySelector("#sourceKind"),
  sourceTitle: document.querySelector("#sourceTitle"),
  sourceAuthor: document.querySelector("#sourceAuthor"),
  sourceImage: document.querySelector("#sourceImage"),
  openSource: document.querySelector("#openSource"),
  processingPercent: document.querySelector("#processingPercent"),
  processingFill: document.querySelector("#processingFill"),
  pipelineSteps: document.querySelectorAll("#pipelineSteps li"),
  cardCount: document.querySelector("#cardCount"),
  readTime: document.querySelector("#readTime"),
  savedCount: document.querySelector("#savedCount"),
  chapterList: document.querySelector("#chapterList"),
  insightCard: document.querySelector("#insightCard"),
  prevCard: document.querySelector("#prevCard"),
  nextCard: document.querySelector("#nextCard"),
  cardProgressBar: document.querySelector("#cardProgressBar"),
  saveCard: document.querySelector("#saveCard"),
  increaseText: document.querySelector("#increaseText"),
  decreaseText: document.querySelector("#decreaseText"),
  segments: document.querySelectorAll(".segment"),
  suggestions: document.querySelector("#suggestions"),
  chatLog: document.querySelector("#chatLog"),
  askForm: document.querySelector("#askForm"),
  askInput: document.querySelector("#askInput"),
  clearChat: document.querySelector("#clearChat"),
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTime(seconds = 0) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
    if (parsed.searchParams.has("v")) return parsed.searchParams.get("v");
    const match = parsed.pathname.match(/\/embed\/([^/?]+)/);
    return match ? match[1] : "";
  } catch {
    return "";
  }
}

function isInstagramReel(url) {
  return /instagram\.com\/(reel|p)\/DXuC0ZtEwkT/i.test(url);
}

function sourceFromUrl(url) {
  if (isInstagramReel(url)) return { source: instagramSource, cards: instagramCards };

  const id = getYouTubeId(url);
  if (id === YOUTUBE_ID) return { source: youtubeSource, cards: youtubeCards };
  if (id) {
    return {
      source: {
        kind: "YouTube video",
        title: `YouTube video ${id}`,
        author: "Unknown channel",
        url,
        image: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        duration: "Pending",
      },
      cards: fallbackCards,
    };
  }

  let host = "Article";
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    host = "Article";
  }

  return {
    source: {
      kind: "Imported",
      title: `Imported content from ${host}`,
      author: host,
      url,
      image: "./assets/article-cover.svg",
      duration: "Pending",
    },
    cards: fallbackCards,
  };
}

function updateSource(source) {
  els.sourceKind.textContent = source.kind;
  els.sourceTitle.textContent = source.title;
  els.sourceAuthor.textContent = source.author;
  els.sourceImage.src = source.image;
  els.sourceImage.alt = source.title;
  els.openSource.onclick = () => window.open(source.url, "_blank", "noopener,noreferrer");
}

function timestampUrl(seconds) {
  if (state.source.kind.includes("Instagram")) return state.source.url;
  const separator = state.source.url.includes("?") ? "&" : "?";
  return `${state.source.url}${separator}t=${Math.floor(seconds)}s`;
}

function renderChapters() {
  els.chapterList.innerHTML = state.cards
    .map(
      (card, index) => `
      <button class="chapter-button ${index === state.activeIndex ? "active" : ""}" type="button" data-index="${index}">
        <span class="chapter-time">${formatTime(card.time)}</span>
        <span class="chapter-title">${escapeHTML(card.title)}</span>
        <span class="chapter-tag">${escapeHTML(card.tag)}</span>
      </button>
    `,
    )
    .join("");
}

function renderInsightView(card) {
  return `
    <div class="focus-stack">
      <section class="focus-block focus-block-main">
        <span>Core</span>
        <p>${escapeHTML(card.core)}</p>
      </section>
      <section class="focus-block">
        <span>Why now</span>
        <p>${escapeHTML(card.why)}</p>
      </section>
      <section class="focus-block">
        <span>Data / Timestamp</span>
        <p>${escapeHTML(card.data)}</p>
      </section>
      <section class="focus-block">
        <span>Impact</span>
        <p>${escapeHTML(card.impact)}</p>
      </section>
      <section class="focus-block focus-block-action">
        <span>Use it</span>
        <p>${escapeHTML(card.use)}</p>
      </section>
    </div>
  `;
}

function renderActionView(card) {
  return `
    <div class="action-card">
      <span>Today</span>
      <h3>${escapeHTML(card.use)}</h3>
      <p>把這張 insight 寫進你的下一次內容消化流程：先讀卡，再問一個問題，最後做一個小行動。</p>
    </div>
  `;
}

function renderNotesView(card) {
  const note = state.notes[card.id] || "";
  return `
    <section class="note-card">
      <span>Notes</span>
      <textarea class="note-textarea" data-note-id="${escapeHTML(card.id)}" placeholder="寫下你要回看、追問或實作的地方">${escapeHTML(note)}</textarea>
    </section>
  `;
}

function renderCard() {
  const card = state.cards[state.activeIndex];
  const total = state.cards.length;
  const current = state.activeIndex + 1;
  const body =
    state.activeView === "actions"
      ? renderActionView(card)
      : state.activeView === "notes"
        ? renderNotesView(card)
        : renderInsightView(card);

  els.insightCard.innerHTML = `
    <div class="card-shell">
      <div class="card-topline">
        <div class="badge-row">
          <span class="badge">${escapeHTML(card.tag)}</span>
          <span class="badge">${formatTime(card.time)}</span>
        </div>
        <span>${current} / ${total}</span>
      </div>

      <div class="card-body">
        <h2>${escapeHTML(card.title)}</h2>
        ${body}
      </div>

      <footer class="card-footer">
        <a class="timestamp-button" href="${timestampUrl(card.time)}" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">▶</span>
          <span>${state.source.kind.includes("Instagram") ? "打開原 Reel" : `跳到 ${formatTime(card.time)}`}</span>
        </a>
      </footer>
    </div>
  `;

  els.cardProgressBar.style.width = `${(current / total) * 100}%`;
  els.saveCard.classList.toggle("saved", state.saved.has(card.id));
  els.saveCard.textContent = state.saved.has(card.id) ? "★" : "☆";
  els.saveCard.title = state.saved.has(card.id) ? "取消收藏" : "收藏卡片";
  renderChapters();
  renderSuggestions();
}

function renderStats() {
  els.cardCount.textContent = String(state.cards.length);
  els.readTime.textContent = `${Math.max(3, Math.round(state.cards.length * 0.8))}m`;
  els.savedCount.textContent = String(state.saved.size);
}

function renderSuggestions() {
  const card = state.cards[state.activeIndex];
  const suggestions = ["用一句話解釋", "給我一個例子", "我可以怎樣用"];
  els.suggestions.innerHTML = suggestions
    .map((item) => `<button class="chip" type="button" data-question="${escapeHTML(item)}">${escapeHTML(item)}</button>`)
    .join("");
}

function setActiveIndex(index) {
  const max = state.cards.length - 1;
  state.activeIndex = Math.min(Math.max(index, 0), max);
  renderCard();
}

function setActiveView(view) {
  state.activeView = view;
  els.segments.forEach((segment) => {
    segment.classList.toggle("active", segment.dataset.view === view);
  });
  renderCard();
}

function addMessage(kind, text) {
  const message = document.createElement("div");
  message.className = `message ${kind}`;
  message.textContent = text;
  els.chatLog.append(message);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function answerQuestion(question) {
  const card = state.cards[state.activeIndex];
  const normalized = question.toLowerCase();

  if (normalized.includes("例子")) {
    return `例子：${card.use}`;
  }
  if (normalized.includes("怎樣") || normalized.includes("怎么") || normalized.includes("用")) {
    return `你可以這樣用：${card.use}`;
  }
  return `一句話：${card.title} ${card.core}`;
}

function setPipelineProgress(percent, activeStep) {
  els.processingPercent.textContent = `${percent}%`;
  els.processingFill.style.width = `${percent}%`;
  els.pipelineSteps.forEach((step, index) => {
    step.classList.toggle("done", index <= activeStep);
  });
}

async function runPipeline(url) {
  if (state.processing) return;
  state.processing = true;
  els.form.querySelector("button").disabled = true;
  setPipelineProgress(0, -1);

  const stages = [
    [18, 0, 220],
    [48, 1, 280],
    [76, 2, 320],
    [100, 3, 380],
  ];

  for (const [percent, step, delay] of stages) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    setPipelineProgress(percent, step);
  }

  const generated = sourceFromUrl(url);
  state.source = generated.source;
  state.cards = generated.cards;
  state.activeIndex = 0;
  state.activeView = "insight";
  state.saved = new Set();
  state.notes = {};
  updateSource(state.source);
  renderStats();
  setActiveView("insight");
  els.chatLog.innerHTML = "";
  addMessage("ai", `已生成 ${state.cards.length} 張精簡洞察卡。每張只保留一個 insight，細節可用 Ask AI 追問。`);

  state.processing = false;
  els.form.querySelector("button").disabled = false;
}

function updateReaderScale(delta) {
  state.readerScale = Math.min(1.18, Math.max(0.9, state.readerScale + delta));
  document.documentElement.style.setProperty("--reader-scale", state.readerScale.toFixed(2));
}

function bindEvents() {
  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    runPipeline(els.url.value.trim());
  });

  els.prevCard.addEventListener("click", () => setActiveIndex(state.activeIndex - 1));
  els.nextCard.addEventListener("click", () => setActiveIndex(state.activeIndex + 1));

  els.chapterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    setActiveIndex(Number(button.dataset.index));
  });

  els.saveCard.addEventListener("click", () => {
    const card = state.cards[state.activeIndex];
    if (state.saved.has(card.id)) state.saved.delete(card.id);
    else state.saved.add(card.id);
    renderStats();
    renderCard();
  });

  els.increaseText.addEventListener("click", () => updateReaderScale(0.04));
  els.decreaseText.addEventListener("click", () => updateReaderScale(-0.04));

  els.segments.forEach((segment) => {
    segment.addEventListener("click", () => setActiveView(segment.dataset.view));
  });

  els.insightCard.addEventListener("input", (event) => {
    const textarea = event.target.closest("[data-note-id]");
    if (!textarea) return;
    state.notes[textarea.dataset.noteId] = textarea.value;
  });

  els.suggestions.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-question]");
    if (!chip) return;
    const question = chip.dataset.question;
    addMessage("user", question);
    addMessage("ai", answerQuestion(question));
  });

  els.askForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = els.askInput.value.trim();
    if (!question) return;
    addMessage("user", question);
    addMessage("ai", answerQuestion(question));
    els.askInput.value = "";
  });

  els.clearChat.addEventListener("click", () => {
    els.chatLog.innerHTML = "";
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea")) return;
    if (event.key === "ArrowLeft") setActiveIndex(state.activeIndex - 1);
    if (event.key === "ArrowRight") setActiveIndex(state.activeIndex + 1);
  });

  let touchStartX = 0;
  els.insightCard.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );
  els.insightCard.addEventListener(
    "touchend",
    (event) => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) < 52) return;
      if (delta < 0) setActiveIndex(state.activeIndex + 1);
      else setActiveIndex(state.activeIndex - 1);
    },
    { passive: true },
  );
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("./sw.js");
  } catch {
    // PWA still works as a normal web app when service workers are unavailable.
  }
}

function init() {
  els.url.value = DEFAULT_URL;
  updateSource(state.source);
  renderStats();
  renderChapters();
  renderCard();
  bindEvents();
  registerServiceWorker();
  runPipeline(DEFAULT_URL);
}

init();
