import * as S from "./styles";
import LoginInfo from "@/components/home/loginInfo";
import Banner from "@/components/home/banner";
import GuestInfo from "@/components/home/guestInfo";
import Search from "@/components/home/search";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import Craft from "@/components/craftshop/craft";
import Shop from "@/components/craftshop/shop";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WrongPage from "../wrong/WrongPage";
import Inventory from "@/components/craftshop/inventory";

const Craftshop = () => {
    const user = useUserInfo();
    const { subPath } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.userId) {
            alert("로그인 후 이용가능합니다.\n메인화면으로 이동합니다.");
            navigate("/");
        }
    }, [user, navigate]);

    const getComponent = () => {
        switch(subPath) {
            case "craftshop": return <Craft />;
            case "shop": return <Shop />;
            case "inventory": return <Inventory />;
            default : return <WrongPage />;
        }
    };
    
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
                    {getComponent()}
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    )
};

export default Craftshop;