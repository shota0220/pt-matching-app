export { default } from "next-auth/middleware";

//ログインしていないユーザーが dashboard に入ろうとしたら強制的にログイン画面へ飛ばす
export const config = { 
  matcher: ["/admin/:path*", "/chat/:path*"] 
};