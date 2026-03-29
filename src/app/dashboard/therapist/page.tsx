//理学療法士専用管理画面
//AI申し送り要約 (AIAssistantNotes):
//患者さんの直近のチャット履歴をAIで解析して、セラピストが訪問前に確認すべき重要事項を3行程度で要約する機能
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TherapistDashboardClient from "./TherapistDashboardClient";

export default async function TherapistDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "THERAPIST") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">権限がありません。</p>
      </div>
    );
  }

  const therapistId = (session.user as any).id;

  const pt = await prisma.therapist.findUnique({
    where: { id: therapistId },
    include: {
      reservations: {
        include: { user: true },
        orderBy: { date: "asc" },
      },
    },
  });

  if (!pt) return null;

  return <TherapistDashboardClient pt={pt} />;


}







