import * as BC from "@/common/basic/BasicComponent";
import * as N from "@/apis/notification";
import { useState } from "react";

const NotificationManagement = () => {
    const [text, setText] = useState("");
    const [statusMessage, setStatusMessage] = useState({
        message: "",
        type: ""
    });
    

    const handleSendNotification = async () => {
        if(!text || text.length < 5) return;

        try {
            setStatusMessage({ message: "전송 중..", type: "loading" });
            await N.postNotificationAllUser({"message": text});
            setStatusMessage({ message: "전송 완료", type: "success" });
        } catch(error) {
            setStatusMessage({ message: "전송 실패", type: "error" });
        } finally {
            setText("");
            setTimeout(() => {
                setStatusMessage({ message: "", type: ""});
            }, [5000])
        }
    };

    const getMessageColor = (type) => {
        switch(type) {
            case "loading": return "#aaa";
            case "success": return "#4CAF50";
            case "error": return "#E74C3C";
        }
    };

    return (
        <BC.HorizontalWrapper $jc={"flex-start"} $ai={"flex-end"} $gap={"10px"} style={{width: "100%"}}>
            <BC.Input type="text" value={text} $w={"50%"} $h={"30px"} style={{border: "none", borderBottom: "1px solid #ccc", padding: "0 7px"}}
                placeholder="메세지를 입력해주세요.."
                onChange={(e) => setText(e.target.value)}
            />
            <button disabled={text.length < 5}
                onClick={handleSendNotification}
                style={{fontWeight: "600", padding: "5px 12px", cursor: text.length < 5 ? "not-allowed" : "pointer", backgroundColor: text.length < 5 ? "#eee" : "#C6BC73", color: text.length < 5 ? "black" : "white", border: "none", borderRadius: "5px"}}
            >
                전송
            </button>
            <BC.Text $size={"12px"} $color={getMessageColor(statusMessage.type)}>{statusMessage.message}</BC.Text>
        </BC.HorizontalWrapper>
    );
};

export default NotificationManagement;