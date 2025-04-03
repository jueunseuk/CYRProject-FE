import * as S from "./styles";
import { useParams } from "react-router-dom";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";
import useUserInfo from "@/hooks/localStorage";
import NewBoard from "@/components/board/newBoard";
import WrongPage from "../wrong/WrongPage";
import PopularBoard from "@/components/board/popularBoard";
import FreeBoard from "@/components/board/freeboard";
import QnABoard from "@/components/board/qnaBoard";
import ArtBoard from "@/components/board/artBoard";
import CoverBoard from "@/components/board/coverBoard";
import LetterBoard from "@/components/board/freeboard";
import FavoriteBoard from "@/components/board/favoriteBoard";
import UnreleasedBoard from "@/components/board/unreleasedBoard";
import ConcertBoard from "@/components/board/concertBoard";
import GoodsBoard from "@/components/board/goodsBoard";
import SuggestionBoard from "@/components/board/suggestionBoard";
import ComplaintBoard from "@/components/board/complaintBoard";
import ApplyBoard from "@/components/board/applyBoard";
import AttendanceBoard from "@/components/board/attendanceBoard";

const PostList = () => {
    const user = useUserInfo();
    const {subPath} = useParams();

    const getBoardComponent = () => {
        switch(subPath) {
            case "new": return <NewBoard />;
            case "popular": return <PopularBoard />;
            case "attendance": return <AttendanceBoard />;
            case "gallery": return <NewBoard />;
            case "announcement": return <NewBoard />;
            case "event": return <NewBoard />;
            case "calendar": return <NewBoard />;
            case "poll": return <NewBoard />;
            case "free": return <FreeBoard />;
            case "qna": return <QnABoard />;
            case "art": return <ArtBoard />;
            case "cover": return <CoverBoard />;
            case "letter": return <LetterBoard />;
            case "favorite": return <FavoriteBoard />;
            case "unreleased": return <UnreleasedBoard />;
            case "concert": return <ConcertBoard />;
            case "goods": return <GoodsBoard />;
            case "suggestion": return <SuggestionBoard />;
            case "complaint": return <ComplaintBoard />;
            case "apply": return <ApplyBoard />;
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
