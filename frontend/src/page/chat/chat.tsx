import type React from "react";
import { useState } from "react";

const ChatMode: React.FC = () => {
    const [messages, setMessages] = useState<
        Array<{ text: string; sender: "user" | "ai" }>
    >([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            setMessages([...messages, { text: inputMessage, sender: "user" }]);
            setInputMessage("");
            // ここでAIの応答を処理する（実際のAPIコールなど）
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "AIからの応答例です。", sender: "ai" },
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message) => (
                    <div
                        key={`${message.sender}-${message.text}`}
                        className={`message ${message.sender}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="メッセージを入力..."
                />
                <button type="button" onClick={handleSendMessage}>
                    送信
                </button>
            </div>
        </div>
    );
};

export default ChatMode;
