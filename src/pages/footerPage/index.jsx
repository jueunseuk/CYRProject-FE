import * as S from "./styles";
import { useLocation } from "react-router-dom";
import Banner from "@/components/home/banner";
import LoginInfo from "@/components/home/loginInfo";
import GuestInfo from "@/components/home/guestInfo";
import Search from "@/components/home/search";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import Terms from "@/components/footer/terms";
import useUserInfo from "@/hooks/localStorage";
import WrongPage from "../wrong/WrongPage";
import Policy from "@/components/footer/policy";
import Guide from "@/components/footer/guide";
import About from "@/components/footer/about";
import Disclaimer from "@/components/footer/disclaimer";

const FooterPage = () => {
    const user = useUserInfo();
    const location = useLocation().pathname;

    const getBoardComponent = () => {
        switch(location) {
            case "/terms": return <Terms />;
            case "/policy": return <Policy />;
            case "/guide": return <Guide />;
            case "/disclaimer": return <Disclaimer />;
            case "/about": return <About />;
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
                    {getBoardComponent()}
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    );
}

export default FooterPage;