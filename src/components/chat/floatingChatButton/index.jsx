import * as S from "./styles";
import chat from "@/assets/icon/chat/yul_talk.svg";
import { useEffect, useState } from "react";
import ChatModal from "@/components/chat/chatModal";

const FloatingChatButton = () => {
    const [open, setOpen] = useState(false);
    const [right, setRight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const contentWidth = 1080;
            const sideGap = (windowWidth - contentWidth) / 2;
            setRight(sideGap - 100);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
          {open && <ChatModal onClose={() => setOpen(false)} />}
            {!open && <S.YulTalk src={chat} style={{ right: `${right}px` }} onClick={() => setOpen(true)}/>}
          
        </>
    );
};

export default FloatingChatButton;
