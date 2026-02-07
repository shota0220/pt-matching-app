//チャットページ
"use client";
import { useState } from "react";   

export default function ChatPage() {
    const [messages, setMessages] = useState([{id: 1, sender: "pt", text:"今の症状について教えていただけますか？"}
    ]);
    const [input, setlnput] = useState("");

    const sendMessage = () => {
        if(!input) return;
        setMessages([...messages, {id: Date.now(), sender: "user", text: input}]);
    };

    return(
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>チャット相談</h1>
            <div style={{padding: "20px", maxWidth: "600px", overflowY: "scroll", marginBottom: "20px"}}>
                {messages.map((msg) => (
                    <div key={msg.id} style={{ textAlign: msg.sender === "user" ? "right" : "left", marginBottom: "10px" }}>
                        <span style={{ display: "inline-block", padding: "10px", borderRadius: "10px", backgroundColor: msg.sender === "user" ? "#0070f3" : "#e5e5ea", color: msg.sender === "user" ? "white" : "black" }}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ flex:1, padding:"10px"}}
                value={input}
                onChange={(e) => setlnput(e.target.value)}
                placeholder="メッセージを入力..."
                />
                <button onClick={sendMessage}
                style={{ backgroundColor: "#0070f3", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
                    送信
                </button>
               </div> 
            </div>
    );
}