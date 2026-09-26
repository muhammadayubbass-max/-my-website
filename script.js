/* =========================================================
   LinguaGlass
   English + Korean
   Kurdish meanings
   Supabase Authentication
========================================================= */


/* =========================================================
   SUPABASE CONFIG
========================================================= */

const SUPABASE_URL =
    "https://tgdqzvkeyodnkutydjwr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_UhZ--qaldK98w0freXTgNA_K_LynTRO";

const { createClient } = window.supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


/* =========================================================
   VOCABULARY
========================================================= */

const VOCABULARY = [

    /* ================= ENGLISH ================= */

    {
        id: 1,
        english: "hello",
        korean: "안녕하세요",
        kurdish: "سڵاو",
        category: "Basics"
    },
    {
        id: 2,
        english: "goodbye",
        korean: "안녕히 가세요",
        kurdish: "خواحافیز",
        category: "Basics"
    },
    {
        id: 3,
        english: "thank you",
        korean: "감사합니다",
        kurdish: "سوپاس",
        category: "Basics"
    },
    {
        id: 4,
        english: "please",
        korean: "제발",
        kurdish: "تکایە",
        category: "Basics"
    },
    {
        id: 5,
        english: "yes",
        korean: "네",
        kurdish: "بەڵێ",
        category: "Basics"
    },
    {
        id: 6,
        english: "no",
        korean: "아니요",
        kurdish: "نەخێر",
        category: "Basics"
    },
    {
        id: 7,
        english: "friend",
        korean: "친구",
        kurdish: "هاوڕێ",
        category: "People"
    },
    {
        id: 8,
        english: "family",
        korean: "가족",
        kurdish: "خێزان",
        category: "People"
    },
    {
        id: 9,
        english: "mother",
        korean: "어머니",
        kurdish: "دایک",
        category: "People"
    },
    {
        id: 10,
        english: "father",
        korean: "아버지",
        kurdish: "باوک",
        category: "People"
    },
    {
        id: 11,
        english: "brother",
        korean: "형제",
        kurdish: "برا",
        category: "People"
    },
    {
        id: 12,
        english: "sister",
        korean: "자매",
        kurdish: "خوشک",
        category: "People"
    },
    {
        id: 13,
        english: "house",
        korean: "집",
        kurdish: "ماڵ",
        category: "Home"
    },
    {
        id: 14,
        english: "room",
        korean: "방",
        kurdish: "ژوور",
        category: "Home"
    },
    {
        id: 15,
        english: "door",
        korean: "문",
        kurdish: "دەرگا",
        category: "Home"
    },
    {
        id: 16,
        english: "window",
        korean: "창문",
        kurdish: "پەنجەرە",
        category: "Home"
    },
    {
        id: 17,
        english: "water",
        korean: "물",
        kurdish: "ئاو",
        category: "Food"
    },
    {
        id: 18,
        english: "food",
        korean: "음식",
        kurdish: "خواردن",
        category: "Food"
    },
    {
        id: 19,
        english: "rice",
        korean: "밥",
        kurdish: "برنج",
        category: "Food"
    },
    {
        id: 20,
        english: "bread",
        korean: "빵",
        kurdish: "نان",
        category: "Food"
    },
    {
        id: 21,
        english: "coffee",
        korean: "커피",
        kurdish: "قاوە",
        category: "Food"
    },
    {
        id: 22,
        english: "tea",
        korean: "차",
        kurdish: "چا",
        category: "Food"
    },
    {
        id: 23,
        english: "apple",
        korean: "사과",
        kurdish: "سێو",
        category: "Food"
    },
    {
        id: 24,
        english: "school",
        korean: "학교",
        kurdish: "قوتابخانە",
        category: "Education"
    },
    {
        id: 25,
        english: "teacher",
        korean: "선생님",
        kurdish: "مامۆستا",
        category: "Education"
    },
    {
        id: 26,
        english: "student",
        korean: "학생",
        kurdish: "قوتابی",
        category: "Education"
    },
    {
        id: 27,
        english: "book",
        korean: "책",
        kurdish: "کتێب",
        category: "Education"
    },
    {
        id: 28,
        english: "word",
        korean: "단어",
        kurdish: "وشە",
        category: "Education"
    },
    {
        id: 29,
        english: "language",
        korean: "언어",
        kurdish: "زمان",
        category: "Education"
    },
    {
        id: 30,
        english: "learn",
        korean: "배우다",
        kurdish: "فێربوون",
        category: "Verbs"
    },
    {
        id: 31,
        english: "read",
        korean: "읽다",
        kurdish: "خوێندنەوە",
        category: "Verbs"
    },
    {
        id: 32,
        english: "write",
        korean: "쓰다",
        kurdish: "نووسین",
        category: "Verbs"
    },
    {
        id: 33,
        english: "speak",
        korean: "말하다",
        kurdish: "قسەکردن",
        category: "Verbs"
    },
    {
        id: 34,
        english: "listen",
        korean: "듣다",
        kurdish: "گوێگرتن",
        category: "Verbs"
    },
    {
        id: 35,
        english: "eat",
        korean: "먹다",
        kurdish: "خواردن",
        category: "Verbs"
    },
    {
        id: 36,
        english: "drink",
        korean: "마시다",
        kurdish: "خواردنەوە",
        category: "Verbs"
    },
    {
        id: 37,
        english: "go",
        korean: "가다",
        kurdish: "چوون",
        category: "Verbs"
    },
    {
        id: 38,
        english: "come",
        korean: "오다",
        kurdish: "هاتن",
        category: "Verbs"
    },
    {
        id: 39,
        english: "see",
        korean: "보다",
        kurdish: "بینین",
        category: "Verbs"
    },
    {
        id: 40,
        english: "know",
        korean: "알다",
        kurdish: "زانین",
        category: "Verbs"
    },
    {
        id: 41,
        english: "want",
        korean: "원하다",
        kurdish: "ویستن",
        category: "Verbs"
    },
    {
        id: 42,
        english: "like",
        korean: "좋아하다",
        kurdish: "حەزکردن",
        category: "Verbs"
    },
    {
        id: 43,
        english: "love",
        korean: "사랑하다",
        kurdish: "خۆشویستن",
        category: "Verbs"
    },
    {
        id: 44,
        english: "work",
        korean: "일하다",
        kurdish: "کارکردن",
        category: "Verbs"
    },
    {
        id: 45,
        english: "sleep",
        korean: "자다",
        kurdish: "خەوتن",
        category: "Verbs"
    },
    {
        id: 46,
        english: "today",
        korean: "오늘",
        kurdish: "ئەمڕۆ",
        category: "Time"
    },
    {
        id: 47,
        english: "tomorrow",
        korean: "내일",
        kurdish: "سبەی",
        category: "Time"
    },
    {
        id: 48,
        english: "yesterday",
        korean: "어제",
        kurdish: "دوێنێ",
        category: "Time"
    },
    {
        id: 49,
        english: "morning",
        korean: "아침",
        kurdish: "بەیانی",
        category: "Time"
    },
    {
        id: 50,
        english: "night",
        korean: "밤",
        kurdish: "شەو",
        category: "Time"
    },

    /* ================= MORE WORDS ================= */

    {
        id: 51,
        english: "big",
        korean: "크다",
        kurdish: "گەورە",
        category: "Adjectives"
    },
    {
        id: 52,
        english: "small",
        korean: "작다",
        kurdish: "بچووک",
        category: "Adjectives"
    },
    {
        id: 53,
        english: "good",
        korean: "좋다",
        kurdish: "باش",
        category: "Adjectives"
    },
    {
        id: 54,
        english: "bad",
        korean: "나쁘다",
        kurdish: "خراپ",
        category: "Adjectives"
    },
    {
        id: 55,
        english: "beautiful",
        korean: "아름답다",
        kurdish: "جوان",
        category: "Adjectives"
    },
    {
        id: 56,
        english: "easy",
        korean: "쉽다",
        kurdish: "ئاسان",
        category: "Adjectives"
    },
    {
        id: 57,
        english: "difficult",
        korean: "어렵다",
        kurdish: "قورس",
        category: "Adjectives"
    },
    {
        id: 58,
        english: "fast",
        korean: "빠르다",
        kurdish: "خێرا",
        category: "Adjectives"
    },
    {
        id: 59,
        english: "slow",
        korean: "느리다",
        kurdish: "هێواش",
        category: "Adjectives"
    },
    {
        id: 60,
        english: "happy",
        korean: "행복하다",
        kurdish: "دڵخۆش",
        category: "Feelings"
    },
    {
        id: 61,
        english: "sad",
        korean: "슬프다",
        kurdish: "خەمگین",
        category: "Feelings"
    },
    {
        id: 62,
        english: "tired",
        korean: "피곤하다",
        kurdish: "ماندوو",
        category: "Feelings"
    },
    {
        id: 63,
        english: "busy",
        korean: "바쁘다",
        kurdish: "سەرقاڵ",
        category: "Feelings"
    },
    {
        id: 64,
        english: "city",
        korean: "도시",
        kurdish: "شار",
        category: "Places"
    },
    {
        id: 65,
        english: "country",
        korean: "나라",
        kurdish: "وڵات",
        category: "Places"
    },
    {
        id: 66,
        english: "street",
        korean: "거리",
        kurdish: "شەقام",
        category: "Places"
    },
    {
        id: 67,
        english: "shop",
        korean: "가게",
        kurdish: "دوکان",
        category: "Places"
    },
    {
        id: 68,
        english: "hospital",
        korean: "병원",
        kurdish: "نەخۆشخانە",
        category: "Places"
    },
    {
        id: 69,
        english: "restaurant",
        korean: "식당",
        kurdish: "چێشتخانە",
        category: "Places"
    },
    {
        id: 70,
        english: "car",
        korean: "자동차",
        kurdish: "ئۆتۆمبێل",
        category: "Travel"
    },
    {
        id: 71,
        english: "bus",
        korean: "버스",
        kurdish: "پاس",
        category: "Travel"
    },
    {
        id: 72,
        english: "train",
        korean: "기차",
        kurdish: "شەمەندەفەر",
        category: "Travel"
    },
    {
        id: 73,
        english: "airport",
        korean: "공항",
        kurdish: "فڕۆکەخانە",
        category: "Travel"
    },
    {
        id: 74,
        english: "ticket",
        korean: "표",
        kurdish: "بلیت",
        category: "Travel"
    },
    {
        id: 75,
        english: "money",
        korean: "돈",
        kurdish: "پارە",
        category: "Daily"
    },
    {
        id: 76,
        english: "phone",
        korean: "전화",
        kurdish: "تەلەفۆن",
        category: "Technology"
    },
    {
        id: 77,
        english: "computer",
        korean: "컴퓨터",
        kurdish: "کۆمپیوتەر",
        category: "Technology"
    },
    {
        id: 78,
        english: "internet",
        korean: "인터넷",
        kurdish: "ئینتەرنێت",
        category: "Technology"
    },
    {
        id: 79,
        english: "music",
        korean: "음악",
        kurdish: "مۆسیقا",
        category: "Entertainment"
    },
    {
        id: 80,
        english: "movie",
        korean: "영화",
        kurdish: "فیلم",
        category: "Entertainment"
    },

    {
        id: 81,
        english: "sun",
        korean: "태양",
        kurdish: "خۆر",
        category: "Nature"
    },
    {
        id: 82,
        english: "moon",
        korean: "달",
        kurdish: "مانگ",
        category: "Nature"
    },
    {
        id: 83,
        english: "star",
        korean: "별",
        kurdish: "ئەستێرە",
        category: "Nature"
    },
    {
        id: 84,
        english: "sky",
        korean: "하늘",
        kurdish: "ئاسمان",
        category: "Nature"
    },
    {
        id: 85,
        english: "rain",
        korean: "비",
        kurdish: "باران",
        category: "Nature"
    },
    {
        id: 86,
        english: "snow",
        korean: "눈",
        kurdish: "بەفر",
        category: "Nature"
    },
    {
        id: 87,
        english: "tree",
        korean: "나무",
        kurdish: "دار",
        category: "Nature"
    },
    {
        id: 88,
        english: "flower",
        korean: "꽃",
        kurdish: "گوڵ",
        category: "Nature"
    },
    {
        id: 89,
        english: "dog",
        korean: "개",
        kurdish: "سەگ",
        category: "Animals"
    },
    {
        id: 90,
        english: "cat",
        korean: "고양이",
        kurdish: "پشیلە",
        category: "Animals"
    },
    {
        id: 91,
        english: "bird",
        korean: "새",
        kurdish: "باڵندە",
        category: "Animals"
    },
    {
        id: 92,
        english: "fish",
        korean: "물고기",
        kurdish: "ماسی",
        category: "Animals"
    },
    {
        id: 93,
        english: "doctor",
        korean: "의사",
        kurdish: "پزیشک",
        category: "People"
    },
    {
        id: 94,
        english: "nurse",
        korean: "간호사",
        kurdish: "پەرستار",
        category: "People"
    },
    {
        id: 95,
        english: "job",
        korean: "직업",
        kurdish: "کار",
        category: "Work"
    },
    {
        id: 96,
        english: "office",
        korean: "사무실",
        kurdish: "نووسینگە",
        category: "Work"
    },
    {
        id: 97,
        english: "meeting",
        korean: "회의",
        kurdish: "کۆبوونەوە",
        category: "Work"
    },
    {
        id: 98,
        english: "money",
        korean: "돈",
        kurdish: "پارە",
        category: "Work"
    },
    {
        id: 99,
        english: "question",
        korean: "질문",
        kurdish: "پرسیار",
        category: "Education"
    },
    {
        id: 100,
        english: "answer",
        korean: "대답",
        kurdish: "وەڵام",
        category: "Education"

    },
    {
        id: 101,
        english: "mother",
        korean: "어머니",
        kurdish: "دایک",
        category: "People"
},
{
    id: 102,
    english: "grandfather",
    korean: "할아버지",
    kurdish: "باپیر",
    category: "People"
},
{
    id: 103,
    english: "grandmother",
    korean: "할머니",
    kurdish: "داپیر",
    category: "People"
},
{
    id: 104,
    english: "uncle",
    korean: "삼촌",
    kurdish: "مام",
    category: "People"
},
{
    id: 105,
    english: "aunt",
    korean: "이모",
    kurdish: "خاڵە",
    category: "People"
},
{
    id: 106,
    english: "cousin",
    korean: "사촌",
    kurdish: "خوشکەزایەن",
    category: "People"
},
{
    id: 107,
    english: "child",
    korean: "아이",
    kurdish: "منداڵ",
    category: "People"
},
{
    id: 108,
    english: "baby",
    korean: "아기",
    kurdish: "ساوا",
    category: "People"
},
{
    id: 109,
    english: "man",
    korean: "남자",
    kurdish: "پیاو",
    category: "People"
},
{
    id: 110,
    english: "woman",
    korean: "여자",
    kurdish: "ژن",
    category: "People"
},
{
    id: 111,
    english: "boy",
    korean: "소년",
    kurdish: "کوڕ",
    category: "People"
},
{
    id: 112,
    english: "girl",
    korean: "소녀",
    kurdish: "کچ",
    category: "People"
},
{
    id: 113,
    english: "neighbor",
    korean: "이웃",
    kurdish: "دراوسێ",
    category: "People"
},
{
    id: 114,
    english: "customer",
    korean: "고객",
    kurdish: "کڕیار",
    category: "People"
},
{
    id: 115,
    english: "driver",
    korean: "운전기사",
    kurdish: "شۆفێر",
    category: "People"
},
{
    id: 116,
    english: "engineer",
    korean: "엔지니어",
    kurdish: "ئەندازیار",
    category: "People"
},
{
    id: 117,
    english: "lawyer",
    korean: "변호사",
    kurdish: "پارێزەر",
    category: "People"
},
{
    id: 118,
    english: "farmer",
    korean: "농부",
    kurdish: "جوتیار",
    category: "People"
},
{
    id: 119,
    english: "police officer",
    korean: "경찰관",
    kurdish: "پۆلیس",
    category: "People"
},
{
    id: 120,
    english: "soldier",
    korean: "군인",
    kurdish: "سەرباز",
    category: "People"
},

{
    id: 121,
    english: "kitchen",
    korean: "부엌",
    kurdish: "چێشتخانە",
    category: "Home"
},
{
    id: 122,
    english: "bathroom",
    korean: "화장실",
    kurdish: "ئاودەست",
    category: "Home"
},
{
    id: 123,
    english: "bedroom",
    korean: "침실",
    kurdish: "ژووری خەوتن",
    category: "Home"
},
{
    id: 124,
    english: "garden",
    korean: "정원",
    kurdish: "باخچە",
    category: "Home"
},
{
    id: 125,
    english: "table",
    korean: "탁자",
    kurdish: "مێز",
    category: "Home"
},
{
    id: 126,
    english: "chair",
    korean: "의자",
    kurdish: "کورسی",
    category: "Home"
},
{
    id: 127,
    english: "bed",
    korean: "침대",
    kurdish: "جێگا",
    category: "Home"
},
{
    id: 128,
    english: "sofa",
    korean: "소파",
    kurdish: "کەنەبە",
    category: "Home"
},
{
    id: 129,
    english: "lamp",
    korean: "램프",
    kurdish: "چرای مێز",
    category: "Home"
},
{
    id: 130,
    english: "wall",
    korean: "벽",
    kurdish: "دیوار",
    category: "Home"
},
{
    id: 131,
    english: "floor",
    korean: "바닥",
    kurdish: "بنەماڵە",
    category: "Home"
},
{
    id: 132,
    english: "ceiling",
    korean: "천장",
    kurdish: "سەقف",
    category: "Home"
},
{
    id: 133,
    english: "key",
    korean: "열쇠",
    kurdish: "کلیل",
    category: "Home"
},
{
    id: 134,
    english: "mirror",
    korean: "거울",
    kurdish: "ئاوێنە",
    category: "Home"
},
{
    id: 135,
    english: "towel",
    korean: "수건",
    kurdish: "خاوێنکەر",
    category: "Home"
},
{
    id: 136,
    english: "blanket",
    korean: "담요",
    kurdish: "بەتانی",
    category: "Home"
},
{
    id: 137,
    english: "pillow",
    korean: "베개",
    kurdish: "سەرین",
    category: "Home"
},
{
    id: 138,
    english: "refrigerator",
    korean: "냉장고",
    kurdish: "ساردکەرەوە",
    category: "Home"
},
{
    id: 139,
    english: "oven",
    korean: "오븐",
    kurdish: "فڕن",
    category: "Home"
},
{
    id: 140,
    english: "washing machine",
    korean: "세탁기",
    kurdish: "ماشینی جلشۆر",
    category: "Home"
},

{
    id: 141,
    english: "meat",
    korean: "고기",
    kurdish: "گۆشت",
    category: "Food"
},
{
    id: 142,
    english: "chicken",
    korean: "닭고기",
    kurdish: "گۆشتی مریشک",
    category: "Food"
},
{
    id: 143,
    english: "fish",
    korean: "생선",
    kurdish: "ماسی",
    category: "Food"
},
{
    id: 144,
    english: "egg",
    korean: "달걀",
    kurdish: "هێلکە",
    category: "Food"
},
{
    id: 145,
    english: "milk",
    korean: "우유",
    kurdish: "شیر",
    category: "Food"
},
{
    id: 146,
    english: "cheese",
    korean: "치즈",
    kurdish: "پەنیر",
    category: "Food"
},
{
    id: 147,
    english: "butter",
    korean: "버터",
    kurdish: "کەرە",
    category: "Food"
},
{
    id: 148,
    english: "salt",
    korean: "소금",
    kurdish: "خوێ",
    category: "Food"
},
{
    id: 149,
    english: "sugar",
    korean: "설탕",
    kurdish: "شەکر",
    category: "Food"
},
{
    id: 150,
    english: "pepper",
    korean: "후추",
    kurdish: "فلفڵ",
    category: "Food"
},
{
    id: 151,
    english: "banana",
    korean: "바나나",
    kurdish: "مۆز",
    category: "Food"
},
{
    id: 152,
    english: "orange",
    korean: "오렌지",
    kurdish: "پرتەقاڵ",
    category: "Food"
},
{
    id: 153,
    english: "grape",
    korean: "포도",
    kurdish: "ترێ",
    category: "Food"
},
{
    id: 154,
    english: "lemon",
    korean: "레몬",
    kurdish: "لیمۆ",
    category: "Food"
},
{
    id: 155,
    english: "tomato",
    korean: "토마토",
    kurdish: "تەماطە",
    category: "Food"
},
{
    id: 156,
    english: "potato",
    korean: "감자",
    kurdish: "پەتاتە",
    category: "Food"
},
{
    id: 157,
    english: "onion",
    korean: "양파",
    kurdish: "پیاز",
    category: "Food"
},
{
    id: 158,
    english: "carrot",
    korean: "당근",
    kurdish: "گێزەر",
    category: "Food"
},
{
    id: 159,
    english: "soup",
    korean: "수프",
    kurdish: "شۆربا",
    category: "Food"
},
{
    id: 160,
    english: "breakfast",
    korean: "아침 식사",
    kurdish: "نانی بەیانی",
    category: "Food"
},

{
    id: 161,
    english: "lunch",
    korean: "점심",
    kurdish: "نانی نیوەڕۆ",
    category: "Food"
},
{
    id: 162,
    english: "dinner",
    korean: "저녁 식사",
    kurdish: "نانی ئێوارە",
    category: "Food"
},
{
    id: 163,
    english: "hungry",
    korean: "배고프다",
    kurdish: "برسی",
    category: "Feelings"
},
{
    id: 164,
    english: "thirsty",
    korean: "목마르다",
    kurdish: "تینوو",
    category: "Feelings"
},
{
    id: 165,
    english: "angry",
    korean: "화나다",
    kurdish: "تووڕە",
    category: "Feelings"
},
{
    id: 166,
    english: "afraid",
    korean: "무섭다",
    kurdish: "ترساو",
    category: "Feelings"
},
{
    id: 167,
    english: "excited",
    korean: "신나다",
    kurdish: "بەهەست",
    category: "Feelings"
},
{
    id: 168,
    english: "worried",
    korean: "걱정하다",
    kurdish: "نیگەران",
    category: "Feelings"
},
{
    id: 169,
    english: "surprised",
    korean: "놀라다",
    kurdish: "سەرسام",
    category: "Feelings"
},
{
    id: 170,
    english: "proud",
    korean: "자랑스럽다",
    kurdish: "شاناز",
    category: "Feelings"
},
{
    id: 171,
    english: "calm",
    korean: "차분하다",
    kurdish: "ئارام",
    category: "Feelings"
},
{
    id: 172,
    english: "nervous",
    korean: "긴장하다",
    kurdish: "دڵەڕاوکێ",
    category: "Feelings"
},
{
    id: 173,
    english: "lonely",
    korean: "외롭다",
    kurdish: "تەنیا",
    category: "Feelings"
},
{
    id: 174,
    english: "excited",
    korean: "흥분하다",
    kurdish: "خۆشحاڵ و بەهەست",
    category: "Feelings"
},
{
    id: 175,
    english: "comfortable",
    korean: "편안하다",
    kurdish: "ئاسوودە",
    category: "Feelings"
},
{
    id: 176,
    english: "surprise",
    korean: "놀람",
    kurdish: "سەرسوڕمان",
    category: "Feelings"
},
{
    id: 177,
    english: "hope",
    korean: "희망",
    kurdish: "هیوا",
    category: "Feelings"
},
{
    id: 178,
    english: "dream",
    korean: "꿈",
    kurdish: "خەون",
    category: "Feelings"
},
{
    id: 179,
    english: "fear",
    korean: "두려움",
    kurdish: "ترس",
    category: "Feelings"
},
{
    id: 180,
    english: "peace",
    korean: "평화",
    kurdish: "ئاشتی",
    category: "Feelings"
},

{
    id: 181,
    english: "open",
    korean: "열다",
    kurdish: "کردنەوە",
    category: "Verbs"
},
{
    id: 182,
    english: "close",
    korean: "닫다",
    kurdish: "داخستن",
    category: "Verbs"
},
{
    id: 183,
    english: "start",
    korean: "시작하다",
    kurdish: "دەستپێکردن",
    category: "Verbs"
},
{
    id: 184,
    english: "finish",
    korean: "끝내다",
    kurdish: "تەواوکردن",
    category: "Verbs"
},
{
    id: 185,
    english: "stop",
    korean: "멈추다",
    kurdish: "وەستان",
    category: "Verbs"
},
{
    id: 186,
    english: "wait",
    korean: "기다리다",
    kurdish: "چاوەڕوانبوون",
    category: "Verbs"
},
{
    id: 187,
    english: "help",
    korean: "돕다",
    kurdish: "یارمەتیدان",
    category: "Verbs"
},
{
    id: 188,
    english: "call",
    korean: "전화하다",
    kurdish: "پەیوەندیکردن",
    category: "Verbs"
},
{
    id: 189,
    english: "ask",
    korean: "묻다",
    kurdish: "پرسین",
    category: "Verbs"
},
{
    id: 190,
    english: "answer",
    korean: "대답하다",
    kurdish: "وەڵامدانەوە",
    category: "Verbs"
},
{
    id: 191,
    english: "buy",
    korean: "사다",
    kurdish: "کڕین",
    category: "Verbs"
},
{
    id: 192,
    english: "sell",
    korean: "팔다",
    kurdish: "فرۆشتن",
    category: "Verbs"
},
{
    id: 193,
    english: "give",
    korean: "주다",
    kurdish: "دان",
    category: "Verbs"
},
{
    id: 194,
    english: "take",
    korean: "가져가다",
    kurdish: "بردن",
    category: "Verbs"
},
{
    id: 195,
    english: "bring",
    korean: "가져오다",
    kurdish: "هێنان",
    category: "Verbs"
},
{
    id: 196,
    english: "make",
    korean: "만들다",
    kurdish: "دروستکردن",
    category: "Verbs"
},
{
    id: 197,
    english: "build",
    korean: "짓다",
    kurdish: "بنیاتنان",
    category: "Verbs"
},
{
    id: 198,
    english: "find",
    korean: "찾다",
    kurdish: "دۆزینەوە",
    category: "Verbs"
},
{
    id: 199,
    english: "lose",
    korean: "잃다",
    kurdish: "لەدەستدان",
    category: "Verbs"
},
{
    id: 200,
    english: "remember",
    korean: "기억하다",
    kurdish: "بیرهێنانەوە",
    category: "Verbs"
},

{
    id: 201,
    english: "forget",
    korean: "잊다",
    kurdish: "لەبیرکردن",
    category: "Verbs"
},
{
    id: 202,
    english: "understand",
    korean: "이해하다",
    kurdish: "تێگەیشتن",
    category: "Verbs"
},
{
    id: 203,
    english: "explain",
    korean: "설명하다",
    kurdish: "ڕوونکردنەوە",
    category: "Verbs"
},
{
    id: 204,
    english: "show",
    korean: "보여주다",
    kurdish: "پیشاندان",
    category: "Verbs"
},
{
    id: 205,
    english: "teach",
    korean: "가르치다",
    kurdish: "فێرکردن",
    category: "Verbs"
},
{
    id: 206,
    english: "study",
    korean: "공부하다",
    kurdish: "خوێندن",
    category: "Education"
},
{
    id: 207,
    english: "practice",
    korean: "연습하다",
    kurdish: "ڕاهێنان",
    category: "Education"
},
{
    id: 208,
    english: "test",
    korean: "시험",
    kurdish: "تاقیکردنەوە",
    category: "Education"
},
{
    id: 209,
    english: "lesson",
    korean: "수업",
    kurdish: "وانە",
    category: "Education"
},
{
    id: 210,
    english: "class",
    korean: "수업",
    kurdish: "پۆل",
    category: "Education"
},
{
    id: 211,
    english: "university",
    korean: "대학교",
    kurdish: "زانکۆ",
    category: "Education"
},
{
    id: 212,
    english: "college",
    korean: "전문대학",
    kurdish: "کۆلێژ",
    category: "Education"
},
{
    id: 213,
    english: "library",
    korean: "도서관",
    kurdish: "کتێبخانە",
    category: "Education"
},
{
    id: 214,
    english: "student desk",
    korean: "학생 책상",
    kurdish: "مێزی قوتابی",
    category: "Education"
},
{
    id: 215,
    english: "exam",
    korean: "시험",
    kurdish: "تاقیکردنەوەی کۆتایی",
    category: "Education"
},
{
    id: 216,
    english: "homework",
    korean: "숙제",
    kurdish: "ئەرکی ماڵەوە",
    category: "Education"
},
{
    id: 217,
    english: "notebook",
    korean: "공책",
    kurdish: "دەفتەر",
    category: "Education"
},
{
    id: 218,
    english: "pencil",
    korean: "연필",
    kurdish: "پەڕەنووس",
    category: "Education"
},
{
    id: 219,
    english: "pen",
    korean: "펜",
    kurdish: "قەڵەم",
    category: "Education"
},
{
    id: 220,
    english: "dictionary",
    korean: "사전",
    kurdish: "فەرهەنگ",
    category: "Education"
},

{
    id: 221,
    english: "Monday",
    korean: "월요일",
    kurdish: "دووشەممە",
    category: "Time"
},
{
    id: 222,
    english: "Tuesday",
    korean: "화요일",
    kurdish: "سێشەممە",
    category: "Time"
},
{
    id: 223,
    english: "Wednesday",
    korean: "수요일",
    kurdish: "چوارشەممە",
    category: "Time"
},
{
    id: 224,
    english: "Thursday",
    korean: "목요일",
    kurdish: "پێنجشەممە",
    category: "Time"
},
{
    id: 225,
    english: "Friday",
    korean: "금요일",
    kurdish: "هەینی",
    category: "Time"
},
{
    id: 226,
    english: "Saturday",
    korean: "토요일",
    kurdish: "شەممە",
    category: "Time"
},
{
    id: 227,
    english: "Sunday",
    korean: "일요일",
    kurdish: "یەکشەممە",
    category: "Time"
},
{
    id: 228,
    english: "week",
    korean: "주",
    kurdish: "هەفتە",
    category: "Time"
},
{
    id: 229,
    english: "month",
    korean: "달",
    kurdish: "مانگ",
    category: "Time"
},
{
    id: 230,
    english: "year",
    korean: "년",
    kurdish: "ساڵ",
    category: "Time"
},
{
    id: 231,
    english: "hour",
    korean: "시간",
    kurdish: "کاتژمێر",
    category: "Time"
},
{
    id: 232,
    english: "minute",
    korean: "분",
    kurdish: "خولەک",
    category: "Time"
},
{
    id: 233,
    english: "second",
    korean: "초",
    kurdish: "چرکە",
    category: "Time"
},
{
    id: 234,
    english: "afternoon",
    korean: "오후",
    kurdish: "دوای نیوەڕۆ",
    category: "Time"
},
{
    id: 235,
    english: "evening",
    korean: "저녁",
    kurdish: "ئێوارە",
    category: "Time"
},
{
    id: 236,
    english: "early",
    korean: "일찍",
    kurdish: "زوو",
    category: "Time"
},
{
    id: 237,
    english: "late",
    korean: "늦게",
    kurdish: "دواکەوتوو",
    category: "Time"
},
{
    id: 238,
    english: "now",
    korean: "지금",
    kurdish: "ئێستا",
    category: "Time"
},
{
    id: 239,
    english: "soon",
    korean: "곧",
    kurdish: "بەم زووانە",
    category: "Time"
},
{
    id: 240,
    english: "always",
    korean: "항상",
    kurdish: "هەمیشە",
    category: "Time"
},

{
    id: 241,
    english: "never",
    korean: "절대",
    kurdish: "هەرگیز",
    category: "Time"
},
{
    id: 242,
    english: "sometimes",
    korean: "가끔",
    kurdish: "هەندێک جار",
    category: "Time"
},
{
    id: 243,
    english: "often",
    korean: "자주",
    kurdish: "زۆرجار",
    category: "Time"
},
{
    id: 244,
    english: "usually",
    korean: "보통",
    kurdish: "بەگشتی",
    category: "Time"
},
{
    id: 245,
    english: "before",
    korean: "전에",
    kurdish: "پێش",
    category: "Time"
},
{
    id: 246,
    english: "after",
    korean: "후에",
    kurdish: "دوای",
    category: "Time"
},
{
    id: 247,
    english: "during",
    korean: "동안",
    kurdish: "لەماوەی",
    category: "Time"
},
{
    id: 248,
    english: "first",
    korean: "첫 번째",
    kurdish: "یەکەم",
    category: "Numbers"
},
{
    id: 249,
    english: "second",
    korean: "두 번째",
    kurdish: "دووەم",
    category: "Numbers"
},
{
    id: 250,
    english: "third",
    korean: "세 번째",
    kurdish: "سێیەم",
    category: "Numbers"
},

{
    id: 251,
    english: "four",
    korean: "넷",
    kurdish: "چوار",
    category: "Numbers"
},
{
    id: 252,
    english: "five",
    korean: "다섯",
    kurdish: "پێنج",
    category: "Numbers"
},
{
    id: 253,
    english: "six",
    korean: "여섯",
    kurdish: "شەش",
    category: "Numbers"
},
{
    id: 254,
    english: "seven",
    korean: "일곱",
    kurdish: "حەوت",
    category: "Numbers"
},
{
    id: 255,
    english: "eight",
    korean: "여덟",
    kurdish: "هەشت",
    category: "Numbers"
},
{
    id: 256,
    english: "nine",
    korean: "아홉",
    kurdish: "نۆ",
    category: "Numbers"
},
{
    id: 257,
    english: "ten",
    korean: "열",
    kurdish: "دە",
    category: "Numbers"
},
{
    id: 258,
    english: "hundred",
    korean: "백",
    kurdish: "سەد",
    category: "Numbers"
},
{
    id: 259,
    english: "thousand",
    korean: "천",
    kurdish: "هەزار",
    category: "Numbers"
},
{
    id: 260,
    english: "million",
    korean: "백만",
    kurdish: "ملیۆن",
    category: "Numbers"
},

{
    id: 261,
    english: "red",
    korean: "빨간색",
    kurdish: "سور",
    category: "Colors"
},
{
    id: 262,
    english: "blue",
    korean: "파란색",
    kurdish: "شین",
    category: "Colors"
},
{
    id: 263,
    english: "green",
    korean: "초록색",
    kurdish: "سەوز",
    category: "Colors"
},
{
    id: 264,
    english: "yellow",
    korean: "노란색",
    kurdish: "زەرد",
    category: "Colors"
},
{
    id: 265,
    english: "black",
    korean: "검은색",
    kurdish: "ڕەش",
    category: "Colors"
},
{
    id: 266,
    english: "white",
    korean: "흰색",
    kurdish: "سپی",
    category: "Colors"
},
{
    id: 267,
    english: "purple",
    korean: "보라색",
    kurdish: "مۆر",
    category: "Colors"
},
{
    id: 268,
    english: "pink",
    korean: "분홍색",
    kurdish: "پەمەیی",
    category: "Colors"
},
{
    id: 269,
    english: "brown",
    korean: "갈색",
    kurdish: "قاوەیی",
    category: "Colors"
},
{
    id: 270,
    english: "gray",
    korean: "회색",
    kurdish: "خۆڵەمێشی",
    category: "Colors"
},

{
    id: 271,
    english: "beautiful",
    korean: "예쁘다",
    kurdish: "جوان و ڕازاوە",
    category: "Adjectives"
},
{
    id: 272,
    english: "ugly",
    korean: "못생기다",
    kurdish: "ناجوان",
    category: "Adjectives"
},
{
    id: 273,
    english: "long",
    korean: "길다",
    kurdish: "درێژ",
    category: "Adjectives"
},
{
    id: 274,
    english: "short",
    korean: "짧다",
    kurdish: "کورت",
    category: "Adjectives"
},
{
    id: 275,
    english: "hot",
    korean: "뜨겁다",
    kurdish: "گەرم",
    category: "Adjectives"
},
{
    id: 276,
    english: "cold",
    korean: "차갑다",
    kurdish: "سارد",
    category: "Adjectives"
},
{
    id: 277,
    english: "new",
    korean: "새롭다",
    kurdish: "نوێ",
    category: "Adjectives"
},
{
    id: 278,
    english: "old",
    korean: "오래되다",
    kurdish: "کۆن",
    category: "Adjectives"
},
{
    id: 279,
    english: "young",
    korean: "젊다",
    kurdish: "گەنج",
    category: "Adjectives"
},
{
    id: 280,
    english: "strong",
    korean: "강하다",
    kurdish: "بەهێز",
    category: "Adjectives"
},

{
    id: 281,
    english: "weak",
    korean: "약하다",
    kurdish: "لاواز",
    category: "Adjectives"
},
{
    id: 282,
    english: "rich",
    korean: "부유하다",
    kurdish: "دەوڵەمەند",
    category: "Adjectives"
},
{
    id: 283,
    english: "poor",
    korean: "가난하다",
    kurdish: "هەژار",
    category: "Adjectives"
},
{
    id: 284,
    english: "clean",
    korean: "깨끗하다",
    kurdish: "پاک",
    category: "Adjectives"
},
{
    id: 285,
    english: "dirty",
    korean: "더럽다",
    kurdish: "پیسی",
    category: "Adjectives"
},
{
    id: 286,
    english: "full",
    korean: "가득하다",
    kurdish: "پڕ",
    category: "Adjectives"
},
{
    id: 287,
    english: "empty",
    korean: "비어 있다",
    kurdish: "بەتاڵ",
    category: "Adjectives"
},
{
    id: 288,
    english: "heavy",
    korean: "무겁다",
    kurdish: "قورس",
    category: "Adjectives"
},
{
    id: 289,
    english: "light",
    korean: "가볍다",
    kurdish: "سووک",
    category: "Adjectives"
},
{
    id: 290,
    english: "quiet",
    korean: "조용하다",
    kurdish: "بێدەنگ",
    category: "Adjectives"
},

{
    id: 291,
    english: "loud",
    korean: "시끄럽다",
    kurdish: "دەنگبەرز",
    category: "Adjectives"
},
{
    id: 292,
    english: "dark",
    korean: "어둡다",
    kurdish: "تاریک",
    category: "Adjectives"
},
{
    id: 293,
    english: "bright",
    korean: "밝다",
    kurdish: "ڕووناک",
    category: "Adjectives"
},
{
    id: 294,
    english: "safe",
    korean: "안전하다",
    kurdish: "سەلامەت",
    category: "Adjectives"
},
{
    id: 295,
    english: "dangerous",
    korean: "위험하다",
    kurdish: "مەترسیدار",
    category: "Adjectives"
},
{
    id: 296,
    english: "important",
    korean: "중요하다",
    kurdish: "گرنگ",
    category: "Adjectives"
},
{
    id: 297,
    english: "ready",
    korean: "준비되다",
    kurdish: "ئامادە",
    category: "Adjectives"
},
{
    id: 298,
    english: "free",
    korean: "자유롭다",
    kurdish: "ئازاد",
    category: "Adjectives"
},
{
    id: 299,
    english: "busy",
    korean: "바쁘다",
    kurdish: "سەرقاڵ",
    category: "Adjectives"
},
{
    id: 300,
    english: "famous",
    korean: "유명하다",
    kurdish: "بەناوبانگ",
    category: "Adjectives"
},

{
    id: 301,
    english: "market",
    korean: "시장",
    kurdish: "بازاڕ",
    category: "Places"
},
{
    id: 302,
    english: "bank",
    korean: "은행",
    kurdish: "بانک",
    category: "Places"
},
{
    id: 303,
    english: "pharmacy",
    korean: "약국",
    kurdish: "دەرمانخانە",
    category: "Places"
},
{
    id: 304,
    english: "hotel",
    korean: "호텔",
    kurdish: "هۆتێل",
    category: "Places"
},
{
    id: 305,
    english: "park",
    korean: "공원",
    kurdish: "پارک",
    category: "Places"
},
{
    id: 306,
    english: "museum",
    korean: "박물관",
    kurdish: "مۆزەخانە",
    category: "Places"
},
{
    id: 307,
    english: "station",
    korean: "역",
    kurdish: "وێستگە",
    category: "Places"
},
{
    id: 308,
    english: "beach",
    korean: "해변",
    kurdish: "کەناری دەریا",
    category: "Places"
},
{
    id: 309,
    english: "mountain",
    korean: "산",
    kurdish: "شاخ",
    category: "Places"
},
{
    id: 310,
    english: "village",
    korean: "마을",
    kurdish: "گوند",
    category: "Places"
},

{
    id: 311,
    english: "bridge",
    korean: "다리",
    kurdish: "پرد",
    category: "Places"
},
{
    id: 312,
    english: "building",
    korean: "건물",
    kurdish: "بینا",
    category: "Places"
},
{
    id: 313,
    english: "factory",
    korean: "공장",
    kurdish: "کارگە",
    category: "Places"
},
{
    id: 314,
    english: "church",
    korean: "교회",
    kurdish: "کڵێسا",
    category: "Places"
},
{
    id: 315,
    english: "mosque",
    korean: "사원",
    kurdish: "مزگەوت",
    category: "Places"
},
{
    id: 316,
    english: "university",
    korean: "대학교",
    kurdish: "زانکۆ",
    category: "Places"
},
{
    id: 317,
    english: "playground",
    korean: "놀이터",
    kurdish: "یاریگا",
    category: "Places"
},
{
    id: 318,
    english: "parking",
    korean: "주차장",
    kurdish: "پارکینگە",
    category: "Places"
},
{
    id: 319,
    english: "airport terminal",
    korean: "공항 터미널",
    kurdish: "تێرمیناڵی فڕۆکەخانە",
    category: "Travel"
},
{
    id: 320,
    english: "hotel room",
    korean: "호텔 방",
    kurdish: "ژووری هۆتێل",
    category: "Travel"
},

{
    id: 321,
    english: "airplane",
    korean: "비행기",
    kurdish: "فڕۆکە",
    category: "Travel"
},
{
    id: 322,
    english: "ship",
    korean: "배",
    kurdish: "کەشتی",
    category: "Travel"
},
{
    id: 323,
    english: "boat",
    korean: "보트",
    kurdish: "بەلەم",
    category: "Travel"
},
{
    id: 324,
    english: "bicycle",
    korean: "자전거",
    kurdish: "پاسکیل",
    category: "Travel"
},
{
    id: 325,
    english: "motorcycle",
    korean: "오토바이",
    kurdish: "ماتۆڕ",
    category: "Travel"
},
{
    id: 326,
    english: "road",
    korean: "도로",
    kurdish: "ڕێگا",
    category: "Travel"
},
{
    id: 327,
    english: "map",
    korean: "지도",
    kurdish: "نەخشە",
    category: "Travel"
},
{
    id: 328,
    english: "passport",
    korean: "여권",
    kurdish: "پاسپۆرت",
    category: "Travel"
},
{
    id: 329,
    english: "luggage",
    korean: "수하물",
    kurdish: "جانتا",
    category: "Travel"
},
{
    id: 330,
    english: "journey",
    korean: "여행",
    kurdish: "گەشت",
    category: "Travel"
},

{
    id: 331,
    english: "trip",
    korean: "여행",
    kurdish: "سەفەر",
    category: "Travel"
},
{
    id: 332,
    english: "destination",
    korean: "목적지",
    kurdish: "شوێنی مەبەست",
    category: "Travel"
},
{
    id: 333,
    english: "arrival",
    korean: "도착",
    kurdish: "گەیشتن",
    category: "Travel"
},
{
    id: 334,
    english: "departure",
    korean: "출발",
    kurdish: "بەڕێکەوتن",
    category: "Travel"
},
{
    id: 335,
    english: "seat",
    korean: "좌석",
    kurdish: "کورسی",
    category: "Travel"
},
{
    id: 336,
    english: "window seat",
    korean: "창가 좌석",
    kurdish: "کورسیی پەنجەرە",
    category: "Travel"
},
{
    id: 337,
    english: "driver",
    korean: "운전기사",
    kurdish: "شۆفێر",
    category: "Travel"
},
{
    id: 338,
    english: "traffic",
    korean: "교통",
    kurdish: "هاتووچۆ",
    category: "Travel"
},
{
    id: 339,
    english: "traffic light",
    korean: "신호등",
    kurdish: "چرای هاتووچۆ",
    category: "Travel"
},
{
    id: 340,
    english: "crosswalk",
    korean: "횡단보도",
    kurdish: "پەڕینەوەی پیادە",
    category: "Travel"
},

{
    id: 341,
    english: "computer screen",
    korean: "컴퓨터 화면",
    kurdish: "شاشەی کۆمپیوتەر",
    category: "Technology"
},
{
    id: 342,
    english: "keyboard",
    korean: "키보드",
    kurdish: "تەختەکلیل",
    category: "Technology"
},
{
    id: 343,
    english: "mouse",
    korean: "마우스",
    kurdish: "ماوس",
    category: "Technology"
},
{
    id: 344,
    english: "printer",
    korean: "프린터",
    kurdish: "پرینتەر",
    category: "Technology"
},
{
    id: 345,
    english: "camera",
    korean: "카메라",
    kurdish: "کامێرا",
    category: "Technology"
},
{
    id: 346,
    english: "video",
    korean: "비디오",
    kurdish: "ڤیدیۆ",
    category: "Technology"
},
{
    id: 347,
    english: "photo",
    korean: "사진",
    kurdish: "وێنە",
    category: "Technology"
},
{
    id: 348,
    english: "password",
    korean: "비밀번호",
    kurdish: "وشەی نهێنی",
    category: "Technology"
},
{
    id: 349,
    english: "website",
    korean: "웹사이트",
    kurdish: "ماڵپەڕ",
    category: "Technology"
},
{
    id: 350,
    english: "application",
    korean: "애플리케이션",
    kurdish: "ئەپ",
    category: "Technology"
},

{
    id: 351,
    english: "software",
    korean: "소프트웨어",
    kurdish: "نەرمەکاڵا",
    category: "Technology"
},
{
    id: 352,
    english: "hardware",
    korean: "하드웨어",
    kurdish: "ڕەقەکاڵا",
    category: "Technology"
},
{
    id: 353,
    english: "file",
    korean: "파일",
    kurdish: "فایل",
    category: "Technology"
},
{
    id: 354,
    english: "folder",
    korean: "폴더",
    kurdish: "بوخچە",
    category: "Technology"
},
{
    id: 355,
    english: "download",
    korean: "다운로드",
    kurdish: "داگرتن",
    category: "Technology"
},
{
    id: 356,
    english: "upload",
    korean: "업로드",
    kurdish: "بارکردن",
    category: "Technology"
},
{
    id: 357,
    english: "message",
    korean: "메시지",
    kurdish: "پەیام",
    category: "Technology"
},
{
    id: 358,
    english: "email",
    korean: "이메일",
    kurdish: "ئیمەیڵ",
    category: "Technology"
},
{
    id: 359,
    english: "website link",
    korean: "웹 링크",
    kurdish: "بەستەری ماڵپەڕ",
    category: "Technology"
},
{
    id: 360,
    english: "network",
    korean: "네트워크",
    kurdish: "تۆڕ",
    category: "Technology"
},

{
    id: 361,
    english: "battery",
    korean: "배터리",
    kurdish: "باتری",
    category: "Technology"
},
{
    id: 362,
    english: "charger",
    korean: "충전기",
    kurdish: "شارژەر",
    category: "Technology"
},
{
    id: 363,
    english: "screen",
    korean: "화면",
    kurdish: "شاشە",
    category: "Technology"
},
{
    id: 364,
    english: "headphones",
    korean: "헤드폰",
    kurdish: "گوێگر",
    category: "Technology"
},
{
    id: 365,
    english: "speaker",
    korean: "스피커",
    kurdish: "بڵندگۆ",
    category: "Technology"
},
{
    id: 366,
    english: "smartphone",
    korean: "스마트폰",
    kurdish: "مۆبایلی زیرەک",
    category: "Technology"
},
{
    id: 367,
    english: "tablet",
    korean: "태블릿",
    kurdish: "تابلێت",
    category: "Technology"
},
{
    id: 368,
    english: "robot",
    korean: "로봇",
    kurdish: "ڕۆبۆت",
    category: "Technology"
},
{
    id: 369,
    english: "artificial intelligence",
    korean: "인공지능",
    kurdish: "زیرەکی دەستکرد",
    category: "Technology"
},
{
    id: 370,
    english: "database",
    korean: "데이터베이스",
    kurdish: "بنکەدراوە",
    category: "Technology"
},

{
    id: 371,
    english: "football",
    korean: "축구",
    kurdish: "تۆپی پێ",
    category: "Sports"
},
{
    id: 372,
    english: "basketball",
    korean: "농구",
    kurdish: "باسکەتباڵ",
    category: "Sports"
},
{
    id: 373,
    english: "volleyball",
    korean: "배구",
    kurdish: "ڤۆلیباڵ",
    category: "Sports"
},
{
    id: 374,
    english: "tennis",
    korean: "테니스",
    kurdish: "تێنیس",
    category: "Sports"
},
{
    id: 375,
    english: "swimming",
    korean: "수영",
    kurdish: "مەلەوانی",
    category: "Sports"
},
{
    id: 376,
    english: "running",
    korean: "달리기",
    kurdish: "ڕاکردن",
    category: "Sports"
},
{
    id: 377,
    english: "boxing",
    korean: "복싱",
    kurdish: "بۆکس",
    category: "Sports"
},
{
    id: 378,
    english: "wrestling",
    korean: "레슬링",
    kurdish: "کشتی",
    category: "Sports"
},
{
    id: 379,
    english: "cycling",
    korean: "사이클링",
    kurdish: "پاسکیل‌سواری",
    category: "Sports"
},
{
    id: 380,
    english: "exercise",
    korean: "운동",
    kurdish: "وەرزش",
    category: "Sports"
},

{
    id: 381,
    english: "game",
    korean: "게임",
    kurdish: "یاری",
    category: "Entertainment"
},
{
    id: 382,
    english: "song",
    korean: "노래",
    kurdish: "گۆرانی",
    category: "Entertainment"
},
{
    id: 383,
    english: "actor",
    korean: "배우",
    kurdish: "ئەکتەر",
    category: "Entertainment"
},
{
    id: 384,
    english: "actress",
    korean: "여배우",
    kurdish: "ئەکتەری ژن",
    category: "Entertainment"
},
{
    id: 385,
    english: "singer",
    korean: "가수",
    kurdish: "گۆرانیبێژ",
    category: "Entertainment"
},
{
    id: 386,
    english: "concert",
    korean: "콘서트",
    kurdish: "کۆنسێرت",
    category: "Entertainment"
},
{
    id: 387,
    english: "television",
    korean: "텔레비전",
    kurdish: "تەلەفزیۆن",
    category: "Entertainment"
},
{
    id: 388,
    english: "series",
    korean: "시리즈",
    kurdish: "زنجیرە",
    category: "Entertainment"
},
{
    id: 389,
    english: "story",
    korean: "이야기",
    kurdish: "چیرۆک",
    category: "Entertainment"
},
{
    id: 390,
    english: "picture",
    korean: "그림",
    kurdish: "وێنە",
    category: "Entertainment"
},

{
    id: 391,
    english: "forest",
    korean: "숲",
    kurdish: "دارستان",
    category: "Nature"
},
{
    id: 392,
    english: "river",
    korean: "강",
    kurdish: "ڕووبار",
    category: "Nature"
},
{
    id: 393,
    english: "lake",
    korean: "호수",
    kurdish: "دەریاچە",
    category: "Nature"
},
{
    id: 394,
    english: "sea",
    korean: "바다",
    kurdish: "دەریا",
    category: "Nature"
},
{
    id: 395,
    english: "ocean",
    korean: "대양",
    kurdish: "ئۆقیانووس",
    category: "Nature"
},
{
    id: 396,
    english: "island",
    korean: "섬",
    kurdish: "دوورگە",
    category: "Nature"
},
{
    id: 397,
    english: "desert",
    korean: "사막",
    kurdish: "بیابان",
    category: "Nature"
},
{
    id: 398,
    english: "cloud",
    korean: "구름",
    kurdish: "هەور",
    category: "Nature"
},
{
    id: 399,
    english: "wind",
    korean: "바람",
    kurdish: "با",
    category: "Nature"
},
{
    id: 400,
    english: "storm",
    korean: "폭풍",
    kurdish: "زریان",
    category: "Nature"
},

{
    id: 401,
    english: "thunder",
    korean: "천둥",
    kurdish: "هەورەبرق",
    category: "Nature"
},
{
    id: 402,
    english: "lightning",
    korean: "번개",
    kurdish: "بروسکە",
    category: "Nature"
},
{
    id: 403,
    english: "weather",
    korean: "날씨",
    kurdish: "کەشوهەوا",
    category: "Nature"
},
{
    id: 404,
    english: "season",
    korean: "계절",
    kurdish: "وەرز",
    category: "Nature"
},
{
    id: 405,
    english: "spring",
    korean: "봄",
    kurdish: "بەهار",
    category: "Nature"
},
{
    id: 406,
    english: "summer",
    korean: "여름",
    kurdish: "هاوین",
    category: "Nature"
},
{
    id: 407,
    english: "autumn",
    korean: "가을",
    kurdish: "پاییز",
    category: "Nature"
},
{
    id: 408,
    english: "winter",
    korean: "겨울",
    kurdish: "زستان",
    category: "Nature"
},
{
    id: 409,
    english: "earth",
    korean: "지구",
    kurdish: "زەوی",
    category: "Nature"
},
{
    id: 410,
    english: "world",
    korean: "세계",
    kurdish: "جیهان",
    category: "Nature"
},

{
    id: 411,
    english: "horse",
    korean: "말",
    kurdish: "ئەسپ",
    category: "Animals"
},
{
    id: 412,
    english: "cow",
    korean: "소",
    kurdish: "مانگا",
    category: "Animals"
},
{
    id: 413,
    english: "sheep",
    korean: "양",
    kurdish: "مەڕ",
    category: "Animals"
},
{
    id: 414,
    english: "goat",
    korean: "염소",
    kurdish: "بزن",
    category: "Animals"
},
{
    id: 415,
    english: "rabbit",
    korean: "토끼",
    kurdish: "کەرەوی",
    category: "Animals"
},
{
    id: 416,
    english: "lion",
    korean: "사자",
    kurdish: "شێر",
    category: "Animals"
},
{
    id: 417,
    english: "tiger",
    korean: "호랑이",
    kurdish: "پڵنگ",
    category: "Animals"
},
{
    id: 418,
    english: "elephant",
    korean: "코끼리",
    kurdish: "فیل",
    category: "Animals"
},
{
    id: 419,
    english: "monkey",
    korean: "원숭이",
    kurdish: "میمون",
    category: "Animals"
},
{
    id: 420,
    english: "bear",
    korean: "곰",
    kurdish: "ورچ",
    category: "Animals"
},

{
    id: 421,
    english: "snake",
    korean: "뱀",
    kurdish: "مار",
    category: "Animals"
},
{
    id: 422,
    english: "wolf",
    korean: "늑대",
    kurdish: "گورگ",
    category: "Animals"
},
{
    id: 423,
    english: "fox",
    korean: "여우",
    kurdish: "ڕێوی",
    category: "Animals"
},
{
    id: 424,
    english: "deer",
    korean: "사슴",
    kurdish: "ئاسک",
    category: "Animals"
},
{
    id: 425,
    english: "eagle",
    korean: "독수리",
    kurdish: "هەڵۆ",
    category: "Animals"
},
{
    id: 426,
    english: "duck",
    korean: "오리",
    kurdish: "مەرۆ",
    category: "Animals"
},
{
    id: 427,
    english: "chicken",
    korean: "닭",
    kurdish: "مریشک",
    category: "Animals"
},
{
    id: 428,
    english: "goose",
    korean: "거위",
    kurdish: "قاز",
    category: "Animals"
},
{
    id: 429,
    english: "butterfly",
    korean: "나비",
    kurdish: "پەپوولە",
    category: "Animals"
},
{
    id: 430,
    english: "bee",
    korean: "벌",
    kurdish: "هەنگ",
    category: "Animals"
},

{
    id: 431,
    english: "office worker",
    korean: "회사원",
    kurdish: "کارمەندی نووسینگە",
    category: "Work"
},
{
    id: 432,
    english: "manager",
    korean: "관리자",
    kurdish: "بەڕێوەبەر",
    category: "Work"
},
{
    id: 433,
    english: "company",
    korean: "회사",
    kurdish: "کۆمپانیا",
    category: "Work"
},
{
    id: 434,
    english: "business",
    korean: "사업",
    kurdish: "بازرگانی",
    category: "Work"
},
{
    id: 435,
    english: "project",
    korean: "프로젝트",
    kurdish: "پڕۆژە",
    category: "Work"
},
{
    id: 436,
    english: "plan",
    korean: "계획",
    kurdish: "پلان",
    category: "Work"
},
{
    id: 437,
    english: "team",
    korean: "팀",
    kurdish: "تیم",
    category: "Work"
},
{
    id: 438,
    english: "leader",
    korean: "지도자",
    kurdish: "سەرکردە",
    category: "Work"
},
{
    id: 439,
    english: "boss",
    korean: "상사",
    kurdish: "بەڕێوەبەر",
    category: "Work"
},
{
    id: 440,
    english: "salary",
    korean: "월급",
    kurdish: "مووچە",
    category: "Work"
},

{
    id: 441,
    english: "holiday",
    korean: "휴일",
    kurdish: "پشووی",
    category: "Daily"
},
{
    id: 442,
    english: "birthday",
    korean: "생일",
    kurdish: "ڕۆژی لەدایکبوون",
    category: "Daily"
},
{
    id: 443,
    english: "name",
    korean: "이름",
    kurdish: "ناو",
    category: "Daily"
},
{
    id: 444,
    english: "address",
    korean: "주소",
    kurdish: "ناونیشان",
    category: "Daily"
},
{
    id: 445,
    english: "number",
    korean: "번호",
    kurdish: "ژمارە",
    category: "Daily"
},
{
    id: 446,
    english: "price",
    korean: "가격",
    kurdish: "نرخ",
    category: "Daily"
},
{
    id: 447,
    english: "cost",
    korean: "비용",
    kurdish: "تێچوون",
    category: "Daily"
},
{
    id: 448,
    english: "gift",
    korean: "선물",
    kurdish: "دیاری",
    category: "Daily"
},
{
    id: 449,
    english: "clothes",
    korean: "옷",
    kurdish: "جل",
    category: "Daily"
},
{
    id: 450,
    english: "shoes",
    korean: "신발",
    kurdish: "پێڵاو",
    category: "Daily"
},

{
    id: 451,
    english: "shirt",
    korean: "셔츠",
    kurdish: "کراسی",
    category: "Daily"
},
{
    id: 452,
    english: "pants",
    korean: "바지",
    kurdish: "پانتۆڵ",
    category: "Daily"
},
{
    id: 453,
    english: "jacket",
    korean: "재킷",
    kurdish: "چاکەت",
    category: "Daily"
},
{
    id: 454,
    english: "hat",
    korean: "모자",
    kurdish: "کڵاو",
    category: "Daily"
},
{
    id: 455,
    english: "bag",
    korean: "가방",
    kurdish: "جانتا",
    category: "Daily"
},
{
    id: 456,
    english: "umbrella",
    korean: "우산",
    kurdish: "چەتر",
    category: "Daily"
},
{
    id: 457,
    english: "watch",
    korean: "시계",
    kurdish: "کاتژمێر",
    category: "Daily"
},
{
    id: 458,
    english: "glasses",
    korean: "안경",
    kurdish: "چاویلکە",
    category: "Daily"
},
{
    id: 459,
    english: "wallet",
    korean: "지갑",
    kurdish: "جزدان",
    category: "Daily"
},
{
    id: 460,
    english: "bottle",
    korean: "병",
    kurdish: "بوتڵ",
    category: "Daily"
},

{
    id: 461,
    english: "health",
    korean: "건강",
    kurdish: "تەندروستی",
    category: "Health"
},
{
    id: 462,
    english: "medicine",
    korean: "약",
    kurdish: "دەرمان",
    category: "Health"
},
{
    id: 463,
    english: "pain",
    korean: "통증",
    kurdish: "ئازار",
    category: "Health"
},
{
    id: 464,
    english: "headache",
    korean: "두통",
    kurdish: "سەردەرد",
    category: "Health"
},
{
    id: 465,
    english: "fever",
    korean: "열",
    kurdish: "تا",
    category: "Health"
},
{
    id: 466,
    english: "cough",
    korean: "기침",
    kurdish: "کۆکە",
    category: "Health"
},
{
    id: 467,
    english: "doctor appointment",
    korean: "진료 예약",
    kurdish: "کاتی پزیشک",
    category: "Health"
},
{
    id: 468,
    english: "hospital room",
    korean: "병실",
    kurdish: "ژووری نەخۆشخانە",
    category: "Health"
},
{
    id: 469,
    english: "patient",
    korean: "환자",
    kurdish: "نەخۆش",
    category: "Health"
},
{
    id: 470,
    english: "treatment",
    korean: "치료",
    kurdish: "چارەسەر",
    category: "Health"
},

{
    id: 471,
    english: "blood",
    korean: "피",
    kurdish: "خوێن",
    category: "Health"
},
{
    id: 472,
    english: "heart",
    korean: "심장",
    kurdish: "دڵ",
    category: "Health"
},
{
    id: 473,
    english: "brain",
    korean: "뇌",
    kurdish: "مێشک",
    category: "Health"
},
{
    id: 474,
    english: "eye",
    korean: "눈",
    kurdish: "چاو",
    category: "Health"
},
{
    id: 475,
    english: "ear",
    korean: "귀",
    kurdish: "گوێ",
    category: "Health"
},
{
    id: 476,
    english: "nose",
    korean: "코",
    kurdish: "لووت",
    category: "Health"
},
{
    id: 477,
    english: "mouth",
    korean: "입",
    kurdish: "دەم",
    category: "Health"
},
{
    id: 478,
    english: "hand",
    korean: "손",
    kurdish: "دەست",
    category: "Health"
},
{
    id: 479,
    english: "foot",
    korean: "발",
    kurdish: "پێ",
    category: "Health"
},
{
    id: 480,
    english: "body",
    korean: "몸",
    kurdish: "جەستە",
    category: "Health"
},

{
    id: 481,
    english: "run",
    korean: "달리다",
    kurdish: "ڕاکردن",
    category: "Verbs"
},
{
    id: 482,
    english: "walk",
    korean: "걷다",
    kurdish: "پیاسەکردن",
    category: "Verbs"
},
{
    id: 483,
    english: "sit",
    korean: "앉다",
    kurdish: "دانیشتن",
    category: "Verbs"
},
{
    id: 484,
    english: "stand",
    korean: "서다",
    kurdish: "وەستان",
    category: "Verbs"
},
{
    id: 485,
    english: "turn",
    korean: "돌다",
    kurdish: "سووڕانەوە",
    category: "Verbs"
},
{
    id: 486,
    english: "move",
    korean: "움직이다",
    kurdish: "جوڵان",
    category: "Verbs"
},
{
    id: 487,
    english: "drive",
    korean: "운전하다",
    kurdish: "شۆفێری‌کردن",
    category: "Verbs"
},
{
    id: 488,
    english: "travel",
    korean: "여행하다",
    kurdish: "گەشتکردن",
    category: "Verbs"
},
{
    id: 489,
    english: "visit",
    korean: "방문하다",
    kurdish: "سەردانکردن",
    category: "Verbs"
},
{
    id: 490,
    english: "meet",
    korean: "만나다",
    kurdish: "بینینەوە",
    category: "Verbs"
},

{
    id: 491,
    english: "talk",
    korean: "이야기하다",
    kurdish: "گفتوگۆکردن",
    category: "Verbs"
},
{
    id: 492,
    english: "laugh",
    korean: "웃다",
    kurdish: "پێکەنین",
    category: "Verbs"
},
{
    id: 493,
    english: "cry",
    korean: "울다",
    kurdish: "گریان",
    category: "Verbs"
},
{
    id: 494,
    english: "smile",
    korean: "미소 짓다",
    kurdish: "پێکەنین بە ڕووخسار",
    category: "Verbs"
},
{
    id: 495,
    english: "sing",
    korean: "노래하다",
    kurdish: "گۆرانی‌گوتن",
    category: "Verbs"
},
{
    id: 496,
    english: "dance",
    korean: "춤추다",
    kurdish: "سەماکردن",
    category: "Verbs"
},
{
    id: 497,
    english: "play",
    korean: "놀다",
    kurdish: "یاری‌کردن",
    category: "Verbs"
},
{
    id: 498,
    english: "watch",
    korean: "보다",
    kurdish: "سەیرکردن",
    category: "Verbs"
},
{
    id: 499,
    english: "wait",
    korean: "기다리다",
    kurdish: "چاوەڕوانبوون",
    category: "Verbs"
},
{
    id: 500,
    english: "choose",
    korean: "선택하다",
    kurdish: "هەڵبژاردن",
    category: "Verbs"
},

{
    id: 501,
    english: "change",
    korean: "바꾸다",
    kurdish: "گۆڕین",
    category: "Verbs"
},
{
    id: 502,
    english: "try",
    korean: "시도하다",
    kurdish: "هەوڵدان",
    category: "Verbs"
},
{
    id: 503,
    english: "use",
    korean: "사용하다",
    kurdish: "بەکارهێنان",
    category: "Verbs"
},
{
    id: 504,
    english: "need",
    korean: "필요하다",
    kurdish: "پێویستبوون",
    category: "Verbs"
},
{
    id: 505,
    english: "believe",
    korean: "믿다",
    kurdish: "باوەڕکردن",
    category: "Verbs"
},
{
    id: 506,
    english: "decide",
    korean: "결정하다",
    kurdish: "بڕیاردان",
    category: "Verbs"
},
{
    id: 507,
    english: "hope",
    korean: "바라다",
    kurdish: "هیواخواستن",
    category: "Verbs"
},
{
    id: 508,
    english: "win",
    korean: "이기다",
    kurdish: "بردنەوە",
    category: "Verbs"
},
{
    id: 509,
    english: "fail",
    korean: "실패하다",
    kurdish: "شکستهێنان",
    category: "Verbs"
},
{
    id: 510,
    english: "win a prize",
    korean: "상을 받다",
    kurdish: "خەڵاتبردنەوە",
    category: "Verbs"
},

{
    id: 511,
    english: "idea",
    korean: "아이디어",
    kurdish: "بیرۆکە",
    category: "Daily"
},
{
    id: 512,
    english: "reason",
    korean: "이유",
    kurdish: "هۆکار",
    category: "Daily"
},
{
    id: 513,
    english: "problem",
    korean: "문제",
    kurdish: "کێشە",
    category: "Daily"
},
{
    id: 514,
    english: "solution",
    korean: "해결책",
    kurdish: "چارەسەر",
    category: "Daily"
},
{
    id: 515,
    english: "example",
    korean: "예",
    kurdish: "نموونە",
    category: "Education"
},
{
    id: 516,
    english: "information",
    korean: "정보",
    kurdish: "زانیاری",
    category: "Education"
},
{
    id: 517,
    english: "knowledge",
    korean: "지식",
    kurdish: "زانست",
    category: "Education"
},
{
    id: 518,
    english: "experience",
    korean: "경험",
    kurdish: "ئەزموون",
    category: "Education"
},
{
    id: 519,
    english: "memory",
    korean: "기억",
    kurdish: "بیرەوەری",
    category: "Education"
},
{
    id: 520,
    english: "skill",
    korean: "기술",
    kurdish: "شارەزایی",
    category: "Education"
},

{
    id: 521,
    english: "future",
    korean: "미래",
    kurdish: "داهاتوو",
    category: "Time"
},
{
    id: 522,
    english: "past",
    korean: "과거",
    kurdish: "ڕابردوو",
    category: "Time"
},
{
    id: 523,
    english: "present",
    korean: "현재",
    kurdish: "ئێستا",
    category: "Time"
},
{
    id: 524,
    english: "moment",
    korean: "순간",
    kurdish: "سات",
    category: "Time"
},
{
    id: 525,
    english: "date",
    korean: "날짜",
    kurdish: "بەروار",
    category: "Time"
},
{
    id: 526,
    english: "calendar",
    korean: "달력",
    kurdish: "ڕۆژژمێر",
    category: "Time"
},
{
    id: 527,
    english: "weekend",
    korean: "주말",
    kurdish: "کۆتایی هەفتە",
    category: "Time"
},
{
    id: 528,
    english: "midnight",
    korean: "자정",
    kurdish: "نیوەڕەوی شەو",
    category: "Time"
},
{
    id: 529,
    english: "noon",
    korean: "정오",
    kurdish: "نیوەڕۆ",
    category: "Time"
},
{
    id: 530,
    english: "daily",
    korean: "매일",
    kurdish: "ڕۆژانە",
    category: "Time"
},

{
    id: 531,
    english: "break",
    korean: "휴식",
    kurdish: "پشوودان",
    category: "Daily"
},
{
    id: 532,
    english: "breakfast table",
    korean: "아침 식탁",
    kurdish: "مێزی نانی بەیانی",
    category: "Daily"
},
{
    id: 533,
    english: "marketplace",
    korean: "시장",
    kurdish: "بازاڕگە",
    category: "Daily"
},
{
    id: 534,
    english: "receipt",
    korean: "영수증",
    kurdish: "پسولە",
    category: "Daily"
},
{
    id: 535,
    english: "shopkeeper",
    korean: "상인",
    kurdish: "دوکان‌دار",
    category: "Daily"
},
{
    id: 536,
    english: "customer service",
    korean: "고객 서비스",
    kurdish: "خزمەتگوزاری کڕیار",
    category: "Daily"
},
{
    id: 537,
    english: "address book",
    korean: "주소록",
    kurdish: "دفتەری ناونیشان",
    category: "Daily"
},
{
    id: 538,
    english: "calendar day",
    korean: "달력 날짜",
    kurdish: "ڕۆژی ڕۆژژمێر",
    category: "Daily"
},
{
    id: 539,
    english: "daily routine",
    korean: "일상",
    kurdish: "ڕۆتینی ڕۆژانە",
    category: "Daily"
},
{
    id: 540,
    english: "habit",
    korean: "습관",
    kurdish: "عادەت",
    category: "Daily"
},

{
    id: 541,
    english: "goal",
    korean: "목표",
    kurdish: "ئامانج",
    category: "Daily"
},
{
    id: 542,
    english: "success",
    korean: "성공",
    kurdish: "سەرکەوتن",
    category: "Daily"
},
{
    id: 543,
    english: "failure",
    korean: "실패",
    kurdish: "شکست",
    category: "Daily"
},
{
    id: 544,
    english: "chance",
    korean: "기회",
    kurdish: "دەرفەت",
    category: "Daily"
},
{
    id: 545,
    english: "choice",
    korean: "선택",
    kurdish: "هەڵبژاردە",
    category: "Daily"
},
{
    id: 546,
    english: "decision",
    korean: "결정",
    kurdish: "بڕیار",
    category: "Daily"
},
{
    id: 547,
    english: "mistake",
    korean: "실수",
    kurdish: "هەڵە",
    category: "Daily"
},
{
    id: 548,
    english: "truth",
    korean: "진실",
    kurdish: "ڕاستی",
    category: "Daily"
},
{
    id: 549,
    english: "lie",
    korean: "거짓말",
    kurdish: "درۆ",
    category: "Daily"
},
{
    id: 550,
    english: "secret",
    korean: "비밀",
    kurdish: "نهێنی",
    category: "Daily"
},

{
    id: 551,
    english: "respect",
    korean: "존중",
    kurdish: "ڕێز",
    category: "People"
},
{
    id: 552,
    english: "support",
    korean: "지원",
    kurdish: "پشتگیری",
    category: "People"
},
{
    id: 553,
    english: "teamwork",
    korean: "팀워크",
    kurdish: "کاری تیمی",
    category: "Work"
},
{
    id: 554,
    english: "friendship",
    korean: "우정",
    kurdish: "هاوڕێیەتی",
    category: "People"
},
{
    id: 555,
    english: "community",
    korean: "지역 사회",
    kurdish: "کۆمەڵگا",
    category: "People"
},
{
    id: 556,
    english: "culture",
    korean: "문화",
    kurdish: "کەلتوور",
    category: "People"
},
{
    id: 557,
    english: "tradition",
    korean: "전통",
    kurdish: "نەریت",
    category: "People"
},
{
    id: 558,
    english: "history",
    korean: "역사",
    kurdish: "مێژوو",
    category: "Education"
},
{
    id: 559,
    english: "countryman",
    korean: "동포",
    kurdish: "هاووڵاتی",
    category: "People"
},
{
    id: 560,
    english: "citizen",
    korean: "시민",
    kurdish: "هاووڵاتی شار",
    category: "People"
},

{
    id: 561,
    english: "questionnaire",
    korean: "설문지",
    kurdish: "پرسیارنامە",
    category: "Education"
},
{
    id: 562,
    english: "sentence",
    korean: "문장",
    kurdish: "ڕستە",
    category: "Education"
},
{
    id: 563,
    english: "grammar",
    korean: "문법",
    kurdish: "ڕێزمان",
    category: "Education"
},
{
    id: 564,
    english: "meaning",
    korean: "의미",
    kurdish: "واتا",
    category: "Education"
},
{
    id: 565,
    english: "translation",
    korean: "번역",
    kurdish: "وەرگێڕان",
    category: "Education"
},
{
    id: 566,
    english: "pronunciation",
    korean: "발음",
    kurdish: "تەلەفوز",
    category: "Education"
},
{
    id: 567,
    english: "conversation",
    korean: "대화",
    kurdish: "گفتوگۆ",
    category: "Education"
},
{
    id: 568,
    english: "dictionary app",
    korean: "사전 앱",
    kurdish: "ئەپەی فەرهەنگ",
    category: "Technology"
},
{
    id: 569,
    english: "vocabulary",
    korean: "어휘",
    kurdish: "وشەسازی",
    category: "Education"
},
{
    id: 570,
    english: "knowledge base",
    korean: "지식 기반",
    kurdish: "بنەمای زانیاری",
    category: "Education"
},

{
    id: 571,
    english: "energy",
    korean: "에너지",
    kurdish: "وزە",
    category: "Science"
},
{
    id: 572,
    english: "power",
    korean: "힘",
    kurdish: "هێز",
    category: "Science"
},
{
    id: 573,
    english: "light",
    korean: "빛",
    kurdish: "ڕووناکی",
    category: "Science"
},
{
    id: 574,
    english: "sound",
    korean: "소리",
    kurdish: "دەنگ",
    category: "Science"
},
{
    id: 575,
    english: "air",
    korean: "공기",
    kurdish: "هەوا",
    category: "Nature"
},
{
    id: 576,
    english: "fire",
    korean: "불",
    kurdish: "ئاگر",
    category: "Nature"
},
{
    id: 577,
    english: "waterfall",
    korean: "폭포",
    kurdish: "ئاویشار",
    category: "Nature"
},
{
    id: 578,
    english: "volcano",
    korean: "화산",
    kurdish: "دەربڕینی گڕکان",
    category: "Nature"
},
{
    id: 579,
    english: "planet",
    korean: "행성",
    kurdish: "هەسارە",
    category: "Science"
},
{
    id: 580,
    english: "space",
    korean: "우주",
    kurdish: "بۆشایی ئاسمان",
    category: "Science"
},

{
    id: 581,
    english: "starfish",
    korean: "불가사리",
    kurdish: "ئەستێرەماسی",
    category: "Animals"
},
{
    id: 582,
    english: "dolphin",
    korean: "돌고래",
    kurdish: "دۆڵفین",
    category: "Animals"
},
{
    id: 583,
    english: "whale",
    korean: "고래",
    kurdish: "نەهەنگ",
    category: "Animals"
},
{
    id: 584,
    english: "shark",
    korean: "상어",
    kurdish: "قەرەماسی",
    category: "Animals"
},
{
    id: 585,
    english: "turtle",
    korean: "거북이",
    kurdish: "کۆسک",
    category: "Animals"
},
{
    id: 586,
    english: "frog",
    korean: "개구리",
    kurdish: "قورباغە",
    category: "Animals"
},
{
    id: 587,
    english: "ant",
    korean: "개미",
    kurdish: "مێروو",
    category: "Animals"
},
{
    id: 588,
    english: "spider",
    korean: "거미",
    kurdish: "جاڵجاڵۆکە",
    category: "Animals"
},
{
    id: 589,
    english: "horse rider",
    korean: "기수",
    kurdish: "ئەسپ‌سوار",
    category: "Animals"
},
{
    id: 590,
    english: "pet",
    korean: "애완동물",
    kurdish: "ئاژەڵی ماڵی",
    category: "Animals"
},

{
    id: 591,
    english: "red apple",
    korean: "빨간 사과",
    kurdish: "سێوی سور",
    category: "Food"
},
{
    id: 592,
    english: "fruit",
    korean: "과일",
    kurdish: "میوە",
    category: "Food"
},
{
    id: 593,
    english: "vegetable",
    korean: "채소",
    kurdish: "سەوزە",
    category: "Food"
},
{
    id: 594,
    english: "juice",
    korean: "주스",
    kurdish: "شەربەت",
    category: "Food"
},
{
    id: 595,
    english: "cake",
    korean: "케이크",
    kurdish: "کێک",
    category: "Food"
},
{
    id: 596,
    english: "chocolate",
    korean: "초콜릿",
    kurdish: "شۆکۆلات",
    category: "Food"
},
{
    id: 597,
    english: "ice cream",
    korean: "아이스크림",
    kurdish: "ئایس کریم",
    category: "Food"
},
{
    id: 598,
    english: "sandwich",
    korean: "샌드위치",
    kurdish: "ساندویچ",
    category: "Food"
},
{
    id: 599,
    english: "noodles",
    korean: "국수",
    kurdish: "نۆودڵ",
    category: "Food"
},
{
    id: 600,
    english: "pizza",
    korean: "피자",
    kurdish: "پیتزا",
    category: "Food"
},
];



