import * as S from "./styles";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";
import useUserInfo from "@/hooks/localStorage";
import { useParams } from "react-router-dom";
import NewBoard from "@/components/board/newBoard";
import WrongPage from "../wrong/WrongPage";

const PostList = () => {
    const user = useUserInfo();
    const {subPath} = useParams();

    const getBoardComponent = () => {
        switch(subPath) {
            case "new": return <NewBoard />;
            case "popular": return <NewBoard />;
            case "attendance": return <NewBoard />;
            case "gallery": return <NewBoard />;
            case "announcement": return <NewBoard />;
            case "event": return <NewBoard />;
            case "calendar": return <NewBoard />;
            case "poll": return <NewBoard />;
            case "free": return <NewBoard />;
            case "qna": return <NewBoard />;
            case "art": return <NewBoard />;
            case "cover": return <NewBoard />;
            case "letter": return <NewBoard />;
            case "favorite": return <NewBoard />;
            case "unreleased": return <NewBoard />;
            case "concert": return <NewBoard />;
            case "goods": return <NewBoard />;
            case "suggestion": return <NewBoard />;
            case "complaint": return <NewBoard />;
            case "apply": return <NewBoard />;
            case "new": return <NewBoard />;
            case "new": return <NewBoard />;
            case "new": return <NewBoard />;
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

export default PostList;
