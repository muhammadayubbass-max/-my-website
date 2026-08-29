// ڕێکخستنی فایەربەیس (زانیارییەکانت لێرە دابنە)
const SUPABASE_URL = 'https://iogoywwpdvniyakdcuhk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_U0RMJEalsYxhZ6eJJBmbSA_En_Cc3rE';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


let storiesData = [];
let customWordsData = [];
let quotesData = [];

let adminsList = JSON.parse(localStorage.getItem('koreanAdmins')) || [
    { name: "محمد (ئادمین سەرەکی)", pass: "DFG75tr4f", role: "super" }
];

const subAdminPasswords = ["1a2b", "3c4d", "5e6f", "7g8h", "9i0j"];

const alphabetData = [
    { korean: "ㄱ", reading: "گیۆک / کیۆک", meaning: "پیتی G / K" },
    { korean: "ㄴ", reading: "نیۆن", meaning: "پیتی N" },
    { korean: "ㄷ", reading: "دیۆگ / تیۆت", meaning: "پیتی D / T" },
    { korean: "ㄹ", reading: "ریۆل", meaning: "پیتی R / L" },
    { korean: "ㅁ", reading: "میۆم", meaning: "پیتی M" },
    { korean: "ㅂ", reading: "بیۆپ / پیۆپ", meaning: "پیتی B / P" },
    { korean: "ㅅ", reading: "سیۆت", meaning: "پیتی S" },
    { korean: "ㅇ", reading: "ئیۆنگ", meaning: "پیتی بێدەنگ / NG" },
    { korean: "ㅈ", reading: "چیۆت", meaning: "پیتی J / CH" },
    { korean: "ㅊ", reading: "چیۆت", meaning: "پیتی CH" },
    { korean: "ㅋ", reading: "کیۆک", meaning: "پیتی KH" },
    { korean: "ㅌ", reading: "تیۆت", meaning: "پیتی TH" },
    { korean: "ㅍ", reading: "پیۆپ", meaning: "پیتی PH" },
    { korean: "ㅎ", reading: "هیۆت", meaning: "پیتی H" },
    { korean: "ㄲ", reading: "سەنگی گیۆک", meaning: "پیتی KK" },
    { korean: "ㄸ", reading: "سەنگی دیۆگ", meaning: "پیتی TT" },
    { korean: "ㅃ", reading: "سەنگی بیۆپ", meaning: "پیتی PP" },
    { korean: "ㅆ", reading: "سەنگی سیۆت", meaning: "پیتی SS" },
    { korean: "ㅉ", reading: "سەنگی چیۆت", meaning: "پیتی JJ" },
    { korean: "ㅏ", reading: "ئا", meaning: "دەنگی A" },
    { korean: "ㅑ", reading: "یا", meaning: "دەنگی YA" },
    { korean: "ㅓ", reading: "ۆ", meaning: "دەنگی EO" },
    { korean: "ㅕ", reading: "یۆ", meaning: "دەنگی YEO" },
    { korean: "ㅗ", reading: "ۆ", meaning: "دەنگی O" },
    { korean: "ㅛ", reading: "یۆ", meaning: "دەنگی YO" },
    { korean: "ㅜ", reading: "وو", meaning: "دەنگی U" },
    { korean: "ㅠ", reading: "یوو", meaning: "دەنگی YU" },
    { korean: "ㅡ", reading: "ئی", meaning: "دەنگی EU" },
    { korean: "ㅣ", reading: "ئی", meaning: "دەنگی I" },
    { korean: "ㅐ", reading: "ئێ", meaning: "دەنگی AE" },
    { korean: "ㅒ", reading: "یێ", meaning: "دەنگی YAE" },
    { korean: "ㅔ", reading: "ێ", meaning: "دەنگی E" },
    { korean: "ㅖ", reading: "یێ", meaning: "دەنگی YE" },
    { korean: "ㅘ", reading: "وا", meaning: "دەنگی WA" },
    { korean: "ㅙ", reading: "وێ", meaning: "دەنگی WAE" },
    { korean: "ㅚ", reading: "وێ", meaning: "دەنگی OE" },
    { korean: "ㅝ", reading: "وۆ", meaning: "دەنگی WO" },
    { korean: "ㅞ", reading: "وێ", meaning: "دەنگی WE" },
    { korean: "ㅟ", reading: "وی", meaning: "دەنگی WI" },
    { korean: "ㅢ", reading: "ئی", meaning: "دەنگی UI" }
];

