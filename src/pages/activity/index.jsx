import * as S from "./styles";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import MyPosts from "@/components/user/MyPosts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import MyComments from "@/components/user/MyComments";
import MyEmpathizedPosts from "@/components/user/MyEmpathizedPosts";
import MyImages from "@/components/user/MyImages";

const Activity = () => {
    const user = useUserInfo();
    const {subPath} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.userId) {
            alert("로그인 후 이용가능합니다.\n메인화면으로 이동합니다.");
            navigate("/");
        }
    }, [user, navigate]);

    const getComponent = () => {
        switch(subPath) {
            case "posts": return <MyPosts />;
            case "comments": return <MyComments />;
            case "empathized": return <MyEmpathizedPosts />;
            case "images": return <MyImages />;
            default : return <WrongPage />;
        }
    };

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
                    {getComponent()}
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    )
};

export default Activity;