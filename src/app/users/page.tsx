// データベースから「相談内容」も含めて一覧表示する
import { prisma } from "../../lib/prisma";

export default async function UsersListPage() {
  // データベースから全ユーザー（利用者）を取得
  const users = await prisma.user.findMany({
    orderBy: { id: 'desc' }
  });

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif", backgroundColor: "#fff" }}>
      <header style={{ borderBottom: "2px solid #f0f0f0", marginBottom: "30px", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>リハビリ相談 受付台帳</h1>
          <p style={{ color: "#888", margin: "5px 0 0 0" }}>全相談リクエストのステータス管理</p>
        </div>
      </header>

      <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden", border: "1px solid #eee" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#fafafa", borderBottom: "2px solid #eee" }}>
              <th style={{ padding: "15px", textAlign: "left", color: "#666" }}>ステータス</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#666" }}>利用者名</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#666" }}>症状・相談内容</th>
              <th style={{ padding: "15px", textAlign: "left", color: "#666" }}>受信日</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: "40px", textAlign: "center", color: "#999" }}>
                  まだ相談リクエストが届いていません。
                </td>
              </tr>
            ) : (
              users.map((user: any) => (
                <tr key={user.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "15px" }}>
                    {user.isApproved ? (
                      <span style={{ padding: "5px 12px", backgroundColor: "#e6f4ea", color: "#1e7e34", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>
                        ● 承認済み
                      </span>
                    ) : (
                      <span style={{ padding: "5px 12px", backgroundColor: "#fff1f0", color: "#cf1322", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>
                        未承認
                      </span>
                    )}
                  </td>
                  <td style={{ padding: "15px" }}>
                    <div style={{ fontWeight: "bold" }}>{user.name} 様</div>
                    <div style={{ fontSize: "12px", color: "#999" }}>{user.email}</div>
                  </td>
                  <td style={{ padding: "15px", fontSize: "14px", color: "#333" }}>
                    {user.symptom || "内容なし"}
                  </td>
                  <td style={{ padding: "15px", fontSize: "12px", color: "#999" }}>
                    {/* 日付表示の安全な処理 */}
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString('ja-JP') : "不明"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}>
        <a href="/user/request" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>＋ 新しく相談を送る</a>
        <a href="/admin/dashboard" style={{ color: "#666", textDecoration: "none" }}>→ 管理画面へ</a>
      </div>
    </div>
  );
}