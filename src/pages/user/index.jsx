import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import UserPage from "@/components/page/userPage";

const User = () => {
    const user = useUserInfo();
    const {userId} = useParams();
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
                    <UserPage />
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    )
};

export default User;