/* =========================================================
   STATE
========================================================= */

const DEFAULT_STATE = {
    selectedLanguage: "english",
    currentSection: "dashboard",

    xp: 0,
    streak: 0,

    learned: [],
    favorites: [],

    quizAnswered: 0,
    quizCorrect: 0,

    lastActiveDate: null,

    quizUsed: [],
    writingUsed: [],

    darkMode: true,

    dailyGoal: 10
};

let state = { ...DEFAULT_STATE };

let currentUser = null;

let quizCurrentWord = null;
let quizOptions = [];
let writingCurrentWord = null;


/* =========================================================
   DOM
========================================================= */

const authScreen = document.getElementById("authScreen");
const app = document.getElementById("app");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");

const authSwitchText = document.getElementById("authSwitchText");
const authSwitchBtn = document.getElementById("authSwitchBtn");

const authMessage = document.getElementById("authMessage");

const appContent = document.getElementById("appContent");

const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const toastIcon = document.getElementById("toastIcon");


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function todayKey() {

    return new Date().toISOString().slice(0, 10);
}


function getStateKey() {

    if (!currentUser) {
        return "linguaGlassGuestState";
    }

    return `linguaGlassState_${currentUser.id}`;
}


function loadState() {

    try {

        const saved = localStorage.getItem(getStateKey());

        if (!saved) {
            state = { ...DEFAULT_STATE };
            return;
        }

        const parsed = JSON.parse(saved);

        state = {
            ...DEFAULT_STATE,
            ...parsed
        };

    } catch (error) {

        console.error("State load error:", error);

        state = {
            ...DEFAULT_STATE
        };
    }
}


