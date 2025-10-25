import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FloatingChatButton from "@/components/chat/floatingChatButton";

const HomeLayout = () => {
    return (
        <HomeBackGround>
            <Outlet />
            <FloatingChatButton />
        </HomeBackGround>
    );
}

export default HomeLayout;

const HomeBackGround = styled.div`
    position: relative;
    width: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin: 0px;
`;