import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";
import type { Role } from "@/types/next-auth";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      if (!token) return false;

      const role = token.role as Role | undefined;
      const path = (req as NextRequest).nextUrl.pathname;

      if (path.startsWith("/admin")) {
        return role === "ADMIN";
      }

      if (path.startsWith("/dashboard")) {
        return role === "THERAPIST";
      }

      // チャット・予約・プロフィールはログイン済みならOK
      if (
        path.startsWith("/chat") ||
        path.startsWith("/reservations") ||
        path.startsWith("/profile/settings")
      ) {
        return true;
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/chat/:path*",
    "/reservations/:path*",
    "/admin/:path*",
    "/profile/settings",
  ],
};