function saveState() {

    try {

        localStorage.setItem(
            getStateKey(),
            JSON.stringify(state)
        );

    } catch (error) {

        console.error("State save error:", error);
    }
}


function showToast(message, type = "success") {

    toastText.textContent = message;

    toastIcon.className =
        type === "error"
            ? "fa-solid fa-circle-exclamation"
            : "fa-solid fa-circle-check";

    toastIcon.style.color =
        type === "error"
            ? "#f87171"
            : "#4ade80";

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


function setAuthMessage(message, type = "") {

    authMessage.textContent = message;

    authMessage.className =
        "auth-message" +
        (type ? ` ${type}` : "");
}


function setButtonLoading(button, loading, normalText) {

    if (!button) return;

    button.disabled = loading;

    if (loading) {

        button.dataset.originalText =
            button.innerHTML;

        button.innerHTML =
            `<i class="fa-solid fa-spinner fa-spin"></i> تکایە چاوەڕوان بە...`;

    } else {

        button.innerHTML =
            button.dataset.originalText || normalText;
    }
}


/* =========================================================
   AUTH UI
========================================================= */

function showLoginForm() {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    authTitle.textContent = "بەخێربێیت 👋";

    authSubtitle.textContent =
        "بچۆ ژوورەوە بۆ دەستگەیشتن بە وانەکانت";

    authSwitchText.textContent =
        "هەژمارت نییە؟";

    authSwitchBtn.textContent =
        "هەژمار دروست بکە";

    setAuthMessage("");
}


function showSignupForm() {

    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");

    authTitle.textContent =
        "هەژمارێکی نوێ دروست بکە ✨";

    authSubtitle.textContent =
        "گەشتی فێربوونی زمانەکەت لە ئێرەوە دەست پێ بکە";

    authSwitchText.textContent =
        "هەژمارت هەیە؟";

    authSwitchBtn.textContent =
        "چوونەژوورەوە";

    setAuthMessage("");
}


authSwitchBtn.addEventListener("click", () => {

    if (loginForm.classList.contains("hidden")) {
        showLoginForm();
    } else {
        showSignupForm();
    }

});


/* =========================================================
   SIGN UP
========================================================= */

signupForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name =
        document.getElementById("signupName")
            .value.trim();

    const email =
        document.getElementById("signupEmail")
            .value.trim();

    const password =
        document.getElementById("signupPassword")
            .value;

    const confirmPassword =
        document.getElementById("signupPasswordConfirm")
            .value;

    const button =
        signupForm.querySelector("button[type='submit']");


    if (!name) {

        setAuthMessage(
            "تکایە ناوت بنووسە.",
            "error"
        );

        return;
    }


    if (password.length < 6) {

        setAuthMessage(
            "وشەی نهێنی دەبێت لانیکەم 6 پیت بێت.",
            "error"
        );

        return;
    }


    if (password !== confirmPassword) {

        setAuthMessage(
            "دوو وشەی نهێنی یەکسان نین.",
            "error"
        );

        return;
    }


    setButtonLoading(
        button,
        true,
        "دروستکردنی هەژمار"
    );


    const { data, error } =
        await supabaseClient.auth.signUp({

            email,
            password,

            options: {
                data: {
                    full_name: name
                }
            }

        });


    setButtonLoading(
        button,
        false,
        "دروستکردنی هەژمار"
    );


    if (error) {

        console.error(error);

        setAuthMessage(
            translateAuthError(error.message),
            "error"
        );

        return;
    }


    /*
       If email confirmation is enabled,
       Supabase may return a user without a session.
    */

    if (data.session) {

        setAuthMessage(
            "هەژمارەکەت بە سەرکەوتوویی دروست کرا.",
            "success"
        );

        showToast(
            "بەخێربێیت بۆ LinguaGlass!"
        );

    } else {

        setAuthMessage(
            "هەژمارەکەت دروست کرا. تکایە ئیمەیڵەکەت بپشکنە بۆ پشتڕاستکردنەوە.",
            "success"
        );

        setTimeout(() => {
            showLoginForm();
        }, 1800);
    }

});