let currentAdmin = JSON.parse(localStorage.getItem('currentAdminObj')) || null;
let isDarkMode = localStorage.getItem('darkMode') === 'true';

window.onload = function() {
    injectUI();
    applyDarkMode();
    fetchDataFromFirebase();
};

// خوێندنەوەی داتا ڕاستەوخۆ لە فایەربەیس
function fetchDataFromFirebase() {
    db.collection("koreanCustomWords").onSnapshot((snapshot) => {
        customWordsData = [];
        snapshot.forEach((doc) => {
            customWordsData.push({ id: doc.id, ...doc.data() });
        });
        renderAll();
    });

    db.collection("koreanQuotes").onSnapshot((snapshot) => {
        quotesData = [];
        snapshot.forEach((doc) => {
            quotesData.push({ id: doc.id, ...doc.data() });
        });
        renderAll();
    });

    db.collection("koreanStories").onSnapshot((snapshot) => {
        storiesData = [];
        snapshot.forEach((doc) => {
            storiesData.push({ id: doc.id, ...doc.data() });
        });
        renderAll();
    });
}

function injectUI() {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    nav.innerHTML = `
        <button onclick="showSection('alphabet')">پیتەکان</button>
        <button onclick="showSection('words')">وشەکان</button>
        <button onclick="showSection('quotes')">وتەکان</button>
        <button onclick="showSection('stories')">چیرۆکەکان</button>
    `;

    const catMenuDiv = document.createElement('div');
    catMenuDiv.style.cssText = "position: fixed; top: 15px; left: 15px; z-index: 1000;";
    catMenuDiv.innerHTML = `
        <button onclick="toggleCatMenu()" style="background: #ffedd5; border: 2px solid #f97316; font-size: 24px; padding: 8px 12px; border-radius: 50%; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">🐱</button>
        <div id="cat-dropdown" style="display: none; position: absolute; left: 0; top: 50px; background: white; border: 1px solid #ddd; border-radius: 10px; width: 300px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); padding: 15px; text-align: right; direction: rtl; max-height: 80vh; overflow-y: auto;">
            <h4 style="margin: 0 0 10px 0; color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 5px;">مینیوی سەرەکی و زانیاری</h4>
            <div id="menu-auth-section"></div>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <a href="https://snapchat.com/t/tM5XFoLO" target="_blank" style="background: #fffc00; color: #000; padding: 6px 10px; border-radius: 5px; text-decoration: none; font-weight: bold; text-align: center;">سناپچات 👻</a>
                <a href="https://www.instagram.com/kak_adolf_surchi?igsi=MTV5a2p3ZGRuemYwNw%3D%3D&utm_source=qr" target="_blank" style="background: linear-gradient(45deg, #f09433, #dc2743, #bc1888); color: #fff; padding: 6px 10px; border-radius: 5px; text-decoration: none; font-weight: bold; text-align: center;">ئینستاگرام 📸</a>
                <button onclick="toggleDarkMode()" style="background: #333; color: #fff; border: none; padding: 6px; border-radius: 5px; cursor: pointer;">گۆڕینی دۆخی تاریک / ڕووناک 🌙</button>
                <button onclick="showSection('about'); toggleCatMenu();" style="background: #6366f1; color: #fff; border: none; padding: 6px; border-radius: 5px; cursor: pointer;">دەربارەی وێبسایت (About) 📖</button>
            </div>
            <div id="admin-panel-section" style="margin-top: 15px;"></div>
        </div>
    `;
    document.body.appendChild(catMenuDiv);

    main.innerHTML = `
        <section id="alphabet" class="content-section">
            <h2 style="color: #dc2626;">پیتە سەرەکییەکانی زمانی کۆری</h2>
            <div id="alphabet-container" class="card-grid"></div>
        </section>

        <section id="words" class="content-section" style="display:none;">
            <h2 style="color: #2563eb;">وشە ڕۆژانەکان</h2>
            <div id="words-container" class="card-grid"></div>
        </section>

        <section id="quotes" class="content-section" style="display:none;">
            <h2 style="color: #2563eb;">وتە و پەندە بەنرخەکان</h2>
            <div id="quotes-container" class="card-grid"></div>
        </section>

        <section id="stories" class="content-section" style="display:none;">
            <h2 style="color: #dc2626;">چیرۆکە ڕۆمانتیک و مانادارەکان</h2>
            <div id="stories-container" class="card-grid"></div>
        </section>

        <section id="about" class="content-section" style="display:none; background: var(--card-bg); padding: 25px; border-radius: 12px; line-height: 1.8; text-align: right; direction: rtl;">
            <h2 style="color: #9333ea;">دەربارەی وێبسایتەکە / 웹사이트 소개</h2>
            <p style="color: #dc2626;"><strong>کوردی:</strong> ئەم وێبسایتە تایبەتە بە فێربوونی زمانی کۆری بە شێوازێکی زۆر ئاسان، سەرنجڕاکێش و پڕ لە هەست بۆ هەموو ئەو کەسانەی حەز بە کەلتوور و زمانی کۆری دەکەن. لێرەدا دەتوانیت بە ئاسانی پیتەکان، وشە ڕۆژانەکان، چیرۆکە ڕۆمانتیکەکان و پەندە جوانەکان بە هەردوو زمانی شیرینی کوردی و کۆری بخوێنیتەوە. ئامانج لەم پڕۆژەیە دروستکردنی پردێکی فێربوون و چێژبەخشە بۆ دۆزینەوەی جیهانی پڕ لە جوانی کۆریا، بە دیزاینێکی نەرم و پاک کە بۆ هەموو تەمەنێک گونجاوە. هیواداریم ئەم هەوڵە بچووکە بتوانێت یارمەتیت بدات لە گەشتە فێربوونییەکەتدا و ساتێکی خۆش بۆ تۆ و خۆشەویستەکانت دروست بکات.</p>
            <p style="direction: ltr; text-align: left; font-family: sans-serif; color: #2563eb;"><strong>한국어:</strong> 이 웹사이트는 한국어 학습을 사랑하는 모든 분들을 위해 쉽고 감성적인 방법으로 제작되었습니다. 이곳에서 여러분은 아름다운 쿠르드어와 한국어로 자음, 모음, 일상 단어, 로맨틱한 이야기 및 명언들을 만나보실 수 있습니다. 이 프로젝트의 목적은 한국 문화와 언어의 아름다움을 발견할 수 있는 즐겁고 유익한 학습의 장을 제공하는 것입니다. 이 작은 플랫폼이 여러분의 언어 학습 여정에 큰 도움이 되기를 바라며, 언제나 행복과 사랑이 가득하시기를 기원합니다. 늘 함께해 주셔서 감사합니다.</p>
            <div style="text-align: center; margin-top: 25px; padding: 10px; background: #fef3c7; border-radius: 8px; color: #9333ea; font-weight: bold; font-size: 16px;">
                اللهم صل وسلم على نبينا محمد وعلى آله وصحبه وسلم 🤍
            </div>
        </section>

        <!-- پەنجەرەی زیادکردنی پۆست -->
        <div id="post-modal" class="modal" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:2000;">
            <div class="modal-content" style="background: white; padding: 25px; border-radius: 12px; width: 350px; display: flex; flexDirection: column; gap: 12px; direction: rtl;">
                <h3 style="margin:0; color:#dc2626;">زیادکردنی پۆستی نوێ بۆ کلاود</h3>
                <label style="font-size: 14px; font-weight: bold; color: #2563eb;">هەڵبژاردەی بەش:</label>
                <select id="post-target" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc;">
                    <option value="story">بەشی چیرۆک</option>
                    <option value="word">بەشی وشەی ڕۆژانە</option>
                    <option value="quote">بەشی وتەکان</option>
                </select>
                <input type="text" id="post-korean" placeholder="دەق بە کۆری" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc;">
                <input type="text" id="post-reading" placeholder="خوێندنەوە بە کوردی" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc;">
                <textarea id="post-meaning" placeholder="مانا یان چیرۆک بە کوردی" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; height: 80px;"></textarea>
                
                <label style="font-size: 14px; font-weight: bold; color: #9333ea;">هەڵبژاردنی وێنە (Photos):</label>
                <input type="file" id="post-image-file" accept="image/*" style="padding: 5px;">

                <button onclick="addNewPost()" style="background: #2563eb; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer;">بڵاوکردنەوە بۆ کلاود</button>
                <button onclick="toggleModal(false)" style="background: #dc2626; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">پەشیمانبوونەوە</button>
            </div>
        </div>
    `;
    updateAuthUI();
}

