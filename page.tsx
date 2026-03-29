//PTマッチング承認画面
"use client";

import { useState } from "react";

type MatchingRequest = {
    id: number;
    userName: string;
    symptom: string;
    stuatus: "pending" | "approved";
};

export default function PTRequestpage() {
    const [requests, setRequests] = useState<MatchingRequests[]>([
        {
            id: 1,
            userName: "山田太郎",
            symptom: "膝の痛み",
            stuatus: "pending",
        },
        {
            id: 2,
            userName: "佐藤花子",
            symptom: "腰の痛み",
            stuatus: "pending",
        },  
    ]);

    const approveRequest =(id: number) => {
        setRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, stuatus: "approved" }: request
            )
        );
    };
}

    return (
        <div style={{ padding: 24 }}>
            <h1>マッチング申請一覧</h1>
            
            {request.map((request) => (
                <div key={request.id}
                style={{
                    border: "1px solid #ccc",
                    padding: 16,
                    marginBottom: 12,

                }}
                >
                    <p>利用者名: {request.userName}</p>
                    <p>症状: {request.symptom}</p>
                    <p>状態: {request.stuatus === "pending" ? "承認待ち" : "承認済み"}</p>

                    {request.stuatus === "pending" && (
                        <button onClick={() => approveRequest(request.id)}>
                            承認する
                        </button>
                    )}
                </div>

            ))}

        </div>
    );
}