/* =========================================================
   LOGIN
========================================================= */

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value;

    const button =
        loginForm.querySelector("button[type='submit']");


    setButtonLoading(
        button,
        true,
        "چوونەژوورەوە"
    );


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({

            email,
            password

        });


    setButtonLoading(
        button,
        false,
        "چوونەژوورەوە"
    );


    if (error) {

        console.error(error);

        setAuthMessage(
            translateAuthError(error.message),
            "error"
        );

        return;
    }


    if (data.user) {

        currentUser = data.user;

        setAuthMessage(
            "بە سەرکەوتوویی چوویتە ژوورەوە.",
            "success"
        );

        await startApplication(currentUser);
    }

});


/* =========================================================
   AUTH ERROR TRANSLATION
========================================================= */

function translateAuthError(message) {

    const text = String(message || "").toLowerCase();

    if (text.includes("invalid login credentials")) {
        return "ئیمەیڵ یان وشەی نهێنی هەڵەیە.";
    }

    if (text.includes("email not confirmed")) {
        return "ئیمەیڵەکەت هێشتا پشتڕاست نەکراوەتەوە.";
    }

    if (text.includes("user already registered")) {
        return "ئەم ئیمەیڵە پێشتر هەژماری هەیە.";
    }

    if (text.includes("password")) {
        return "کێشەیەک لە وشەی نهێنی هەیە.";
    }

    if (text.includes("rate limit")) {
        return "تکایە کەمێک چاوەڕوان بە و دووبارە هەوڵ بدەرەوە.";
    }

    if (text.includes("network")) {
        return "کێشەی پەیوەندی بە ئینتەرنێت هەیە.";
    }

    return message || "هەڵەیەکی نەناسراو ڕوویدا.";
}


