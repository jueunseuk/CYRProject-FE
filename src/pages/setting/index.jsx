import * as S from "./styles";
import LoginInfo from "@/components/home/loginInfo";
import Banner from "@/components/home/banner";
import GuestInfo from "@/components/home/guestInfo";
import Search from "@/components/home/search";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSetting from "@/components/setting";

const Setting = () => {
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
                    <UserSetting user={user} />
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    )
};

export default Setting;