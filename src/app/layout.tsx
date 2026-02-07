import React from "react";
export default function RootLayout({children,}: {children: React.ReactNode;}) {

  return (
    <html lang="ja">
        <body>
            <header style={{ padding: "20px", borderBottom: "1px solid #eee", backgroundColor: "#fff" }}>
                <strong>PT Matching App</strong>
            </header>
            {children}
        </body>
    </html>
  );
}