/* =========================================================
   AUTH STATE
========================================================= */

async function checkExistingSession() {

    const {
        data,
        error
    } = await supabaseClient.auth.getSession();


    if (error) {

        console.error(
            "Session error:",
            error
        );

        showLoginForm();

        return;
    }


    if (data.session?.user) {

        currentUser = data.session.user;

        await startApplication(currentUser);

    } else {

        showAuthScreen();
    }
}


supabaseClient.auth.onAuthStateChange(
    async (event, session) => {

        console.log(
            "Supabase auth event:",
            event
        );


        if (
            session?.user &&
            event !== "SIGNED_OUT"
        ) {

            currentUser = session.user;

        }


        if (event === "SIGNED_OUT") {

            currentUser = null;

            showAuthScreen();

        }

    }
);


/* =========================================================
   SHOW APP / AUTH
========================================================= */

function showAuthScreen() {

    app.classList.add("hidden");
    authScreen.classList.remove("hidden");

    document.body.classList.remove("app-active");
}


function showApplication() {

    authScreen.classList.add("hidden");
    app.classList.remove("hidden");

    document.body.classList.add("app-active");
}


/* =========================================================
   START APPLICATION
========================================================= */

async function startApplication(user) {

    currentUser = user;

    loadState();

    checkDailyStreak();

    applyTheme();

    updateUserUI();

    showApplication();

    setupNavigation();

    setupLanguageButtons();

    renderCurrentSection();

    updateGlobalStats();

}


/* =========================================================
   USER UI
========================================================= */

function getUserName() {

    if (!currentUser) {
        return "User";
    }

    return (
        currentUser.user_metadata?.full_name ||
        currentUser.email?.split("@")[0] ||
        "User"
    );
}


function updateUserUI() {

    const name = getUserName();

    const email =
        currentUser?.email || "";


    const sidebarName =
        document.getElementById("sidebarUserName");

    const sidebarEmail =
        document.getElementById("sidebarUserEmail");


    if (sidebarName) {
        sidebarName.textContent = name;
    }

    if (sidebarEmail) {
        sidebarEmail.textContent = email;
    }
}


/* =========================================================
   LOGOUT
========================================================= */

document.getElementById("logoutBtn")
    .addEventListener("click", async () => {

        const confirmed =
            confirm("دڵنیایت دەتەوێت دەرچیت؟");

        if (!confirmed) {
            return;
        }


        const { error } =
            await supabaseClient.auth.signOut({
                scope: "local"
            });


        if (error) {

            console.error(error);

            showToast(
                translateAuthError(error.message),
                "error"
            );

            return;
        }


        currentUser = null;

        state = {
            ...DEFAULT_STATE
        };

        closeMobileMenu();

        showAuthScreen();

        loginForm.reset();
        signupForm.reset();

        showLoginForm();

        showToast(
            "بە سەرکەوتوویی دەرچوویت."
        );

    });


/* =========================================================
   STREAK
========================================================= */

function checkDailyStreak() {

    const today = todayKey();

    if (!state.lastActiveDate) {

        state.streak = 1;
        state.lastActiveDate = today;

        saveState();

        return;
    }


    if (state.lastActiveDate === today) {
        return;
    }


    const previous =
        new Date(state.lastActiveDate);

    const current =
        new Date(today);


    const difference =
        Math.floor(
            (
                current - previous
            ) /
            (1000 * 60 * 60 * 24)
        );


    if (difference === 1) {

        state.streak += 1;

    } else {

        state.streak = 1;
    }


    state.lastActiveDate = today;

    saveState();
}


/* =========================================================
   NAVIGATION
========================================================= */

const sectionTitles = {

    dashboard: [
        "سەرەکی",
        "پوختەی فێربوونەکەت"
    ],

    vocabulary: [
        "وشەکان",
        "وشە نوێکان فێربە"
    ],

    quiz: [
        "Quiz",
        "زانینەکەت تاقی بکەرەوە"
    ],

    writing: [
        "نووسین",
        "بە زمانەکەت ڕاهێنان بکە"
    ],

    favorites: [
        "دڵخوازەکان",
        "وشە هەڵگیراوەکانت"
    ],

    progress: [
        "پێشکەوتن",
        "پێشکەوتنی فێربوونەکەت"
    ],

    achievements: [
        "دەستکەوتەکان",
        "ئامانجەکانت بەدەست بهێنە"
    ],

    settings: [
        "ڕێکخستنەکان",
        "ئەپەکە بەپێی خۆت ڕێکبخە"
    ],

    social: [
        "سۆشیال میدیا",
        "لەگەڵ ئێمە پەیوەندی بکە"
    ]

};


function setupNavigation() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.onclick = () => {

                const section =
                    button.dataset.section;

                state.currentSection =
                    section;

                saveState();

                document
                    .querySelectorAll(".nav-item")
                    .forEach(item => {
                        item.classList.remove("active");
                    });

                button.classList.add("active");

                renderCurrentSection();

                closeMobileMenu();
            };

        });
}


function updateNavigationActive() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section ===
                state.currentSection
            );

        });
}


function renderCurrentSection() {

    const section =
        state.currentSection || "dashboard";


    const title =
        sectionTitles[section] ||
        sectionTitles.dashboard;


    document.getElementById("pageTitle")
        .textContent = title[0];

    document.getElementById("pageSubtitle")
        .textContent = title[1];


    updateNavigationActive();


    const sectionHTML =
        getSectionHTML(section);


    if (sectionHTML) {

        appContent.innerHTML = sectionHTML;

        return;
    }


    switch (section) {

        case "vocabulary":
            renderVocabulary();
            break;

        case "quiz":
            renderQuiz();
            break;

        case "writing":
            renderWriting();
            break;

        case "favorites":
            renderFavorites();
            break;

        case "progress":
            renderProgress();
            break;

        case "achievements":
            renderAchievements();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderDashboard();
    }

}


function getSectionHTML(section) {

    switch (section) {

        case "social":
            return renderSocialSection();

        default:
            return "";
    }
}


/* =========================================================
   LANGUAGE
========================================================= */

