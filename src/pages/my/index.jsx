import * as S from "./styles";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import MyPage from "@/components/page/myPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const My = () => {
    const user = useUserInfo();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.userId) {
            alert("로그인 후 이용가능합니다.\n메인화면으로 이동합니다.");
            navigate("/");
        }
    }, [user, navigate]);

    if (!user?.userId) return null;

    return (
        <>
            <Banner></Banner>
            <S.HorizontalWrapper>
                <S.SidebarWrapper>
                    {user && user.userId ? (
                        <LoginInfo></LoginInfo>
                    ) : (
                        <GuestInfo></GuestInfo>
                    )}
                    <Search></Search>
                    <Board></Board>
                </S.SidebarWrapper>
                <S.ContentWrapper>
                    <MyPage />
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    )
};

export default My;