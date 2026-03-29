import NextAuth from "next-auth";

export type Role = "USER" | "THERAPIST" | "ADMIN";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
  }
}
