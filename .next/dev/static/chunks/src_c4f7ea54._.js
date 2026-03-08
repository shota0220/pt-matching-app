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
"[project]/src/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 解説：Google Mapsなどを使ってPTの位置をピンで表示
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Map({ therapists }) {
    _s();
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        googleMapsApiKey: "YOUR_API_KEY"
    });
    return isLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
        zoom: 10,
        center: {
            lat: 35.68,
            lng: 139.76
        },
        children: therapists.map((tp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: {
                    lat: tp.lat,
                    lng: tp.lng
                }
            }, tp.id, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this) : null;
}
_s(Map, "mLN67oIZdYDfCjxG2Fcvbwz7Mfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"]
    ];
});
_c = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/results/page.tsx'\n\nExpected '(', got '<eof>'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_c4f7ea54._.js.map