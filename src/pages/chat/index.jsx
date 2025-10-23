import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const Chat = () => {
  const [client, setClient] = useState(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // STOMP 클라이언트 생성
    const baseUrl = window.location.hostname === "localhost"
                    ? "http://localhost:8080"
                    : "https://back.petpick.store";
    const socket = new SockJS(`${baseUrl}/ws/stomp`);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
    });

    // 연결 성공 시 동작
    stompClient.onConnect = () => {
      console.log("✅ STOMP 연결 성공");
      setConnected(true);

      // 구독
      stompClient.subscribe("/topic/chatroom.1", (message) => {
        const body = JSON.parse(message.body);
        console.log("📩 받은 메시지:", body);
        setMessages((prev) => [...prev, body.content]);
      });
    };

    // 연결 시도
    stompClient.activate();
    setClient(stompClient);

    // ✅ 언마운트 시 연결 해제
    return () => {
      if (stompClient.active) stompClient.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (!client || !connected || !input.trim()) return;

    const message = {
      chatRoomId: 1,
      userId: 1,
      content: input.trim(),
    };

    client.publish({
      destination: "/app/chat.send.1",
      body: JSON.stringify(message),
    });

    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 WebSocket 채팅 테스트</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="메시지 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%", marginRight: "5px" }}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Chat;
