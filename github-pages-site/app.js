const DEFAULT_URL = "https://www.youtube.com/watch?v=6EmxbBXnHvo";
const VIDEO_ID = "6EmxbBXnHvo";

const SOURCE = {
  kind: "YouTube video",
  title: "心流學習，10倍你的吸收力｜終極學習秘籍",
  author: "Bad Bad Channel",
  url: DEFAULT_URL,
  image: "./assets/video-thumb.jpg",
  duration: "2h 14m",
};

const insightCards = [
  {
    id: "belief-filter",
    time: 333,
    tag: "Meta learning",
    title: "學習卡住，常常不是吸收力差，而是資訊根本進不來。",
    lead:
      "這張卡是全片的入口：講者先把「吸收力」重新定義成一個狀態問題，而不是單純的記憶力或努力程度問題。",
    content:
      "作者提出的主要論點是：很多人學不進去，不是因為腦袋容量不夠，而是因為資訊在進入理解之前，已經被自己的信念系統、偏見、成長背景和文化習慣擋住。所謂提升學習能力，第一步不是背更多資料，而是暫時降低自我防衛，讓自己進入能接收新結構的狀態。",
    context:
      "他在影片開頭不久就提出這點，是為了把後面談的心流、催眠、deep identification 都放到同一個框架中：學習不是被動吸收，而是狀態切換。這也回應了現代人面對手機、AI、短影音時的焦慮：資訊更多，但能被深度理解的比例更低。",
    data: [
      { label: "05:33", value: "Deep identification 首次鋪墊", detail: "開始說明學習要進入對方世界，而不是只聽表面內容。" },
      { label: "31:08", value: "核心概念正式出現", detail: "把學習定義為進入對方經驗，再抽取 lesson。" },
      { label: "問題源", value: "信念、偏見、背景", detail: "這些不是知識本身，卻會決定知識能否被接收。" },
    ],
    keyPassages: [
      { time: 333, text: "不是吸收不到，而是那些東西入不到來。", note: "這句把問題從能力不足轉成狀態與防衛機制。" },
      { time: 379, text: "擋住資訊的是自己的信念系統、偏見、成長背景。", note: "解釋為什麼同一堂課，有人入神，有人只聽到聲音。" },
    ],
    implications: {
      application:
        "讀書、上課或看影片前，先暫停評價。第一輪的任務不是同意，而是完整重建對方的思路：他看到什麼問題、用什麼前提、推出什麼結論。",
      investment:
        "如果評估教育、AI 摘要或知識管理產品，重點不只是『壓縮內容』，而是能否降低用戶理解門檻、揭露前提、建立上下文。只做 TLDR 的產品壁壘較低。",
      tech:
        "摘要系統應該輸出多層結構：主張、前提、脈絡、反直覺點、可應用場景。單段摘要不足以支援深度學習。",
    },
    actions: [
      "讀一段內容前，先寫下自己的預設：我可能在哪裡本能反對？",
      "第一輪只做復述，不做批判；第二輪才評估同不同意。",
      "把「我看不懂」改寫成「我還沒找到它進入我知識網的入口」。",
    ],
    quote: "字幕摘句：資訊入不來，往往是自己的信念系統先擋住。",
  },
  {
    id: "stop-inner-voice",
    time: 742,
    tag: "Flow",
    title: "心流學習的最低門檻，是先讓內在聲音安靜下來。",
    lead:
      "講者把心流從神祕或天才狀態拉回可練習的版本：不用追求超能力，只要學習時內在評論聲降低，就已經足夠開始。",
    content:
      "作者主張，學習時最先要處理的是內心不斷說話的聲音。它會評價自己懂不懂、快不快、有沒有用、是否浪費時間。這些自我評論把注意力從材料本身拉回自我，讓人無法進入深度閱讀或深度聆聽。",
    context:
      "這段出現在講心流四階段之前，是一個預備條件。講者知道不是每個人都能立即進入主客合一的高階心流，所以先降低要求：只要能 stop the world，暫時停止自我敘事，就能開始建立學習狀態。",
    data: [
      { label: "12:22", value: "Stop the world", detail: "提出不讓內心自動說話的練習。" },
      { label: "30 分鐘", value: "最低練習單位", detail: "建議拿鐘出來，至少半小時不讓內心語言接管。" },
      { label: "1 小時", value: "進階挑戰", detail: "若能一小時不跟自己說話，代表注意力控制已很強。" },
    ],
    keyPassages: [
      { time: 742, text: "學習、讀書時，只要能進入一個狀態：內心沒有聲音。", note: "把心流降維成可執行門檻。" },
      { time: 818, text: "按下計時器後，不要讓自己在心裡跟自己講話。", note: "這不是知識技巧，而是注意力訓練。" },
    ],
    implications: {
      application:
        "做深度學習前，把手機、聊天室、通知全部關掉。先用 5 到 10 分鐘練習只看材料，不批注、不判斷、不跳走。",
      investment:
        "注意力會成為教育科技產品的核心稀缺資源。能幫用戶進入低噪音狀態的工具，比單純提供更多內容的工具更有價值。",
      tech:
        "閱讀器 UI 應該避免同屏塞滿功能。單卡沉浸、延後互動、分段顯示，比一屏多工具更符合心流學習。",
    },
    actions: [
      "設 10 分鐘，只讀一段材料，不批注優劣。",
      "發現內心開始評論時，只標記「評論出現」，然後回到文本。",
      "第一輪閱讀不要追求產出，只追求不中斷。",
    ],
    quote: "字幕摘句：學習時先做到內心沒有聲音。",
  },
  {
    id: "flow-cycle",
    time: 868,
    tag: "Process",
    title: "心流不是一開場就順，而是經過掙扎、釋放、進入和恢復。",
    lead:
      "這張卡把心流變成可操作流程。講者指出，卡住不是失敗，而是心流第一階段的一部分。",
    content:
      "作者把心流拆成四個階段：struggle、release/relax、flow、recovery。第一階段要收集資料，所以會痛苦、慢、看不進去。當開始覺得稍微順手時，不應該繼續逼自己更快更好，而是要短暫放開控制，讓大腦完成整合，之後才更容易進入 flow。",
    context:
      "他用讀書做例子，是為了修正常見錯誤：很多人一覺得開始看懂，就立刻加壓，結果把剛形成的狀態壓壞。這段也連到後面對完美主義的批評：太想正確，反而進不了心流。",
    data: [
      { label: "14:28", value: "四階段模型", detail: "Struggle、release/relax、flow、recovery。" },
      { label: "16:30", value: "讀書例子", detail: "一開始看字但意思進不去，是正常的 struggle。" },
      { label: "18:32", value: "Recovery", detail: "心流消耗神經資源，恢復不是可有可無。" },
    ],
    keyPassages: [
      { time: 868, text: "一開始經過第一個階段叫 struggle。", note: "重新定義痛苦期：不是你不行，而是大腦在收集資訊。" },
      { time: 925, text: "去到覺得順手時，要 release、relax。", note: "關鍵不是更用力，而是停止過度控制。" },
      { time: 1112, text: "離開心流之後，第四個階段是 recovery。", note: "穩定使用心流需要恢復機制。" },
    ],
    implications: {
      application:
        "安排學習時，不要把『一開始不順』當作換材料的理由。保留低速熱身期，順起來後短暫離開，再回來深讀。",
      investment:
        "教育產品若只強調效率，容易忽略恢復與節奏。更好的產品會管理學習週期，而不是只追蹤完成率。",
      tech:
        "可把學習 App 設計成狀態機：熱身、沉浸、整理、恢復。不同階段給不同 UI，而不是全程同一套操作。",
    },
    actions: [
      "讀不進去時，先低速讀 3 到 5 分鐘，不急著換材料。",
      "開始順手後，離開桌面喝水或走動，再回來繼續。",
      "每次深度學習後留出恢復時間，避免把心流當成無限電池。",
    ],
    quote: "字幕摘句：覺得開始順手時，反而要 release 和 relax。",
  },
  {
    id: "anti-dopamine-reading",
    time: 1236,
    tag: "Attention",
    title: "真正的讀書能力，是能停在無聊處，而不是只追刺激處。",
    lead:
      "講者把現代讀不進書的問題，連到手機、AI、YouTube Reels 與多巴胺化內容環境。",
    content:
      "作者指出，很多人讀書時只挑刺激、色情、橋段、有趣的位置。一旦刺激消失，就跳走。這種閱讀不是學習，而是多巴胺尋找。深度閱讀需要能把注意力放在平淡但重要的位置，讓大腦從字句進入結構。",
    context:
      "這段在講完心流四階段後出現，因為講者要把『如何進入狀態』翻譯成讀書方法。現代內容平台把人訓練成追短期刺激，所以他刻意給出看牆上一點這種近乎反短影音的練習。",
    data: [
      { label: "20:36", value: "手機、AI、Reels", detail: "指出現代注意力環境讓人更難進入深讀。" },
      { label: "30 分鐘", value: "定點注視", detail: "望著牆上一點或場地一點，訓練能忍受平淡。" },
      { label: "25:29", value: "眼睛自動掃讀", detail: "熱身後，大腦會由逐字讀進入群組化理解。" },
    ],
    keyPassages: [
      { time: 1236, text: "如果你能夠這樣看書，你的學習前途不可限量。", note: "把讀書能力視為高價值資產。" },
      { time: 1358, text: "你平時看書很心急，很想 skip。", note: "指出現代閱讀的根本動作是逃離無聊。" },
      { time: 1460, text: "看著牆上一點，坐 30 分鐘。", note: "把注意力訓練具體化。" },
    ],
    implications: {
      application:
        "閱讀時先不要跳段。第一輪完整通過，第二輪再標記有價值的位置。這能避免只消費爽點而錯過推理鏈。",
      investment:
        "短影音與摘要工具會拉高資訊消費量，但不一定提升理解。能幫助用戶從刺激消費轉向結構理解的工具，長期價值更高。",
      tech:
        "卡片產品不應只抽亮點句。應保留因果鏈、上下文、關鍵段落和時間點，讓用戶能回到原片檢查語氣與推理。",
    },
    actions: [
      "今天選一頁不刺激但重要的內容，完整讀完。",
      "讀時不跳段，只在讀完後再標出有價值的位置。",
      "每天做一次 5 分鐘定點注視，再逐步增加時間。",
    ],
    quote: "字幕摘句：看牆上一點 30 分鐘，是免費的注意力訓練。",
  },
  {
    id: "deep-identification",
    time: 1868,
    tag: "Deep identification",
    title: "學習的核心動作，是進入對方的經驗，再帶出自己的 lesson。",
    lead:
      "這是全片最重要的概念。作者把學習從『接收資訊』改寫成『進入他人的身份、經驗與思想路徑』。",
    content:
      "作者提出 deep identification：真正學習時，你不是站在外面評論對方，而是先進入對方世界，用他的符號、語言、情境和信念系統經歷一次。之後再抽身，把其中的 lesson 轉成自己的理解。你可以不同意對方，但不同意之前要先能完整進入。",
    context:
      "這段在影片約 31 分鐘正式提出，前面所有心流與注意力訓練都是為它鋪路。作者要說的是：學習不只是理性處理資訊，也包含身份模擬、情境代入和經驗轉換。",
    data: [
      { label: "31:08", value: "Deep identification", detail: "進入對方經驗，是全片核心概念。" },
      { label: "35:27", value: "任何學習都涉及代入", detail: "聽書、讀書、看影片都在跟隨對方思想路徑。" },
      { label: "37:04", value: "抽 lesson", detail: "從對方經驗回到自己生活，才算學到。" },
    ],
    keyPassages: [
      { time: 1868, text: "你入對方的經驗，在對方世界裡感受，再抽 lesson 出來。", note: "完整定義學習過程。" },
      { time: 2000, text: "你看書時，理解要深刻過作者。", note: "不是崇拜作者，而是進入後能提煉更清楚。" },
      { time: 2440, text: "進入對方世界，經歷對方經歷，用對方思維結構經歷。", note: "把 deep identification 推到方法論層面。" },
    ],
    implications: {
      application:
        "看教學影片時，先問：如果我是這位老師，我看到的問題是什麼？我為什麼會這樣安排論述？",
      investment:
        "AI 摘要若只給結論，很容易商品化。更有壁壘的是能重建講者模型：他的問題意識、隱含前提、方法論和應用邊界。",
      tech:
        "可以把摘要引擎設計成 persona reconstruction：先抽取講者世界觀，再生成洞察卡。這比純 transcript compression 更接近真正學習。",
    },
    actions: [
      "讀作者觀點時先問：如果我是他，我看到了什麼問題？",
      "把對方經歷裡的 lesson 寫成自己的語言。",
      "最後加一句：這件事在我的生活或產品裡如何使用？",
    ],
    quote: "字幕摘句：進入對方世界，感受對方的經驗。",
  },
  {
    id: "make-it-work",
    time: 2224,
    tag: "Application",
    title: "『學到』不是覺得有道理，而是能回答：我怎樣用它？",
    lead:
      "這張卡把 deep identification 拉回現實：你從對方世界拿到 lesson 後，必須接回自己的生活、工作和決策。",
    content:
      "作者提出一個後處理問題：How can I make this work? 讀書或聽課時覺得某點很好，不能只收藏或感動，而要立刻問：以我的人生、能力水平、工作場景，這個觀點怎麼用？第一次練習在什麼時候？",
    context:
      "這段承接 deep identification。講者擔心聽眾把『進入對方世界』停留在玄學或感覺，所以把它變成行動問題。只有用過、測過、修正過，知識才會進入自己的思維結構。",
    data: [
      { label: "37:04", value: "How can I make this work?", detail: "把抽象 lesson 轉成個人使用場景。" },
      { label: "38:20", value: "第一次練習", detail: "不只說以後練，而是安排第一次試用。" },
      { label: "121:30", value: "Test", detail: "尾段再次強調：要測試理解，才能變成自己的東西。" },
    ],
    keyPassages: [
      { time: 2224, text: "我在我的人生裡，怎樣可以用這件事？", note: "把學習從理解推到應用。" },
      { time: 2298, text: "下一次、第一次練習是幾時？", note: "行動洞察要落到時間點。" },
      { time: 7310, text: "你要 test，證明那些東西是不是你所理解那樣。", note: "知識變成自己之前，需要驗證。" },
    ],
    implications: {
      application:
        "每張卡讀完後，只寫一個使用場景：下一次會議、下一篇文章、下一段學習、下一個產品決策。",
      investment:
        "投資判斷上，可以把『能否被用起來』作為產品價值檢查。高留存知識產品通常不是讓人覺得聰明，而是讓人行為改變。",
      tech:
        "Ask AI 不應只回答問題，應把每張洞察轉成實驗：輸入情境，輸出第一步、風險、驗證方式和回顧問題。",
    },
    actions: [
      "每張卡只寫一個可執行場景。",
      "把『以後練』改成『第一次練習在什麼時間、什麼地方』。",
      "用完後回到卡片記錄結果，而不是只收藏。",
    ],
    quote: "字幕摘句：How can I make this work?",
  },
  {
    id: "learn-by-failing",
    time: 3647,
    tag: "Experiment",
    title: "學習的動詞是 fail：透過錯誤拿到新資訊。",
    lead:
      "講者把學習從追求正確答案，改成取得回饋的迭代過程。這也是他批評完美主義的基礎。",
    content:
      "作者說，踩單車、打架、做任何技能，真正學到的常常是輸掉、做錯、撞牆之後得到的新資訊。若把錯誤解讀成『我不行』，就會停在 struggle；若把錯誤當成資料，就能繼續校準。",
    context:
      "這段出現在中段，目的是拆掉學校式學習的陰影。學校常把錯誤變成人格評價，導致很多人學習時先保護自尊，不敢犯錯。但心流與 deep identification 都需要先允許自己不完美。",
    data: [
      { label: "60:47", value: "Fail 是學習動詞", detail: "透過失敗獲取新資訊。" },
      { label: "例子", value: "踩單車、打架", detail: "技能學習不是聽懂，而是反覆校準。" },
      { label: "81:05", value: "完美主義阻礙心流", detail: "太怕錯會卡在第一階段。" },
    ],
    keyPassages: [
      { time: 3647, text: "你是打贏那場學得多，還是打輸那場學得多？", note: "用輸贏例子說明回饋價值。" },
      { time: 3664, text: "學習的動詞就是 fail。", note: "把錯誤重新定義成學習動作。" },
      { time: 4770, text: "完美主義永遠進不到心流狀態。", note: "太想正確，反而破壞狀態。" },
    ],
    implications: {
      application:
        "學任何技能時，先設計低成本錯誤。不要等準備完美才開始，先做一個小版本，從錯誤拿到下一步資料。",
      investment:
        "判斷教育或生產力工具時，要看它是否支援回饋迭代，而不是只做正確答案展示。能縮短 feedback loop 的產品更有實際價值。",
      tech:
        "AI tutor 可以把錯誤當資料建模：識別錯誤類型、下一個最小修正、再次測試，而不是只給標準答案。",
    },
    actions: [
      "選一個觀點，今天做一個低成本試驗。",
      "記錄哪裡不順，不把它解釋成自己不行。",
      "下一次只改一個變量，保留其他條件。",
    ],
    quote: "字幕摘句：你透過失敗去獲取新資訊。",
  },
  {
    id: "memory-network",
    time: 4558,
    tag: "Memory",
    title: "記憶不是垃圾桶，而是一張能被連接的新舊知識網絡。",
    lead:
      "這張卡把『記得』講得很實用：不是把資料倒進腦袋，而是建立可檢索的連結。",
    content:
      "作者用記人名和跨領域理解做例子。記住 Johnny，不是重複 Johnny，而是把名字和這個人的特徵、畫面、感覺連起來。學歷史、心理學、金融也一樣，新知識要接到原有知識網，才能被提取和遷移。",
    context:
      "這段在討論學校方法與自我學習方法之後出現。講者要反駁機械背誦，把記憶視為網絡結構。這也解釋為什麼知識越多的人學得越快：不是天生容量大，而是可連接節點更多。",
    data: [
      { label: "75:58", value: "連結是記憶核心", detail: "把新資訊和已有網絡接上。" },
      { label: "Johnny 例子", value: "名字 + 人物特徵", detail: "不是重複，而是建立提示路徑。" },
      { label: "跨網絡", value: "心理學 + 歷史", detail: "不同知識網能連起來，才形成通識與洞察。" },
    ],
    keyPassages: [
      { time: 4558, text: "記憶不是有個垃圾桶，把知識丟進去。", note: "反對容器式記憶模型。" },
      { time: 4610, text: "新知識能夠同原先知識建立聯繫，這就叫記憶。", note: "精準定義記憶機制。" },
      { time: 4780, text: "把心理學的網和歷史的網連在一起，就是通。", note: "跨領域連結產生洞察。" },
    ],
    implications: {
      application:
        "每學一個概念，不要只摘錄定義。立刻問：它和我已知的哪個概念、哪個案例、哪個決策相連？",
      investment:
        "知識管理產品若只能收藏，價值有限。能建立雙向連結、場景標籤、跨卡引用的產品，更接近真實記憶模型。",
      tech:
        "摘要卡片可加入 knowledge graph：概念節點、時間戳、例子、個人筆記與行動結果，形成可查詢的個人知識網。",
    },
    actions: [
      "每學一個概念，寫下它和你已知概念的一個連結。",
      "找跨領域例子：心理學概念能否解釋一個歷史或商業事件？",
      "複習時看連結，不只看原句。",
    ],
    quote: "字幕摘句：新知識要和原有知識建立聯繫。",
  },
  {
    id: "personal-method",
    time: 4865,
    tag: "Method",
    title: "沒有統一學習法，只有你的大腦需要怎樣被餵養。",
    lead:
      "講者把學習方法從標準答案轉成個人化系統：不同大腦需要不同入口、節奏與動機設計。",
    content:
      "作者用自己的 ADHD 經驗說明，他需要先製造問題、open loops 和多巴胺，才能更好地上課。有些人則需要安靜、整理、慢讀。真正重要的信念是：沒有什麼學不會，只是時間、原料、拆分粒度還不夠。",
    context:
      "這段出現在他批評學校系統之後。學校要求所有人用同一方法學，並用成績分層製造 fixed mindset。講者試圖把主動權還給學習者：你要主動找自己的方法，不要等老師救你。",
    data: [
      { label: "81:05", value: "每個人學習方法不同", detail: "大腦結構、情緒、連結方式都不同。" },
      { label: "ADHD 例子", value: "先製造問題", detail: "用 open loops 和好奇心自製動機。" },
      { label: "Chunking", value: "拆細到能學", detail: "複雜概念可以拆成細粒再組回來。" },
    ],
    keyPassages: [
      { time: 4865, text: "每個人的學習方法都不同，每個人的大腦都不同。", note: "否定單一最佳學習法。" },
      { time: 5050, text: "沒有東西我學不會，只是沒有足夠時間與原料。", note: "把身份信念從封閉改成可學。" },
      { time: 5110, text: "把它拆細，逐粒逐粒學，再砌回去。", note: "提供面對難概念的操作方法。" },
    ],
    implications: {
      application:
        "找到自己的入口：你是靠問題、偶像、壓力、安靜、圖像、討論，還是實作進入狀態？方法要服務你的大腦。",
      investment:
        "教育科技若走向個人化，不應只做難度自適應，也要做狀態自適應：動機、注意力、節奏、回饋方式都要個人化。",
      tech:
        "AI learning app 可以先建立 user learning profile，再決定輸出：問題式卡片、例子式卡片、行動式卡片或測驗式卡片。",
    },
    actions: [
      "遇到難概念時，不說我不行，只問能不能拆小。",
      "記錄自己最容易進入狀態的入口：問題、偶像、場景或回饋。",
      "把學習時段分成更短、更穩定的塊。",
    ],
    quote: "字幕摘句：沒有學不會，只有粒度不夠細。",
  },
  {
    id: "teacher-mirror",
    time: 6083,
    tag: "Practice",
    title: "最高槓桿的練習：模仿老師，預先開問題，再測試成自己的。",
    lead:
      "影片尾段給出最具體的方法包：mirror、代入老師、上課前開 open loops、課後 test。",
    content:
      "作者建議看影片或上課時，不只聽內容，也模仿老師的姿態、微表情、停頓和身體節奏。這不是表演，而是建立 rapport，讓自己更快進入對方狀態。上課前先粗略掃材料，製造一堆未完成問題；上課時帶著問題進入；課後用真實任務測試理解。",
    context:
      "這段是全片方法論落地。講者前面說真正學習要進入對方世界，這裡給出不用正式催眠也能做的簡化版：身體模仿、視覺化代入、open loops 和 test。它也說明為什麼時間戳對影片摘要重要：卡片給結構，原片保留語氣與隱性資訊。",
    data: [
      { label: "101:23", value: "Mirror", detail: "模仿老師身體動作，建立連結。" },
      { label: "4 秒", value: "現場延遲模仿", detail: "現場上課可延遲幾秒，不要太突兀。" },
      { label: "120:49", value: "Open loop", detail: "上課前製造明一點、不明一點的問題。" },
      { label: "121:30", value: "Test", detail: "最後要證明理解是否有效。" },
    ],
    keyPassages: [
      { time: 6104, text: "Mirror 對方身體，對方會和你建立連結；最有用的地方是學習。", note: "把 NLP rapport 技巧轉成學習技巧。" },
      { time: 6400, text: "幻想自己進入老師那個影像，像穿衣服一樣穿上。", note: "視覺化 deep identification。" },
      { time: 7257, text: "上堂之前不是記，而是盡量多 open loops。", note: "預習的目的不是懂，而是製造問題。" },
    ],
    implications: {
      application:
        "看教學影片時，先做一輪 mirror，不急著抄筆記。第二輪再抽重點。上課前先列問題，上課後用任務測試。",
      investment:
        "影片摘要產品若能連回時間戳、保存語氣與情境，會比純文字摘要更有價值。教育內容的隱性知識常藏在非語言線索裡。",
      tech:
        "可做『時間戳卡片 + 原片片段 + 行動測試』工作流：每張洞察卡不只是文字，而是連到原片語氣、互動問題與測驗任務。",
    },
    actions: [
      "看 5 分鐘教學影片，延遲幾秒模仿老師姿態和小動作。",
      "上課前先掃材料，列出 5 個不完整問題。",
      "課後用一個真實任務驗證理解，不只重寫筆記。",
    ],
    quote: "字幕摘句：mirror 對方身體，用問題帶著自己上課。",
  },
];

const fallbackCards = [
  {
    id: "fallback-main",
    time: 0,
    tag: "Imported",
    title: "這個連結已進入卡片化流程。",
    lead:
      "目前靜態 MVP 會完整演示處理隊列、章節目錄、卡片閱讀和追問體驗。接入後端後，可以把這裡替換為真實正文提取、轉錄和 AI 摘要。",
    content:
      "系統識別連結類型，建立來源資訊，並把長內容切成可閱讀的 insight cards。正式版會由後端抽取網頁正文或影片字幕，再交給模型產生卡片。",
    context:
      "這張 fallback 卡保留產品流程，不假裝已讀取未接入的內容。它讓使用者看到 UI 和互動模式，同時清楚標示仍需後端處理。",
    data: [
      { label: "Step 1", value: "識別來源", detail: "YouTube、文章、Podcast 可走不同抽取器。" },
      { label: "Step 2", value: "切分內容", detail: "用章節、時間戳或語義段落切卡。" },
      { label: "Step 3", value: "生成洞察", detail: "輸出 What & Why、Data、Timestamps、Action insights。" },
    ],
    keyPassages: [{ time: 0, text: "MVP pipeline is ready.", note: "等待真實抽取與模型接入。" }],
    implications: {
      application: "先用它驗證閱讀體驗和卡片資訊架構，再接入真實摘要。",
      investment: "MVP 可以快速測試使用者是否願意用卡片讀長內容。",
      tech: "下一步是接 YouTube Transcript、正文解析、OpenAI API 和資料庫。",
    },
    actions: ["確認連結類型", "抽取正文或字幕", "生成 6 到 10 張洞察卡"],
    quote: "MVP pipeline is ready.",
  },
];