function setupLanguageButtons() {

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.onclick = () => {

                state.selectedLanguage =
                    button.dataset.language;

                saveState();

                document
                    .querySelectorAll(".language-btn")
                    .forEach(item => {
                        item.classList.toggle(
                            "active",
                            item === button
                        );
                    });

                renderCurrentSection();
            };

        });


    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                state.selectedLanguage
            );

        });
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const learnedCount =
        state.learned.length;

    const total =
        VOCABULARY.length;

    const percentage =
        total
            ? Math.min(
                100,
                Math.round(
                    learnedCount /
                    total *
                    100
                )
            )
            : 0;


    const quizAccuracy =
        state.quizAnswered
            ? Math.round(
                state.quizCorrect /
                state.quizAnswered *
                100
            )
            : 0;


    const name =
        escapeHTML(getUserName());


    appContent.innerHTML = `

        <div class="page-header">
            <h2>سڵاو ${name} 👋</h2>
            <p>
                بەردەوام بە، هەر ڕۆژێک هەنگاوێکە بەرەو پێشەوە.
            </p>
        </div>


        <div class="hero-card">

            <div class="hero-text">

                <h2>
                    گەشتی زمانەکەت دەست پێ بکە ✨
                </h2>

                <p>
                    وشە فێربە، Quiz بکە، بنووسە
                    و پێشکەوتنەکەت بەدواداچوون بکە.
                </p>

            </div>

            <div class="hero-icon">
                <i class="fa-solid fa-graduation-cap"></i>
            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-book"></i>
                </div>

                <h3>${learnedCount}</h3>
                <p>وشەی فێربوو</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-fire"></i>
                </div>

                <h3>${state.streak}</h3>
                <p>ڕۆژی بەردەوامی</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-star"></i>
                </div>

                <h3>${state.xp}</h3>
                <p>XP</p>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-bullseye"></i>
                </div>

                <h3>${quizAccuracy}%</h3>
                <p>ڕاستی Quiz</p>

            </div>

        </div>


        <div class="dashboard-grid">

            <div class="panel">

                <div class="panel-title">
                    <h3>ئامانجی ڕۆژانە</h3>
                    <span>${learnedCount}/${state.dailyGoal}</span>
                </div>

                <div class="goal-circle">

                    <div class="goal-circle-inner">

                        <strong>${percentage}%</strong>

                        <span>
                            گشتی وشەکان
                        </span>

                    </div>

                </div>

                <div class="quick-grid">

                    <button
                        class="quick-action"
                        data-go="vocabulary"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        <strong>وشەکان</strong>
                        <small>وشە نوێ فێربە</small>
                    </button>

                    <button
                        class="quick-action"
                        data-go="quiz"
                    >
                        <i class="fa-solid fa-circle-question"></i>
                        <strong>Quiz</strong>
                        <small>زانینەکەت تاقی بکەرەوە</small>
                    </button>

                    <button
                        class="quick-action"
                        data-go="writing"
                    >
                        <i class="fa-solid fa-pen"></i>
                        <strong>نووسین</strong>
                        <small>ڕاهێنان بکە</small>
                    </button>

                    <button
                        class="quick-action"
                        data-go="progress"
                    >
                        <i class="fa-solid fa-chart-line"></i>
                        <strong>پێشکەوتن</strong>
                        <small>ئامارەکان ببینە</small>
                    </button>

                </div>

            </div>


            <div class="panel">

                <div class="panel-title">

                    <h3>وشەی پێشنیارکراو</h3>

                    <span>
                        ${state.selectedLanguage === "english"
                            ? "English"
                            : "Korean"}
                    </span>

                </div>

                ${renderRandomWordPreview()}

            </div>

        </div>
    `;


    document
        .querySelectorAll("[data-go]")
        .forEach(button => {

            button.onclick = () => {

                state.currentSection =
                    button.dataset.go;

                saveState();

                renderCurrentSection();
            };

        });
}


function renderRandomWordPreview() {

    const word =
        VOCABULARY[
            Math.floor(
                Math.random() *
                VOCABULARY.length
            )
        ];


    const mainWord =
        state.selectedLanguage === "english"
            ? word.english
            : word.korean;


    return `

        <div class="word-card">

            <div class="word-top">

                <span class="word-language">
                    ${state.selectedLanguage === "english"
                        ? "English"
                        : "Korean"}
                </span>

                <button
                    class="word-fav"
                    onclick="toggleFavorite(${word.id})"
                >
                    <i class="fa-solid fa-heart"></i>
                </button>

            </div>

            <div class="word-main">

                <h3>
                    ${escapeHTML(mainWord)}
                </h3>

                <div class="korean">
                    ${
                        state.selectedLanguage === "english"
                            ? escapeHTML(word.korean)
                            : escapeHTML(word.english)
                    }
                </div>

                <div class="meaning">
                    ${escapeHTML(word.kurdish)}
                </div>

            </div>

            <span class="word-category">
                ${escapeHTML(word.category)}
            </span>

            <div class="word-actions">

                <button
                    class="small-btn"
                    onclick="speakWord(${word.id})"
                >
                    <i class="fa-solid fa-volume-high"></i>
                    گوێبگرە
                </button>

                <button
                    class="small-btn learned-btn"
                    onclick="markLearned(${word.id})"
                >
                    <i class="fa-solid fa-check"></i>
                    فێربووم
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   VOCABULARY
========================================================= */

function renderVocabulary() {

    const categories =
        [...new Set(
            VOCABULARY.map(
                word => word.category
            )
        )];


    appContent.innerHTML = `

        <div class="page-header">
            <h2>فێربوونی وشەکان 📚</h2>
            <p>
                وشە بگەڕێ، گوێی لێ بگرە و وەک فێربوو نیشانی بکە.
            </p>
        </div>


        <div class="vocab-toolbar">

            <div class="search-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <input
                    id="vocabSearch"
                    type="search"
                    placeholder="وشە بگەڕێ..."
                >

            </div>


            <select id="categoryFilter" class="category-select">

                <option value="all">
                    هەموو بابەتەکان
                </option>

                ${categories.map(category => `
                    <option value="${escapeHTML(category)}">
                        ${escapeHTML(category)}
                    </option>
                `).join("")}

            </select>

        </div>


        <div id="vocabGrid" class="vocab-grid"></div>
    `;


    const renderCards = () => {

        const search =
            document.getElementById("vocabSearch")
                .value
                .trim()
                .toLowerCase();


        const category =
            document.getElementById("categoryFilter")
                .value;


        const filtered =
            VOCABULARY.filter(word => {

                const searchMatch =
                    !search ||
                    word.english
                        .toLowerCase()
                        .includes(search) ||
                    word.korean
                        .toLowerCase()
                        .includes(search) ||
                    word.kurdish
                        .toLowerCase()
                        .includes(search);


                const categoryMatch =
                    category === "all" ||
                    word.category === category;


                return searchMatch &&
                    categoryMatch;
            });


        document.getElementById("vocabGrid")
            .innerHTML =
            filtered.length
                ? filtered.map(
                    renderWordCard
                ).join("")
                : `
                    <div class="empty-state">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <h3>هیچ وشەیەک نەدۆزرایەوە</h3>
                        <p>
                            وشەیەکی تر تاقی بکەرەوە.
                        </p>
                    </div>
                `;
    };


    document.getElementById("vocabSearch")
        .addEventListener(
            "input",
            renderCards
        );


    document.getElementById("categoryFilter")
        .addEventListener(
            "change",
            renderCards
        );


    renderCards();
}


function renderWordCard(word) {

    const mainWord =
        state.selectedLanguage === "english"
            ? word.english
            : word.korean;


    const secondaryWord =
        state.selectedLanguage === "english"
            ? word.korean
            : word.english;


    const favorite =
        state.favorites.includes(word.id);

    const learned =
        state.learned.includes(word.id);


    return `

        <article class="word-card">

            <div class="word-top">

                <span class="word-language">
                    ${
                        state.selectedLanguage === "english"
                            ? "English"
                            : "Korean"
                    }
                </span>

                <button
                    class="word-fav ${favorite ? "active" : ""}"
                    onclick="toggleFavorite(${word.id})"
                    title="Favorite"
                >
                    <i class="fa-solid fa-heart"></i>
                </button>

            </div>


            <div class="word-main">

                <h3>
                    ${escapeHTML(mainWord)}
                </h3>

                <div class="korean">
                    ${escapeHTML(secondaryWord)}
                </div>

                <div class="meaning">
                    ${escapeHTML(word.kurdish)}
                </div>

            </div>


            <span class="word-category">
                ${escapeHTML(word.category)}
            </span>


            <div class="word-actions">

                <button
                    class="small-btn"
                    onclick="speakWord(${word.id})"
                >
                    <i class="fa-solid fa-volume-high"></i>
                    گوێگرتن
                </button>

                <button
                    class="small-btn learned-btn ${learned ? "learned" : ""}"
                    onclick="markLearned(${word.id})"
                >
                    <i class="fa-solid ${
                        learned
                            ? "fa-check-double"
                            : "fa-check"
                    }"></i>

                    ${
                        learned
                            ? "فێربووم"
                            : "فێربووم"
                    }

                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    const index =
        state.favorites.indexOf(id);


    if (index === -1) {

        state.favorites.push(id);

        showToast(
            "وشەکە خرایە دڵخوازەکان."
        );

    } else {

        state.favorites.splice(index, 1);

        showToast(
            "وشەکە لە دڵخوازەکان لابرا."
        );
    }


    saveState();

    renderCurrentSection();

    updateGlobalStats();
}


window.toggleFavorite =
    toggleFavorite;


function renderFavorites() {

    const favoriteWords =
        VOCABULARY.filter(
            word =>
                state.favorites.includes(
                    word.id
                )
        );


    appContent.innerHTML = `

        <div class="page-header">
            <h2>دڵخوازەکان ❤️</h2>
            <p>
                ئەو وشانەی هەڵتگرتوون لێرە دەبینیت.
            </p>
        </div>


        ${
            favoriteWords.length
                ? `
                    <div class="vocab-grid">

                        ${favoriteWords
                            .map(renderWordCard)
                            .join("")}

                    </div>
                `
                : `
                    <div class="empty-state">

                        <i class="fa-regular fa-heart"></i>

                        <h3>
                            هێشتا هیچ وشەیەکت نییە
                        </h3>

                        <p>
                            لە بەشی وشەکان دڵی وشەکە بکە بۆ هەڵگرتنی.
                        </p>

                    </div>
                `
        }
    `;
}


/* =========================================================
   LEARN WORD
========================================================= */

function markLearned(id) {

    if (!state.learned.includes(id)) {

        state.learned.push(id);

        state.xp += 10;

        checkDailyStreak();

        saveState();

        showToast(
            "+10 XP — وشەکە فێربوویت!"
        );

    } else {

        showToast(
            "ئەم وشەیە پێشتر فێربوویت."
        );
    }


    renderCurrentSection();

    updateGlobalStats();
}


window.markLearned =
    markLearned;


/* =========================================================
   SPEECH
========================================================= */

function speakWord(id) {

    const word =
        VOCABULARY.find(
            item => item.id === id
        );


    if (!word) return;


    if (!("speechSynthesis" in window)) {

        showToast(
            "Browser ـەکەت Speech Synthesis پشتگیری ناکات.",
            "error"
        );

        return;
    }


    const text =
        state.selectedLanguage === "english"
            ? word.english
            : word.korean;


    const utterance =
        new SpeechSynthesisUtterance(text);


    utterance.lang =
        state.selectedLanguage === "english"
            ? "en-US"
            : "ko-KR";


    utterance.rate = 0.85;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(
        utterance
    );
}


window.speakWord =
    speakWord;


/* =========================================================
   QUIZ
========================================================= */

function getRandomQuizWord() {

    const available =
        VOCABULARY.filter(
            word =>
                !state.quizUsed.includes(
                    word.id
                )
        );


    if (!available.length) {

        state.quizUsed = [];

        saveState();

        return VOCABULARY[
            Math.floor(
                Math.random() *
                VOCABULARY.length
            )
        ];
    }


    return available[
        Math.floor(
            Math.random() *
            available.length
        )
    ];
}


function renderQuiz() {

    quizCurrentWord =
        getRandomQuizWord();


    state.quizUsed.push(
        quizCurrentWord.id
    );

    saveState();


    const correct =
        state.selectedLanguage === "english"
            ? quizCurrentWord.english
            : quizCurrentWord.korean;


    const wrongWords =
        VOCABULARY
            .filter(
                word =>
                    word.id !==
                    quizCurrentWord.id
            )
            .sort(
                () => Math.random() - 0.5
            )
            .slice(0, 3);


    quizOptions = [
        correct,
        ...wrongWords.map(
            word =>
                state.selectedLanguage === "english"
                    ? word.english
                    : word.korean
        )
    ].sort(
        () => Math.random() - 0.5
    );


    const questionText =
        state.selectedLanguage === "english"
            ? quizCurrentWord.korean
            : quizCurrentWord.english;


    appContent.innerHTML = `

        <div class="page-header">
            <h2>Quiz 🧠</h2>
            <p>
                وەڵامی دروست هەڵبژێرە و XP بەدەست بهێنە.
            </p>
        </div>


        <div class="quiz-container">

            <div class="quiz-card">

                <div class="quiz-progress">
                    <span style="width: 100%"></span>
                </div>


                <div class="quiz-question">

                    <span class="label">
                        ئەم وشەیە چییە؟
                    </span>

                    <h2>
                        ${escapeHTML(questionText)}
                    </h2>

                    <p>
                        ${escapeHTML(
                            quizCurrentWord.kurdish
                        )}
                    </p>

                </div>


                <div class="quiz-options">

                    ${quizOptions.map(
                        option => `
                            <button
                                class="quiz-option"
                                data-answer="${escapeHTML(option)}"
                            >
                                ${escapeHTML(option)}
                            </button>
                        `
                    ).join("")}

                </div>


                <div
                    id="quizResult"
                    class="quiz-result"
                ></div>

            </div>

        </div>
    `;


    document
        .querySelectorAll(".quiz-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => answerQuiz(
                    button.dataset.answer,
                    button
                )
            );

        });
}


function answerQuiz(answer, clickedButton) {

    const correct =
        state.selectedLanguage === "english"
            ? quizCurrentWord.english
            : quizCurrentWord.korean;


    const allButtons =
        document.querySelectorAll(
            ".quiz-option"
        );


    allButtons.forEach(
        button => {
            button.disabled = true;
        }
    );


    state.quizAnswered += 1;


    const result =
        document.getElementById(
            "quizResult"
        );


    if (answer === correct) {

        clickedButton.classList.add(
            "correct"
        );

        state.quizCorrect += 1;

        state.xp += 15;

        result.innerHTML =
            "🎉 ڕاستە! +15 XP";

        result.style.color =
            "#86efac";

        showToast(
            "+15 XP — وەڵامی دروست!"
        );

    } else {

        clickedButton.classList.add(
            "wrong"
        );

        allButtons.forEach(
            button => {

                if (
                    button.dataset.answer ===
                    correct
                ) {

                    button.classList.add(
                        "correct"
                    );
                }

            }
        );

        result.innerHTML =
            `❌ هەڵەیە. وەڵامی دروست: ${escapeHTML(correct)}`;

        result.style.color =
            "#fca5a5";

        showToast(
            "وەڵامەکە دروست نەبوو.",
            "error"
        );
    }


    saveState();

    updateGlobalStats();


    setTimeout(() => {

        if (
            state.currentSection ===
            "quiz"
        ) {

            renderQuiz();
        }

    }, 1500);
}


