import * as S from "./styles";
import { useParams } from "react-router-dom";
import Banner from "@/components/home/banner";
import Search from "@/components/home/search";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Board from "@/components/home/board";
import Footer from "@/components/home/footer";
import useUserInfo from "@/hooks/localStorage";
import WrongPage from "../wrong/WrongPage";
import PostEditor from "@/components/editor/postEditor";

const Editor = () => {
    const user = useUserInfo();
    const {type} = useParams();

    const getBoardComponent = () => {
        switch(type) {
            case "post": return <PostEditor />;
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
    )
};

export default Editor;