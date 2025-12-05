import * as BC from "@/common/basic/BasicComponent";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FloatingChatButton from "@/components/chat/floatingChatButton";
import useUserInfo from "@/hooks/localStorage";
import { useEffect } from "react";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import CommunityStatistic from "../home/communityStatistic";

const HomeLayout = () => {
    const user = useUserInfo();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.userId) {
            alert("로그인 후 이용가능합니다.\n메인화면으로 이동합니다.");
            navigate("/");
        }
        if(user?.role === "MEMBER" || user?.role === "GUEST") {
            alert("존재하지 않는 페이지입니다.");
            navigate("/");
        }
    }, [user, navigate]);

    if (!user?.userId) return null;

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
            <Contour />
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

export const Contour = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E7E7E7;
    border: none;
    margin: 75px 0 0 0;
`;