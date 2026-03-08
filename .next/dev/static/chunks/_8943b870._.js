(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/priceLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//経験と評価を「円」に変換する関数
__turbopack_context__.s([
    "calculatePrice",
    ()=>calculatePrice
]);
const calculatePrice = (experienceYears, rating)=>{
    const basePrice = 5000; // 基本料金
    const experienceAdd = experienceYears * 200; // 1年につき200円アップ
    const ratingAdd = Math.round(rating * 500); // 星1つにつき500円アップ
    return basePrice + experienceAdd + ratingAdd;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/therapistData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allPTs",
    ()=>allPTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$priceLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/priceLogic.ts [app-client] (ecmascript)"); // さっき作った計算式をインポート
;
// 1. 提供された50人の元データ
const rawPTs = [
    {
        id: 1,
        name: "田中 健太郎",
        specialty: "運動器",
        experienceYears: 6,
        skills: [
            "腰の痛み",
            "膝の痛み"
        ],
        photo: "https://i.pravatar.cc/150?u=1",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.5902,
        lng: 130.4017
    },
    {
        id: 2,
        name: "佐藤 美咲",
        specialty: "神経系",
        experienceYears: 4,
        skills: [
            "脳卒中後遺症",
            "パーキンソン病"
        ],
        photo: "https://i.pravatar.cc/150?u=2",
        message: "痛みを取り除くだけでなく、再発しない身体作りをサポートします。",
        lat: 33.5850,
        lng: 130.4200
    },
    {
        id: 3,
        name: "鈴木 大輔",
        specialty: "呼吸器",
        experienceYears: 8,
        skills: [
            "COPD",
            "喘息"
        ],
        photo: "https://i.pravatar.cc/150?u=3",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5700,
        lng: 130.3800
    },
    {
        id: 4,
        name: "高橋 由美子",
        specialty: "小児",
        experienceYears: 3,
        skills: [
            "発達障害",
            "筋ジストロフィー"
        ],
        photo: "https://i.pravatar.cc/150?u=4",
        message: "患者様の『また歩きたい』という気持ちに寄り添ったリハビリを心がけています。",
        lat: 33.6000,
        lng: 130.4100
    },
    {
        id: 5,
        name: "伊藤 翔太",
        specialty: "運動器",
        experienceYears: 5,
        skills: [
            "肩の痛み",
            "膝の痛み"
        ],
        photo: "https://i.pravatar.cc/150?u=5",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.5950,
        lng: 130.3900
    },
    {
        id: 6,
        name: "渡辺 彩香",
        specialty: "神経系",
        experienceYears: 7,
        skills: [
            "脳卒中後遺症",
            "多発性硬化症"
        ],
        photo: "https://i.pravatar.cc/150?u=6",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5800,
        lng: 130.4300
    },
    {
        id: 7,
        name: "山本 裕子",
        specialty: "呼吸器",
        experienceYears: 2,
        skills: [
            "肺炎",
            "COPD"
        ],
        photo: "https://i.pravatar.cc/150?u=7",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5600,
        lng: 130.4000
    },
    {
        id: 8,
        name: "中村 亮太",
        specialty: "小児",
        experienceYears: 9,
        skills: [
            "発達障害",
            "脳性麻痺"
        ],
        photo: "https://i.pravatar.cc/150?u=8",
        message: "最新のエビデンスに基づき、効率的なトレーニングメニューを提案します。",
        lat: 33.6100,
        lng: 130.3700
    },
    {
        id: 9,
        name: "小林 真奈美",
        specialty: "運動器",
        experienceYears: 4,
        skills: [
            "腰の痛み",
            "肩の痛み"
        ],
        photo: "https://i.pravatar.cc/150?u=9",
        message: "患者様の『また歩きたい』という気持ちに寄り添ったリハビリを心がけています。",
        lat: 33.5750,
        lng: 130.4150
    },
    {
        id: 10,
        name: "加藤 大輝",
        specialty: "神経系",
        experienceYears: 6,
        skills: [
            "パーキンソン病",
            "脳卒中後遺症"
        ],
        photo: "https://i.pravatar.cc/150?u=10",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5880,
        lng: 130.3850
    },
    {
        id: 11,
        name: "吉田 奈々",
        specialty: "呼吸器",
        experienceYears: 5,
        skills: [
            "喘息",
            "COPD"
        ],
        photo: "https://i.pravatar.cc/150?u=11",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5920,
        lng: 130.4250
    },
    {
        id: 12,
        name: "佐々木 翔",
        specialty: "小児",
        experienceYears: 3,
        skills: [
            "筋ジストロフィー",
            "発達障害"
        ],
        photo: "https://i.pravatar.cc/150?u=12",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.5650,
        lng: 130.3950
    },
    {
        id: 13,
        name: "山田 花子",
        specialty: "運動器",
        experienceYears: 7,
        skills: [
            "膝の痛み",
            "腰の痛み"
        ],
        photo: "https://i.pravatar.cc/150?u=13",
        message: "最新のエビデンスに基づき、効率的なトレーニングメニューを提案します。",
        lat: 33.6050,
        lng: 130.4050
    },
    {
        id: 14,
        name: "松本 健一",
        specialty: "神経系",
        experienceYears: 4,
        skills: [
            "多発性硬化症",
            "脳卒中後遺症"
        ],
        photo: "https://i.pravatar.cc/150?u=14",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.5820,
        lng: 130.4400
    },
    {
        id: 15,
        name: "井上 美咲",
        specialty: "呼吸器",
        experienceYears: 8,
        skills: [
            "COPD",
            "肺炎"
        ],
        photo: "https://i.pravatar.cc/150?u=15",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.5550,
        lng: 130.4100
    },
    {
        id: 16,
        name: "木村 大輔",
        specialty: "小児",
        experienceYears: 2,
        skills: [
            "脳性麻痺",
            "発達障害"
        ],
        photo: "https://i.pravatar.cc/150?u=16",
        message: "長年の臨床経験を活かし、難しい症例にも粘り強く向き合います",
        lat: 33.6150,
        lng: 130.3800
    },
    {
        id: 17,
        name: "林 由美子",
        specialty: "運動器",
        experienceYears: 5,
        skills: [
            "肩の痛み",
            "膝の痛み"
        ],
        photo: "https://i.pravatar.cc/150?u=17",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.5780,
        lng: 130.4080
    },
    {
        id: 18,
        name: "清水 翔太",
        specialty: "神経系",
        experienceYears: 6,
        skills: [
            "脳卒中後遺症",
            "パーキンソン病"
        ],
        photo: "https://i.pravatar.cc/150?u=18",
        message: "患者様の『また歩きたい』という気持ちに寄り添ったリハビリを心がけています。",
        lat: 33.5980,
        lng: 130.4180
    },
    {
        id: 19,
        name: "斎藤 彩香",
        specialty: "呼吸器",
        experienceYears: 3,
        skills: [
            "喘息",
            "COPD"
        ],
        photo: "https://i.pravatar.cc/150?u=19",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.5830,
        lng: 130.3930
    },
    {
        id: 20,
        name: "遠藤 裕子",
        specialty: "小児",
        experienceYears: 9,
        skills: [
            "発達障害",
            "筋ジストロフィー"
        ],
        photo: "https://i.pravatar.cc/150?u=20",
        message: "長年の臨床経験を活かし、難しい症例にも粘り強く向き合います",
        lat: 33.6080,
        lng: 130.4320
    },
    {
        id: 21,
        name: "松村 邦洋",
        specialty: "中枢神経",
        experienceYears: 1,
        skills: [
            "脳梗塞後",
            "麻痺改善",
            "歩行リハビリ"
        ],
        photo: "https://i.pravatar.cc/150?u=21",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.585,
        lng: 130.395
    },
    {
        id: 22,
        name: "西村 雅彦",
        specialty: "中枢神経",
        experienceYears: 18,
        skills: [
            "パーキンソン病",
            "神経難病",
            "姿勢調整"
        ],
        photo: "https://i.pravatar.cc/150?u=22",
        message: "痛みを取り除くだけでなく、再発しない身体作りをサポートします。",
        lat: 33.575,
        lng: 130.405
    },
    {
        id: 23,
        name: "阿部 寛",
        specialty: "運動器",
        experienceYears: 12,
        skills: [
            "膝の痛み",
            "腰痛",
            "股関節痛"
        ],
        photo: "https://i.pravatar.cc/150?u=23",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.595,
        lng: 130.415
    },
    {
        id: 24,
        name: "森田 剛",
        specialty: "運動器",
        experienceYears: 4,
        skills: [
            "捻挫",
            "肉離れ",
            "スポーツ外傷"
        ],
        photo: "https://i.pravatar.cc/150?u=24",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.565,
        lng: 130.425
    },
    {
        id: 25,
        name: "藤田 恵子",
        specialty: "運動器",
        experienceYears: 25,
        skills: [
            "慢性腰痛",
            "五十肩",
            "変形性膝関節症"
        ],
        photo: "https://i.pravatar.cc/150?u=25",
        message: "最新のエビデンスに基づき、効率的なトレーニングメニューを提案します。",
        lat: 33.605,
        lng: 130.385
    },
    {
        id: 26,
        name: "竹内 涼真",
        specialty: "中枢神経",
        experienceYears: 7,
        skills: [
            "脳卒中後",
            "リハビリテーション",
            "運動療法"
        ],
        photo: "https://i.pravatar.cc/150?u=26",
        message: "痛みを取り除くだけでなく、再発しない身体作りをサポートします。",
        lat: 33.590,
        lng: 130.435
    },
    {
        id: 27,
        name: "吉岡 美穂",
        specialty: "運動器",
        experienceYears: 10,
        skills: [
            "スポーツリハビリ",
            "筋力強化",
            "関節可動域改善"
        ],
        photo: "https://i.pravatar.cc/150?u=27",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.580,
        lng: 130.400
    },
    {
        id: 28,
        name: "佐野 史郎",
        specialty: "中枢神経",
        experienceYears: 15,
        skills: [
            "多発性硬化症",
            "神経リハビリ",
            "バランス訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=28",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.570,
        lng: 130.410
    },
    {
        id: 29,
        name: "長谷川 潤",
        specialty: "運動器",
        experienceYears: 3,
        skills: [
            "肩こり",
            "腰痛",
            "姿勢改善"
        ],
        photo: "https://i.pravatar.cc/150?u=29",
        message: "長年の臨床経験を活かし、難しい症例にも粘り強く向き合います",
        lat: 33.600,
        lng: 130.390
    },
    {
        id: 30,
        name: "堀北 真希",
        specialty: "中枢神経",
        experienceYears: 20,
        skills: [
            "脳性麻痺",
            "発達障害",
            "歩行訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=30",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.595,
        lng: 130.420
    },
    {
        id: 31,
        name: "市川 海老蔵",
        specialty: "運動器",
        experienceYears: 14,
        skills: [
            "スポーツ障害",
            "リハビリテーション",
            "筋力回復"
        ],
        photo: "https://i.pravatar.cc/150?u=31",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.585,
        lng: 130.410
    },
    {
        id: 32,
        name: "寺田 海",
        specialty: "中枢神経",
        experienceYears: 9,
        skills: [
            "脳卒中リハビリ",
            "神経回復",
            "運動機能改善"
        ],
        photo: "https://i.pravatar.cc/150?u=32",
        message: "痛みを取り除くだけでなく、再発しない身体作りをサポートします。",
        lat: 33.575,
        lng: 130.390
    },
    {
        id: 33,
        name: "篠原 陽介",
        specialty: "運動器",
        experienceYears: 11,
        skills: [
            "関節痛",
            "筋肉痛",
            "スポーツパフォーマンス向上"
        ],
        photo: "https://i.pravatar.cc/150?u=33",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.605,
        lng: 130.430
    },
    {
        id: 34,
        name: "平本 一郎",
        specialty: "中枢神経",
        experienceYears: 6,
        skills: [
            "パーキンソン病リハビリ",
            "神経機能改善",
            "バランス訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=34",
        message: "最新のエビデンスに基づき、効率的なトレーニングメニューを提案します。",
        lat: 33.565,
        lng: 130.400
    },
    {
        id: 35,
        name: "野田 はじめ",
        specialty: "運動器",
        experienceYears: 8,
        skills: [
            "スポーツリハビリテーション",
            "筋力強化",
            "関節可動域改善"
        ],
        photo: "https://i.pravatar.cc/150?u=35",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.595,
        lng: 130.370
    },
    {
        id: 36,
        name: "松元 謙太",
        specialty: "中枢神経",
        experienceYears: 13,
        skills: [
            "多発性硬化症リハビリ",
            "神経回復",
            "歩行訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=36",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.585,
        lng: 130.440
    },
    {
        id: 37,
        name: "大坪 博子",
        specialty: "運動器",
        experienceYears: 5,
        skills: [
            "慢性腰痛",
            "肩こり",
            "姿勢改善"
        ],
        photo: "https://i.pravatar.cc/150?u=37",
        message: "長年の臨床経験を活かし、難しい症例にも粘り強く向き合います",
        lat: 33.575,
        lng: 130.420
    },
    {
        id: 38,
        name: "北川 景子",
        specialty: "中枢神経",
        experienceYears: 17,
        skills: [
            "脳性麻痺リハビリ",
            "発達障害支援",
            "運動機能改善"
        ],
        photo: "https://i.pravatar.cc/150?u=38",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.615,
        lng: 130.400
    },
    {
        id: 39,
        name: "石川 大勢",
        specialty: "運動器",
        experienceYears: 22,
        skills: [
            "スポーツ障害リハビリ",
            "筋力回復",
            "関節可動域改善"
        ],
        photo: "https://i.pravatar.cc/150?u=39",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.590,
        lng: 130.380
    },
    {
        id: 40,
        name: "岩切 悠斗",
        specialty: "中枢神経",
        experienceYears: 19,
        skills: [
            "脳卒中リハビリテーション",
            "神経機能改善",
            "バランス訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=40",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.580,
        lng: 130.410
    },
    {
        id: 41,
        name: "山田 海斗",
        specialty: "運動器",
        experienceYears: 2,
        skills: [
            "肩の痛み",
            "腰痛",
            "スポーツリハビリ"
        ],
        photo: "https://i.pravatar.cc/150?u=41",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.570,
        lng: 130.400
    },
    {
        id: 42,
        name: "志岐 沙知",
        specialty: "中枢神経",
        experienceYears: 16,
        skills: [
            "パーキンソン病リハビリ",
            "神経回復",
            "歩行訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=42",
        message: "最新のエビデンスに基づき、効率的なトレーニングメニューを提案します。",
        lat: 33.600,
        lng: 130.420
    },
    {
        id: 43,
        name: "新垣 結衣",
        specialty: "運動器",
        experienceYears: 21,
        skills: [
            "慢性腰痛",
            "五十肩",
            "姿勢改善"
        ],
        photo: "https://i.pravatar.cc/150?u=43",
        message: "長年の臨床経験を活かし、難しい症例にも粘り強く向き合います",
        lat: 33.590,
        lng: 130.430
    },
    {
        id: 44,
        name: "松坂 桃李",
        specialty: "中枢神経",
        experienceYears: 12,
        skills: [
            "多発性硬化症リハビリ",
            "神経機能改善",
            "バランス訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=44",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.580,
        lng: 130.390
    },
    {
        id: 45,
        name: "高橋 ありさ",
        specialty: "運動器",
        experienceYears: 4,
        skills: [
            "スポーツリハビリ",
            "筋力強化",
            "関節可動域改善"
        ],
        photo: "https://i.pravatar.cc/150?u=45",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.570,
        lng: 130.380
    },
    {
        id: 46,
        name: "山本 春和",
        specialty: "中枢神経",
        experienceYears: 3,
        skills: [
            "脳卒中後遺症",
            "神経回復",
            "運動機能改善"
        ],
        photo: "https://i.pravatar.cc/150?u=46",
        message: "丁寧なカウンセリングで、生活スタイルに合わせた改善策を見つけます",
        lat: 33.610,
        lng: 130.410
    },
    {
        id: 47,
        name: "中村 美咲",
        specialty: "運動器",
        experienceYears: 15,
        skills: [
            "関節痛",
            "筋肉痛",
            "スポーツパフォーマンス向上"
        ],
        photo: "https://i.pravatar.cc/150?u=47",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.600,
        lng: 130.440
    },
    {
        id: 48,
        name: "都築 花",
        specialty: "中枢神経",
        experienceYears: 7,
        skills: [
            "パーキンソン病リハビリ",
            "神経機能改善",
            "バランス訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=48",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.585,
        lng: 130.405
    },
    {
        id: 49,
        name: "藤原 真也",
        specialty: "運動器",
        experienceYears: 9,
        skills: [
            "スポーツリハビリテーション",
            "筋力強化",
            "関節可動域改善"
        ],
        photo: "https://i.pravatar.cc/150?u=49",
        message: "スポーツ整形外科での勤務経験が豊富です。",
        lat: 33.575,
        lng: 130.395
    },
    {
        id: 50,
        name: "加藤 翔太郎",
        specialty: "中枢神経",
        experienceYears: 1,
        skills: [
            "多発性硬化症リハビリ",
            "神経回復",
            "歩行訓練"
        ],
        photo: "https://i.pravatar.cc/150?u=50",
        message: "在宅リハビリの経験を活かし、生活に寄り添います。",
        lat: 33.595,
        lng: 130.415
    }
];
const allPTs = rawPTs.map((pt)=>{
    // 3.8点 〜 5.0点 の間でランダムな評価を生成（極端に低い人が出ないように調整）
    const randomRating = Math.round((3.8 + Math.random() * 1.2) * 10) / 10;
    // 生成した評価と経験年数から料金を計算
    const calculatedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$priceLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePrice"])(pt.experienceYears, randomRating);
    return {
        ...pt,
        rating: randomRating,
        price: calculatedPrice
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/matchScore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//PTのスキルと利用者の症状一致したとき加算方式でマッチングさせる、位置情報も計算に含む
__turbopack_context__.s([
    "calculateMatchScore",
    ()=>calculateMatchScore
]);
const calculateMatchScore = (pt, user, userLat, userLng // 追加：利用者の今の経度
)=>{
    let score = 0;
    // ① 既存ロジック：症状の一致（5点）
    if (pt.skills.includes(user.symptom)) {
        score += 5;
    }
    // ② 既存ロジック：専門分野の一致（4点）
    if (user.symptom === "膝の痛み" && pt.specialty === "運動器") {
        score += 4;
    }
    // ③ 既存ロジック：経験年数の一致（3点）
    if (user.targetExperience === "5年以上" && pt.experienceYears >= 5) {
        score += 3;
    } else if (user.targetExperience === "3~5年" && pt.experienceYears >= 3 && pt.experienceYears < 5) {
        score += 3;
    }
    // ④ 【追加分】：距離による加点（5点満点）
    // 解説：もし位置情報が取れていれば、距離を計算して近いほど加点します
    if (userLat !== undefined && userLng !== undefined && pt.lat && pt.lng) {
        const distance = Math.sqrt(Math.pow(pt.lat - userLat, 2) + Math.pow(pt.lng - userLng, 2));
        if (distance < 0.05) {
            score += 5;
        } else if (distance < 0.1) {
            score += 2;
        }
    }
    return score;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$therapistData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/therapistData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matchScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/matchScore.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/Map'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
//結果画面
"use client";
;
;
;
;
;
function ResultsPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // 画面遷移用
    const symptom = searchParams.get('symptom') || "";
    const expLimit = parseInt(searchParams.get('experience') || "0");
    const [sortType, setSortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("score");
    const [selectedPT, setSelectedPT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const userCondition = {
        symptom,
        targetExperience: expLimit.toString()
    };
    // 並び替えとフィルタリング
    const displayList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResultsPage.useMemo[displayList]": ()=>{
            let list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$therapistData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allPTs"].filter({
                "ResultsPage.useMemo[displayList].list": (pt)=>pt.experienceYears >= expLimit
            }["ResultsPage.useMemo[displayList].list"]);
            const listWithScore = list.map({
                "ResultsPage.useMemo[displayList].listWithScore": (pt)=>({
                        ...pt,
                        matchScore: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matchScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateMatchScore"])(pt, userCondition, 33.5902, 130.4017)
                    })
            }["ResultsPage.useMemo[displayList].listWithScore"]);
            switch(sortType){
                case "score":
                    return listWithScore.sort({
                        "ResultsPage.useMemo[displayList]": (a, b)=>b.matchScore - a.matchScore
                    }["ResultsPage.useMemo[displayList]"]);
                case "rating":
                    return listWithScore.sort({
                        "ResultsPage.useMemo[displayList]": (a, b)=>b.rating - a.rating
                    }["ResultsPage.useMemo[displayList]"]);
                case "price_low":
                    return listWithScore.sort({
                        "ResultsPage.useMemo[displayList]": (a, b)=>a.price - b.price
                    }["ResultsPage.useMemo[displayList]"]);
                case "price_high":
                    return listWithScore.sort({
                        "ResultsPage.useMemo[displayList]": (a, b)=>b.price - a.price
                    }["ResultsPage.useMemo[displayList]"]);
                case "exp_long":
                    return listWithScore.sort({
                        "ResultsPage.useMemo[displayList]": (a, b)=>b.experienceYears - a.experienceYears
                    }["ResultsPage.useMemo[displayList]"]);
                default:
                    return listWithScore;
            }
        }
    }["ResultsPage.useMemo[displayList]"], [
        sortType,
        symptom,
        expLimit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#f8f9fa"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    padding: "20px 40px",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: "20px",
                                    color: "#333"
                                },
                                children: "セラピスト検索結果"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: "14px",
                                    color: "#666"
                                },
                                children: [
                                    "「",
                                    symptom,
                                    "」に最適な条件を表示中"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: {
                            padding: "8px 12px",
                            borderRadius: "8px",
                            border: "1px solid #ddd"
                        },
                        value: sortType,
                        onChange: (e)=>setSortType(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "score",
                                children: "おすすめ順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rating",
                                children: "評価が高い順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price_low",
                                children: "料金が安い順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "50%",
                            overflowY: "auto",
                            padding: "20px 40px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px"
                            },
                            children: displayList.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedPT(pt),
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid #ddd",
                                        padding: "20px",
                                        borderRadius: "15px",
                                        backgroundColor: "#fff",
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: pt.photo,
                                            alt: pt.name,
                                            style: {
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                marginRight: "15px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: 0
                                                    },
                                                    children: pt.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: "14px",
                                                        color: "#666"
                                                    },
                                                    children: [
                                                        pt.specialty,
                                                        " / 経験",
                                                        pt.experienceYears,
                                                        "年"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "#0070f3"
                                                    },
                                                    children: [
                                                        "¥",
                                                        pt.price.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, pt.id, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "50%",
                            position: "relative"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Map, {
                            pts: displayList,
                            onMarkerClick: (pt)=>setSelectedPT(pt)
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            selectedPT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "#fff",
                        width: "400px",
                        borderRadius: "20px",
                        padding: "30px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedPT.photo,
                            style: {
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 85,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: selectedPT.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 86,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: "left",
                                fontSize: "14px",
                                color: "#555"
                            },
                            children: selectedPT.message
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 87,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push(`/reserve/${selectedPT.id}`),
                            style: {
                                width: "100%",
                                padding: "15px",
                                backgroundColor: "#0070f3",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                marginTop: "20px"
                            },
                            children: "予約日時を選択する"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 90,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedPT(null),
                            style: {
                                marginTop: "10px",
                                color: "#999",
                                background: "none",
                                border: "none",
                                cursor: "pointer"
                            },
                            children: "閉じる"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 96,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 83,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(ResultsPage, "D8TQEjQS4fu/IftrT/fiU35ac9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultsPage;
var _c;
__turbopack_context__.k.register(_c, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8943b870._.js.map