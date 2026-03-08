import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../lib/prisma"; // ★ ここで共通ファイルを呼ぶ
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  adapter: PrismaAdapter(prisma), // ★ インポートした prisma を使う
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    session: ({ session, user }: any) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };