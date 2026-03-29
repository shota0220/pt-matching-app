import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 1. まず一般ユーザーを探す
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user) {
          const u = user as any;
          if (u.password === credentials.password) {
            return { id: user.id, email: user.email, name: user.name, role: "USER" };
          }
        }

        // 2. いなければセラピストを探す
        const therapist = await prisma.therapist.findUnique({
          where: { email: credentials.email },
        });

        if (therapist) {
          const t = therapist as any;
          if (t.password === credentials.password) {
            return { id: therapist.id, email: therapist.email, name: therapist.name, role: "THERAPIST" };
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