window.toggleCatMenu = function() {
    const dropdown = document.getElementById('cat-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

window.showSection = function(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    const dropdown = document.getElementById('cat-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

window.toggleModal = function(show) {
    document.getElementById('post-modal').style.display = show ? 'flex' : 'none';
}

window.loginAdmin = function() {
    let password = prompt("تکایە پاسوێرد بنووسە:");
    if (!password) return;

    if (password === "DFG75tr4f") {
        currentAdmin = { name: "محمد (ئادمین سەرەکی)", role: "super" };
        localStorage.setItem('currentAdminObj', JSON.stringify(currentAdmin));
        updateAuthUI();
        alert("بە سەرکەوتوویی بە پاسوێردی ئادەمینی سەرەکی (محمد) چوویتە ژوورەوە!");
    } else if (subAdminPasswords.includes(password)) {
        currentAdmin = { name: "ئادمین (پاسوێردی لاوەکی)", role: "sub" };
        localStorage.setItem('currentAdminObj', JSON.stringify(currentAdmin));
        updateAuthUI();
        alert("بە سەرکەوتوویی چوویتە ژوورەوە (دەسەڵاتی تەنها پۆستکردنت هەیە)!");
    } else {
        alert("پاسۆرد هەڵەیە!");
    }
}

window.logoutAdmin = function() {
    currentAdmin = null;
    localStorage.removeItem('currentAdminObj');
    updateAuthUI();
    alert("چوویە دەرەوە!");
}

window.removeAdmin = function(index) {
    if (currentAdmin?.role !== "super") {
        alert("تەنها ئادمینی سەرەکی دەسەڵاتی دەرکردنی ئادمینەکانی هەیە!");
        return;
    }
    if (adminsList.length <= 1) {
        alert("ناتوانیت هەموو ئادمینەکان بسڕیتەوە!");
        return;
    }
    if (confirm("دڵنیای دەتەوێت ئەم ئادمینە دەرکەیت؟")) {
        adminsList.splice(index, 1);
        localStorage.setItem('koreanAdmins', JSON.stringify(adminsList));
        updateAuthUI();
    }
}

function updateAuthUI() {
    const authSection = document.getElementById('menu-auth-section');
    const adminPanel = document.getElementById('admin-panel-section');

    if (!authSection) return;

    if (currentAdmin) {
        let roleBadge = currentAdmin.role === 'super' ? '<span style="color: #dc2626; font-size: 11px;">(ئادمینی سەرەکی - دەسەڵاتی تەواو)</span>' : '<span style="color: #2563eb; font-size: 11px;">(ئادمین - تەنها پۆستکردن)</span>';
        authSection.innerHTML = `
            <div style="background: #eff6ff; padding: 8px; border-radius: 6px; margin-bottom: 8px; text-align: center;">
                <span style="color: #2563eb; font-weight: bold;">بەخێر هاتیت، ${currentAdmin.name}</span>
                <br>${roleBadge}
                <br><button onclick="toggleModal(true)" style="background: #9333ea; color: white; border: none; padding: 5px 10px; border-radius: 4px; margin-top: 5px; cursor: pointer; width: 100%;">＋ زیادکردنی پۆست</button>
                <button onclick="logoutAdmin()" style="background: #dc2626; color: white; border: none; padding: 5px 10px; border-radius: 4px; margin-top: 5px; cursor: pointer; width: 100%;">چوونەدەرەوە</button>
            </div>
        `;

        if (currentAdmin.role === 'super') {
            let adminsHtml = `<h5 style="margin: 5px 0; color: #2563eb;">لیستی ئادمینەکان:</h5><ul style="padding-right: 20px; margin: 0; font-size: 13px;">`;
            adminsList.forEach((adm, idx) => {
                adminsHtml += `<li>${adm.name} ${adminsList.length > 1 ? `<button onclick="removeAdmin(${idx})" style="background:#dc2626; color:white; border:none; padding:2px 5px; border-radius:3px; cursor:pointer; font-size:10px; margin-right:5px;">دەرکردن</button>` : ''}</li>`;
            });
            adminsHtml += `</ul>`;
            adminPanel.innerHTML = adminsHtml;
        } else {
            adminPanel.innerHTML = "";
        }

    } else {
        authSection.innerHTML = `
            <button onclick="loginAdmin()" style="background: #2563eb; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; width: 100%;">چوونەژوورەوەی ئادمین</button>
        `;
        adminPanel.innerHTML = "";
    }
}

window.toggleDarkMode = function() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyDarkMode();
}

function applyDarkMode() {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#e0e0e0";
    } else {
        document.body.style.backgroundColor = "#f4f7f6";
        document.body.style.color = "#333333";
    }
    renderAll();
}

window.copyToClipboard = function(textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("بە سەرکەوتوویی کۆپیکرا! 📋");
    }).catch(err => {
        console.error('هەڵە لە کۆپیکردن:', err);
    });
}