/* =========================================================
   WRITING
========================================================= */

function getRandomWritingWord() {

    return VOCABULARY[
        Math.floor(
            Math.random() *
            VOCABULARY.length
        )
    ];
}


function renderWriting() {

    writingCurrentWord =
        getRandomWritingWord();


    const target =
        state.selectedLanguage === "english"
            ? writingCurrentWord.english
            : writingCurrentWord.korean;


    const secondary =
        state.selectedLanguage === "english"
            ? writingCurrentWord.korean
            : writingCurrentWord.english;


    appContent.innerHTML = `

        <div class="page-header">
            <h2>نووسین ✍️</h2>
            <p>
                وشەکە بە زمانەکەی خۆی بنووسە.
            </p>
        </div>


        <div class="writing-card">

            <div class="writing-target">

                <small>
                    وشەی ئامانج
                </small>

                <h2>
                    ${escapeHTML(
                        writingCurrentWord.kurdish
                    )}
                </h2>

                <p>
                    ${
                        state.selectedLanguage === "english"
                            ? "English"
                            : "Korean"
                    }
                </p>

            </div>


            <div class="input-group">

                <label>
                    وەڵامەکەت بنووسە
                </label>

                <textarea
                    id="writingInput"
                    class="writing-textarea"
                    placeholder="لێرە بنووسە..."
                ></textarea>

            </div>


            <div class="writing-actions">

                <button
                    id="checkWritingBtn"
                    class="primary-btn"
                >
                    <i class="fa-solid fa-check"></i>
                    پشکنین
                </button>

                <button
                    id="newWritingBtn"
                    class="secondary-btn"
                >
                    <i class="fa-solid fa-rotate"></i>
                    وشەی نوێ
                </button>

            </div>


            <div
                id="writingResult"
                class="quiz-result"
            ></div>

        </div>
    `;


    document
        .getElementById("checkWritingBtn")
        .addEventListener(
            "click",
            checkWriting
        );


    document
        .getElementById("newWritingBtn")
        .addEventListener(
            "click",
            renderWriting
        );
}


function checkWriting() {

    const input =
        document.getElementById(
            "writingInput"
        );


    const result =
        document.getElementById(
            "writingResult"
        );


    if (!input || !result) {
        return;
    }


    const userAnswer =
        input.value
            .trim()
            .toLowerCase();


    const correct =
        (
            state.selectedLanguage === "english"
                ? writingCurrentWord.english
                : writingCurrentWord.korean
        )
        .trim()
        .toLowerCase();


    if (!userAnswer) {

        result.textContent =
            "تکایە وەڵامێک بنووسە.";

        result.style.color =
            "#fbbf24";

        return;
    }


    if (userAnswer === correct) {

        state.xp += 20;

        state.quizCorrect += 1;

        result.textContent =
            "🎉 زۆر باشە! +20 XP";

        result.style.color =
            "#86efac";

        showToast(
            "+20 XP — نووسینەکەت دروستە!"
        );

    } else {

        result.innerHTML =
            `❌ هەڵەیە. وشەی دروست: ${escapeHTML(
                correct
            )}`;

        result.style.color =
            "#fca5a5";

        showToast(
            "هەوڵێکی تر بدەرەوە.",
            "error"
        );
    }


    saveState();

    updateGlobalStats();
}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const learned =
        state.learned.length;

    const favorites =
        state.favorites.length;

    const answered =
        state.quizAnswered;

    const correct =
        state.quizCorrect;

    const accuracy =
        answered
            ? Math.round(
                correct /
                answered *
                100
            )
            : 0;

    const vocabularyProgress =
        Math.round(
            learned /
            VOCABULARY.length *
            100
        );


    appContent.innerHTML = `

        <div class="page-header">
            <h2>پێشکەوتن 📈</h2>
            <p>
                ئامارەکانی فێربوونەکەت لێرە ببینە.
            </p>
        </div>


        <div class="progress-grid">

            <div class="progress-card">

                <h3>وشە فێربووەکان</h3>

                <div class="progress-number">
                    ${learned}
                </div>

                <p>
                    لە ${VOCABULARY.length} وشە
                </p>

                <div class="progress-bar">
                    <span
                        style="width:${vocabularyProgress}%"
                    ></span>
                </div>

            </div>


            <div class="progress-card">

                <h3>Quiz</h3>

                <div class="progress-number">
                    ${accuracy}%
                </div>

                <p>
                    ${correct}/${answered}
                    وەڵامی دروست
                </p>

                <div class="progress-bar">
                    <span
                        style="width:${accuracy}%"
                    ></span>
                </div>

            </div>


            <div class="progress-card">

                <h3>XP</h3>

                <div class="progress-number">
                    ${state.xp}
                </div>

                <p>
                    کۆی XP ـەکانت
                </p>

                <div class="progress-bar">
                    <span
                        style="width:${Math.min(
                            100,
                            state.xp % 100
                        )}%"
                    ></span>
                </div>

            </div>


            <div class="progress-card">

                <h3>Streak</h3>

                <div class="progress-number">
                    ${state.streak}
                </div>

                <p>
                    ڕۆژی بەردەوام
                </p>

            </div>


            <div class="progress-card">

                <h3>دڵخوازەکان</h3>

                <div class="progress-number">
                    ${favorites}
                </div>

                <p>
                    وشەی هەڵگیراو
                </p>

            </div>


            <div class="progress-card">

                <h3>ئامانجی ڕۆژانە</h3>

                <div class="progress-number">
                    ${state.dailyGoal}
                </div>

                <p>
                    وشە لە ڕۆژێکدا
                </p>

            </div>

        </div>
    `;
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

    const achievements = [

        {
            icon: "fa-seedling",
            title: "دەستپێک",
            description: "یەک وشە فێربە",
            unlocked:
                state.learned.length >= 1
        },

        {
            icon: "fa-book",
            title: "خوێندکار",
            description: "10 وشە فێربە",
            unlocked:
                state.learned.length >= 10
        },

        {
            icon: "fa-fire",
            title: "بەردەوام",
            description: "3 ڕۆژ Streak",
            unlocked:
                state.streak >= 3
        },

        {
            icon: "fa-star",
            title: "ستارە",
            description: "100 XP بەدەست بهێنە",
            unlocked:
                state.xp >= 100
        },

        {
            icon: "fa-brain",
            title: "زیرەک",
            description: "10 Quiz وەڵام بدەرەوە",
            unlocked:
                state.quizAnswered >= 10
        },

        {
            icon: "fa-trophy",
            title: "مامۆستا",
            description: "50 وشە فێربە",
            unlocked:
                state.learned.length >= 50
        }

    ];


    appContent.innerHTML = `

        <div class="page-header">
            <h2>دەستکەوتەکان 🏆</h2>
            <p>
                بەردەوام بە و دەستکەوتەکانت بکەرەوە.
            </p>
        </div>


        <div class="achievement-grid">

            ${achievements.map(
                item => `

                    <div
                        class="achievement-card ${
                            item.unlocked
                                ? "unlocked"
                                : ""
                        }"
                    >

                        <div class="achievement-icon">

                            <i class="fa-solid ${
                                item.icon
                            }"></i>

                        </div>

                        <h3>
                            ${escapeHTML(
                                item.title
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                item.description
                            )}
                        </p>

                    </div>

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   SETTINGS
========================================================= */

function renderSettings() {

    const dark =
        state.darkMode;


    appContent.innerHTML = `

        <div class="page-header">
            <h2>ڕێکخستنەکان ⚙️</h2>
            <p>
                LinguaGlass بەپێی پێویستی خۆت ڕێکبخە.
            </p>
        </div>


        <div class="settings-list">


            <div class="settings-item">

                <div class="settings-info">

                    <div class="settings-icon">
                        <i class="fa-solid fa-moon"></i>
                    </div>

                    <div>

                        <h3>
                            Dark Mode
                        </h3>

                        <p>
                            ڕووناکی و تاریکی ئەپەکە
                        </p>

                    </div>

                </div>


                <button
                    id="settingsThemeToggle"
                    class="toggle ${
                        dark ? "active" : ""
                    }"
                >

                    <span></span>

                </button>

            </div>


            <div class="settings-item">

                <div class="settings-info">

                    <div class="settings-icon">
                        <i class="fa-solid fa-bullseye"></i>
                    </div>

                    <div>

                        <h3>
                            ئامانجی ڕۆژانە
                        </h3>

                        <p>
                            ژمارەی وشەکان لە ڕۆژێکدا
                        </p>

                    </div>

                </div>


                <select
                    id="dailyGoalSelect"
                    class="category-select"
                >

                    ${[5,10,15,20,30].map(
                        value => `
                            <option
                                value="${value}"
                                ${
                                    state.dailyGoal === value
                                        ? "selected"
                                        : ""
                                }
                            >
                                ${value} وشە
                            </option>
                        `
                    ).join("")}

                </select>

            </div>


            <div class="settings-item">

                <div class="settings-info">

                    <div class="settings-icon">
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div>

                        <h3>
                            هەژمار
                        </h3>

                        <p>
                            ${escapeHTML(
                                currentUser?.email || ""
                            )}
                        </p>

                    </div>

                </div>

            </div>


            <div class="settings-item">

                <div class="settings-info">

                    <div class="settings-icon">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </div>

                    <div>

                        <h3>
                            دەرچوون
                        </h3>

                        <p>
                            لە هەژمارەکەت دەرچۆ
                        </p>

                    </div>

                </div>


                <button
                    id="settingsLogout"
                    class="secondary-btn"
                >
                    دەرچوون
                </button>

            </div>


        </div>
    `;


    document
        .getElementById("settingsThemeToggle")
        .addEventListener(
            "click",
            toggleTheme
        );


    document
        .getElementById("dailyGoalSelect")
        .addEventListener(
            "change",
            event => {

                state.dailyGoal =
                    Number(
                        event.target.value
                    );

                saveState();

                showToast(
                    "ئامانجی ڕۆژانە نوێکرایەوە."
                );

                renderSettings();
            }
        );


    document
        .getElementById("settingsLogout")
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "logoutBtn"
                    )
                    .click();

            }
        );
}


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

    document.body.classList.toggle(
        "light-mode",
        !state.darkMode
    );


    const icon =
        document.querySelector(
            "#themeBtn i"
        );


    if (icon) {

        icon.className =
            state.darkMode
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";
    }
}


function toggleTheme() {

    state.darkMode =
        !state.darkMode;

    saveState();

    applyTheme();

    if (
        state.currentSection ===
        "settings"
    ) {

        renderSettings();
    }
}


document
    .getElementById("themeBtn")
    .addEventListener(
        "click",
        toggleTheme
    );


/* =========================================================
   GLOBAL STATS
========================================================= */

function updateGlobalStats() {

    const xp =
        document.getElementById(
            "globalXP"
        );

    const streak =
        document.getElementById(
            "globalStreak"
        );

    const sidebarXP =
        document.getElementById(
            "sidebarXP"
        );

    const sidebarXPBar =
        document.getElementById(
            "sidebarXPBar"
        );


    if (xp) {
        xp.textContent = state.xp;
    }

    if (streak) {
        streak.textContent = state.streak;
    }

    if (sidebarXP) {
        sidebarXP.textContent =
            state.xp;
    }

    if (sidebarXPBar) {

        const percentage =
            Math.min(
                100,
                state.xp % 100
            );

        sidebarXPBar.style.width =
            `${percentage}%`;
    }
}


/* =========================================================
   MOBILE MENU
========================================================= */

function openMobileMenu() {

    document
        .getElementById("sidebar")
        .classList.add("open");

    document
        .getElementById("mobileOverlay")
        .classList.add("show");
}


function closeMobileMenu() {

    document
        .getElementById("sidebar")
        .classList.remove("open");

    document
        .getElementById("mobileOverlay")
        .classList.remove("show");
}


document
    .getElementById("mobileMenuBtn")
    .addEventListener(
        "click",
        openMobileMenu
    );


document
    .getElementById("mobileOverlay")
    .addEventListener(
        "click",
        closeMobileMenu
    );


/* =========================================================
   PASSWORD SHOW / HIDE
========================================================= */

document
    .querySelectorAll(".password-toggle")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.target
                    );


                if (!target) {
                    return;
                }


                if (
                    target.type ===
                    "password"
                ) {

                    target.type =
                        "text";

                    button.innerHTML =
                        `<i class="fa-solid fa-eye-slash"></i>`;

                } else {

                    target.type =
                        "password";

                    button.innerHTML =
                        `<i class="fa-solid fa-eye"></i>`;
                }

            }
        );

    });


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        try {

            await checkExistingSession();

        } catch (error) {

            console.error(
                "Initialization error:",
                error
            );

            showAuthScreen();

            setAuthMessage(
                "کێشەیەک لە پەیوەندی بە Supabase هەیە.",
                "error"
            );
        }

    }
);


/* =========================================================
   GLOBAL APP OBJECT
========================================================= */

window.LinguaGlass = {

    getState() {
        return state;
    },

    getUser() {
        return currentUser;
    },

    vocabulary: VOCABULARY,

    logout() {

        document
            .getElementById("logoutBtn")
            .click();
    },

    navigate(section) {

        state.currentSection =
            section;

        saveState();

        renderCurrentSection();
    }

};

// =========================================
// SOCIAL MEDIA LINKS
// =========================================

const SOCIAL_LINKS = [
    {
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        description: "ئینستاگرامی ئێمە",
        url: "https://instagram.com/kak_adolf_surchi"
    },
    {
        name: "TikTok",
        icon: "fa-brands fa-tiktok",
        description: "TikTok ـی ئێمە",
        url: "https://tiktok.com/@kaka_adolf"
    },
    {
        name: "Snapchat",
        icon: "fa-brands fa-snapchat",
        description: "Snapchat ـی ئێمە",
        url: "https://snapchat.com/add/kaka-adolf"
    },
    {
        name: "Telegram",
        icon: "fa-brands fa-telegram",
        description: "کەناڵی Telegram ـی ئێمە",
        url: "https://t.me/kaka_adolf"
    },
    {
        name: "Twitter",
        icon: "fa-brands fa-twitter",
        description: "Twitter ی ئێمە",
        url: "https://twitter.com/sisayayub"
    }
];

function renderSocialSection() {
    return `
        <section class="social-section">

            <div class="social-header">
                <div>
                    <span class="social-badge">
                        <i class="fa-solid fa-link"></i>
                        پەیوەندی
                    </span>

                    <h1>سۆشیال میدیا</h1>

                    <p>
                        لە ڕێگەی ئەم لینکەکانەوە لەگەڵ ئێمە بەستەر بکە.
                    </p>
                </div>

                <div class="social-header-icon">
                    <i class="fa-solid fa-share-nodes"></i>
                </div>
            </div>

            <div class="social-grid">
                ${SOCIAL_LINKS.map(link => `
                    <div class="social-card">

                        <div class="social-card-icon">
                            <i class="${escapeHTML(link.icon)}"></i>
                        </div>

                        <div class="social-card-content">
                            <h3>${escapeHTML(link.name)}</h3>
                            <p>${escapeHTML(link.description)}</p>
                        </div>

                        <a
                            class="social-open-btn"
                            href="${escapeHTML(link.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>کردنەوە</span>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>

                    </div>
                `).join("")}
            </div>

        </section>
    `;
}