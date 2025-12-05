import * as BC from "@/common/basic/BasicComponent";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FloatingChatButton from "@/components/chat/floatingChatButton";
import useUserInfo from "@/hooks/localStorage";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import CommunityStatistic from "@/components//home/communityStatistic";

const HomeLayout = () => {
    const user = useUserInfo();
    
    return (
        <HomeBackGround>
            <Banner />
            <BC.HorizontalWrapper $ai={"flex-start"} $jc={"space-between"} style={{width: "100%"}}>
                <SidebarWrapper>
                    {user && user.userId ? (
                        <LoginInfo />
                    ) : (
                        <GuestInfo />
                    )}
                    <Search />
                    <Board />
                    <CommunityStatistic />
                </SidebarWrapper>
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </BC.HorizontalWrapper>
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

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 865px;
`;