const state = {
  cards: insightCards,
  source: SOURCE,
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

function sourceFromUrl(url) {
  const id = getYouTubeId(url);
  if (id === VIDEO_ID) return { source: SOURCE, cards: insightCards };
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
      kind: "Article",
      title: `Imported article from ${host}`,
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

function renderDataPoints(card) {
  return card.data
    .map(
      (item) => `
      <div class="data-point">
        <span>${escapeHTML(item.label)}</span>
        <strong>${escapeHTML(item.value)}</strong>
        <p>${escapeHTML(item.detail)}</p>
      </div>
    `,
    )
    .join("");
}

function renderKeyPassages(card) {
  return card.keyPassages
    .map(
      (item) => `
      <li>
        <a href="${timestampUrl(item.time)}" target="_blank" rel="noopener noreferrer">${formatTime(item.time)}</a>
        <div>
          <strong>${escapeHTML(item.text)}</strong>
          <p>${escapeHTML(item.note)}</p>
        </div>
      </li>
    `,
    )
    .join("");
}

function renderInsightView(card) {
  return `
    <section class="deep-section">
      <div class="section-title">
        <span>What & Why</span>
        <h3>核心觀點與背景</h3>
      </div>
      <div class="two-column">
        <article class="detail-block">
          <h4>內容：作者提出了什麼主要論點？</h4>
          <p>${escapeHTML(card.content)}</p>
        </article>
        <article class="detail-block">
          <h4>深層意圖：他為什麼在這個時間點這樣說？</h4>
          <p>${escapeHTML(card.context)}</p>
        </article>
      </div>
    </section>

    <section class="deep-section">
      <div class="section-title">
        <span>Data & Timestamps</span>
        <h3>關鍵數據與時間點</h3>
      </div>
      <div class="data-grid">${renderDataPoints(card)}</div>
      <div class="passage-block">
        <h4>關鍵段落</h4>
        <ol>${renderKeyPassages(card)}</ol>
      </div>
    </section>

    <section class="deep-section">
      <div class="section-title">
        <span>What it means for you</span>
        <h3>行動洞察</h3>
      </div>
      <div class="implication-grid">
        <article>
          <h4>實際應用</h4>
          <p>${escapeHTML(card.implications.application)}</p>
        </article>
        <article>
          <h4>投資判斷 / 產品判斷</h4>
          <p>${escapeHTML(card.implications.investment)}</p>
        </article>
        <article>
          <h4>技術開發啟發</h4>
          <p>${escapeHTML(card.implications.tech)}</p>
        </article>
      </div>
    </section>
  `;
}

function renderActionView(card) {
  return `
    <section class="deep-section">
      <div class="section-title">
        <span>Action Plan</span>
        <h3>可執行清單</h3>
      </div>
      <ol class="action-list">
        ${card.actions.map((action) => `<li>${escapeHTML(action)}</li>`).join("")}
      </ol>
    </section>
    <section class="deep-section">
      <div class="section-title">
        <span>Use Case</span>
        <h3>如何利用這張卡</h3>
      </div>
      <div class="detail-block">
        <p>${escapeHTML(card.implications.application)}</p>
      </div>
    </section>
  `;
}

function renderNotesView(card) {
  const note = state.notes[card.id] || "";
  return `
    <section class="deep-section">
      <div class="section-title">
        <span>Notes</span>
        <h3>我的筆記</h3>
      </div>
      <textarea class="note-textarea" data-note-id="${escapeHTML(card.id)}" placeholder="寫下你的理解、應用場景或待追問的問題">${escapeHTML(note)}</textarea>
    </section>
  `;
}

function timestampUrl(seconds) {
  const separator = state.source.url.includes("?") ? "&" : "?";
  return `${state.source.url}${separator}t=${Math.floor(seconds)}s`;
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
        <p class="summary-lead">${escapeHTML(card.lead)}</p>
        ${body}
      </div>

      <footer class="card-footer">
        <div class="quote">${escapeHTML(card.quote)}</div>
        <a class="timestamp-button" href="${timestampUrl(card.time)}" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">▶</span>
          <span>跳到 ${formatTime(card.time)}</span>
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
  els.readTime.textContent = `${Math.max(8, Math.round(state.cards.length * 2.4))}m`;
  els.savedCount.textContent = String(state.saved.size);
}

function renderSuggestions() {
  const card = state.cards[state.activeIndex];
  const suggestions = [
    "用一句話解釋這張卡",
    "給我今天能做的練習",
    `把「${card.tag}」變成產品功能`,
  ];
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
  const firstAction = card.actions[0].replace(/[。.!！？?]+$/, "");

  if (normalized.includes("練習") || normalized.includes("练习") || normalized.includes("做") || normalized.includes("action")) {
    return `可以從這張卡開始做一個低成本練習：${firstAction}。完成後記錄「發生了什麼、哪裡卡住、下一次只改什麼」。`;
  }
  if (normalized.includes("一句") || normalized.includes("解釋") || normalized.includes("解释") || normalized.includes("summary")) {
    return `一句話版：${card.title.replace("。", "")}；核心不是多記內容，而是把觀點接回你的實際場景。`;
  }
  if (normalized.includes("產品") || normalized.includes("功能") || normalized.includes("product")) {
    return `可以變成一個產品功能：讀完卡片後，系統自動生成「應用場景、驗證任務、風險提醒、回看時間戳」。這張卡的技術啟發是：${card.implications.tech}`;
  }
  return `我會先抓三層：主張是「${card.content}」；脈絡是「${card.context}」；你的第一個應用入口是「${firstAction}」。`;
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
    [16, 0, 260],
    [42, 1, 360],
    [72, 2, 420],
    [100, 3, 520],
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
  addMessage("ai", `已生成 ${state.cards.length} 張詳盡洞察卡。每張都包含核心觀點、背景脈絡、關鍵數據、時間點、關鍵段落與行動洞察。`);

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
  updateSource(state.source);
  renderStats();
  renderChapters();
  renderCard();
  bindEvents();
  registerServiceWorker();
  runPipeline(DEFAULT_URL);
}

init();