window.speakKorean = function(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("وێبگەڕەکەت پشتگیری خوێندنەوەی دەنگی ناكات.");
    }
}

// زیادکردنی لایک و نوێکردنەوە لە فایەربەیس
window.likeItem = function(type, id, currentLikes) {
    let collectionName = 'koreanCustomWords';
    if (type === 'quote') collectionName = 'koreanQuotes';
    if (type === 'story') collectionName = 'koreanStories';

    db.collection(collectionName).doc(id).update({
        likes: (currentLikes || 0) + 1
    }).catch((error) => {
        console.error("هەڵە لە لایککردن: ", error);
    });
}

window.addNewPost = function() {
    const targetType = document.getElementById('post-target').value;
    const korean = document.getElementById('post-korean').value;
    const reading = document.getElementById('post-reading').value;
    const meaning = document.getElementById('post-meaning').value;
    const imageFile = document.getElementById('post-image-file').files[0];

    if (!korean || !meaning) {
        alert("تکایە خانە گرنگەکان پڕبکەرەوە!");
        return;
    }

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            savePostDataToFirebase(targetType, korean, reading, meaning, e.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        savePostDataToFirebase(targetType, korean, reading, meaning, "");
    }
}

function savePostDataToFirebase(type, korean, reading, meaning, image) {
    let collectionName = 'koreanCustomWords';
    if (type === 'quote') collectionName = 'koreanQuotes';
    if (type === 'story') collectionName = 'koreanStories';

    db.collection(collectionName).add({
        korean: korean,
        reading: reading,
        meaning: meaning,
        image: image,
        likes: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("بە سەرکەوتوویی بۆ کلاود پۆست کرا! 🚀");
        toggleModal(false);
        document.getElementById('post-korean').value = '';
        document.getElementById('post-reading').value = '';
        document.getElementById('post-meaning').value = '';
        document.getElementById('post-image-file').value = '';
    }).catch((error) => {
        console.error("هەڵە لە پۆستکردن: ", error);
    });
}

