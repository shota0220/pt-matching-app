import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const specialties = [
  "腰痛・膝の痛み（運動器）",
  "脳卒中・麻痺（中枢神経）",
  "産前産後・骨盤ケア",
  "スポーツ障害・部活",
  "認知症・認知機能ケア",
  "術後リハビリ・骨折",
  "歩行困難・転倒予防",
];

async function main() {
  console.log("🌱 Seeding database...");

  // 既存データ削除（リレーション順）
  await prisma.review.deleteMany({});
  await prisma.reservation.deleteMany({});
  await prisma.chat.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.matchRequest.deleteMany({});
  await prisma.clinicalRecord.deleteMany({});
  await prisma.therapist.deleteMany({});
  await prisma.user.deleteMany({});

  // -------------------------
  // 100 Users
  // -------------------------
  for (let i = 1; i <= 100; i++) {
    await prisma.user.create({
      data: {
        id: `user_${i}`,
        email: `user${i}@example.com`,
        password: "password",
        name: `ユーザー${i}`,
        gender: i % 2 === 0 ? "male" : "female",
        height: randomInt(150, 180),
        weight: randomInt(50, 80),
        medicalHistory: "特記事項なし",
        symptom: "肩こり",
        address: "福岡市中央区",
      },
    });
  }

  // -------------------------
  // 100 Therapists
  // -------------------------
  for (let i = 1; i <= 100; i++) {
    await prisma.therapist.create({
      data: {
        id: `pt_${i}`,
        email: `pt_${i}@example.com`,
        password: "password",
        name: `セラピスト${i}`,
        specialty: specialties[Math.floor(Math.random() * specialties.length)],
        experience: randomInt(1, 20),
        message: "よろしくお願いします。",
        license: "国家資格",
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&h=400&fit=crop",
        lat: randomFloat(33.55, 33.62),
        lng: randomFloat(130.35, 130.45),
        walletBalance: randomInt(0, 50000),
        rating: randomFloat(3.5, 5.0),
        price: randomInt(4000, 8000),
      },
    });
  }

  // -------------------------
  // Reservation（300件）
  // -------------------------
  for (let i = 1; i <= 300; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.reservation.create({
      data: {
        userId,
        therapistId,
        date: new Date(Date.now() - randomInt(0, 30) * 86400000),
        price: randomInt(4000, 8000),
        status: ["PENDING", "CONFIRMED", "COMPLETED"][randomInt(0, 2)],
      },
    });
  }

  // -------------------------
  // Review（200件）
  // -------------------------
  for (let i = 1; i <= 200; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.review.create({
      data: {
        userId,
        therapistId,
        rating: randomInt(3, 5),
        comment: "とても丁寧な対応でした。",
      },
    });
  }

  // -------------------------
  // Chat（500件）
  // -------------------------
  for (let i = 1; i <= 500; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.chat.create({
      data: {
        userId,
        therapistId,
        message: "よろしくお願いします！",
        sender: Math.random() > 0.5 ? "USER" : "THERAPIST",
      },
    });
  }

  // -------------------------
  // Message（500件）
  // -------------------------
  for (let i = 1; i <= 500; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.message.create({
      data: {
        userId,
        therapistId,
        content: "詳細チャットメッセージです。",
        senderType: Math.random() > 0.5 ? "USER" : "THERAPIST",
      },
    });
  }

  // -------------------------
  // MatchRequest（200件）
  // -------------------------
  for (let i = 1; i <= 200; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.matchRequest.create({
      data: {
        userId,
        therapistId,
        status: ["PENDING", "APPROVED", "REJECTED"][randomInt(0, 2)],
        message: "マッチングを希望します。",
      },
    });
  }

  // -------------------------
  // ClinicalRecord（200件）
  // -------------------------
  for (let i = 1; i <= 200; i++) {
    const userId = `user_${randomInt(1, 100)}`;
    const therapistId = `pt_${randomInt(1, 100)}`;

    await prisma.clinicalRecord.create({
      data: {
        userId,
        therapistId,
        subjective: "膝の痛みが続いています。",
        objective: "歩行時に軽度の跛行あり。",
        assessment: "大腿四頭筋の筋力低下が疑われます。",
        plan: "筋力トレーニングとストレッチを継続。",
      },
    });
  }

  console.log("🌱 All data generated successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