window.deleteItem = function(type, id) {
    if (!currentAdmin || currentAdmin.role !== "super") {
        alert("تەنها ئادمینی سەرەکی (محمد) بە پاسوێردی تایبەت دەسەڵاتی سڕینەوەی پۆستەکانت هەیە!");
        return;
    }
    if (confirm("دڵنیای دەتەوێت ئەم بابەتە لە کلاود بسڕیتەوە؟")) {
        let collectionName = 'koreanCustomWords';
        if (type === 'quote') collectionName = 'koreanQuotes';
        if (type === 'story') collectionName = 'koreanStories';

        db.collection(collectionName).doc(id).delete().then(() => {
            alert("بە سەرکەوتوویی سڕایەوە!");
        }).catch((error) => {
            console.error("هەڵە لە سڕینەوە: ", error);
        });
    }
}

function renderAll() {
    const cardBg = isDarkMode ? '#1e1e1e' : '#fff';
    const textColor = isDarkMode ? '#e0e0e0' : '#333';

    const alphabetContainer = document.getElementById('alphabet-container');
    if (alphabetContainer) {
        alphabetContainer.innerHTML = alphabetData.map(item => `
            <div class="card" style="background: ${cardBg}; color: ${textColor}; padding: 15px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.12)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)';">
                <div class="korean" style="font-size: 26px; color: #dc2626; font-weight: bold;">${item.korean}</div>
                <div class="reading" style="color: #2563eb; margin: 4px 0;">خوێندنەوە: ${item.reading}</div>
                <div class="meaning" style="color: #9333ea; font-size: 14px;">واتا: ${item.meaning}</div>
                <button onclick="speakKorean(\`${item.korean}\`)" style="background: #3b82f6; color: white; border: none; padding: 4px 10px; border-radius: 20px; cursor: pointer; font-size: 11px; margin-top: 8px;">گوێبیستبوون 🔊</button>
            </div>
        `).join('');
    }

    const wordsContainer = document.getElementById('words-container');
    if (wordsContainer) {
        wordsContainer.innerHTML = customWordsData.map((item) => {
            const fullText = `${item.korean} - ${item.reading} - ${item.meaning}`;
            const likesCount = item.likes || 0;
            return `
                <div class="card" style="background: ${cardBg}; color: ${textColor}; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; position: relative; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)';" onmouseout="this.style.transform='translateY(0)';">
                    ${item.image ? `<img src="${item.image}" style="width:100%; height:160px; object-fit:cover; border-radius:8px; margin-bottom:10px;">` : ''}
                    <div class="korean" style="font-size: 26px; color: #dc2626; font-weight: bold;">${item.korean}</div>
                    <div class="reading" style="color: #2563eb; margin: 4px 0;">خوێندنەوە: ${item.reading}</div>
                    <div class="meaning" style="color: #9333ea; font-size: 14px;">واتا: ${item.meaning}</div>
                    <div style="margin-top: 12px; display: flex; gap: 6px; justify-content: center; align-items: center; flex-wrap: wrap;">
                        <button onclick="speakKorean(\`${item.korean}\`)" style="background: #3b82f6; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">گوێبیستبوون 🔊</button>
                        <button onclick="copyToClipboard(\`${fullText}\`)" style="background: #10b981; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">کۆپیکردن 📋</button>
                        <button onclick="likeItem('word', '${item.id}', ${likesCount})" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">❤️ (${likesCount})</button>
                        ${currentAdmin && currentAdmin.role === 'super' ? `<button onclick="deleteItem('word', '${item.id}')" style="background: #dc2626; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">سڕینەوە 🗑️</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    const quotesContainer = document.getElementById('quotes-container');
    if (quotesContainer) {
        quotesContainer.innerHTML = quotesData.map((item) => {
            const fullText = `${item.korean} - ${item.reading} - ${item.meaning}`;
            const likesCount = item.likes || 0;
            return `
                <div class="card" style="background: ${cardBg}; color: ${textColor}; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: right; border-right: 5px solid #9333ea; position: relative; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)';" onmouseout="this.style.transform='translateY(0)';">
                    ${item.image ? `<img src="${item.image}" style="width:100%; height:160px; object-fit:cover; border-radius:8px; margin-bottom:10px;">` : ''}
                    <div class="korean" style="font-size: 22px; color: #9333ea; font-weight: bold;">${item.korean}</div>
                    <div class="reading" style="color: #2563eb; font-style: italic; margin: 4px 0;">خوێندنەوە: ${item.reading}</div>
                    <div class="meaning" style="color: #dc2626; margin-top: 6px; font-size: 14px;">وتە: ${item.meaning}</div>
                    <div style="margin-top: 12px; display: flex; gap: 6px; justify-content: flex-end; align-items: center; flex-wrap: wrap;">
                        <button onclick="speakKorean(\`${item.korean}\`)" style="background: #3b82f6; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">گوێبیستبوون 🔊</button>
                        <button onclick="copyToClipboard(\`${fullText}\`)" style="background: #10b981; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">کۆپیکردن 📋</button>
                        <button onclick="likeItem('quote', '${item.id}', ${likesCount})" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">❤️ (${likesCount})</button>
                        ${currentAdmin && currentAdmin.role === 'super' ? `<button onclick="deleteItem('quote', '${item.id}')" style="background: #dc2626; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">سڕینەوە 🗑️</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    const storiesContainer = document.getElementById('stories-container');
    if (storiesContainer) {
        storiesContainer.innerHTML = storiesData.map((item) => {
            const fullText = `${item.korean}\nخوێندنەوە: ${item.reading}\nچیرۆک: ${item.meaning}`;
            const likesCount = item.likes || 0;
            return `
                <div class="card" style="background: ${cardBg}; color: ${textColor}; text-align: right; border-right: 5px solid #dc2626; padding: 18px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); position: relative; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)';" onmouseout="this.style.transform='translateY(0)';">
                    ${item.image ? `<img src="${item.image}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:12px;">` : ''}
                    <div class="korean" style="font-size: 26px; color: #dc2626; font-weight: bold;">${item.korean}</div>
                    <div class="reading" style="font-style: italic; color: #2563eb; margin: 6px 0;">خوێندنەوە: ${item.reading}</div>
                    <div class="meaning" style="font-size: 15px; line-height: 1.6; color: #9333ea; background: ${isDarkMode ? '#2d2d2d' : '#fdf2f2'}; padding: 12px; border-radius: 8px;">${item.meaning}</div>
                    <div style="margin-top: 14px; display: flex; gap: 8px; justify-content: flex-end; align-items: center; flex-wrap: wrap;">
                        <button onclick="speakKorean(\`${item.korean}\`)" style="background: #3b82f6; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 13px;">گوێبیستبوون 🔊</button>
                        <button onclick="copyToClipboard(\`${fullText}\`)" style="background: #10b981; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 13px;">کۆپیکردن 📋</button>
                        <button onclick="likeItem('story', '${item.id}', ${likesCount})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 13px;">❤️ (${likesCount})</button>
                        ${currentAdmin && currentAdmin.role === 'super' ? `<button onclick="deleteItem('story', '${item.id}')" style="background: #dc2626; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 13px;">سڕینەوە 🗑️</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
}
