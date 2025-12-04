import { useParams } from "react-router-dom";
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
import GalleryBoard from "@/components/board/galleryBoard";
import AnnouncementBoard from "@/components/board/announcementBoard";
import CalendarBoard from "@/components/board/calendarBoard";
import PollBoard from "@/components/board/pollBoard";
import EventBoard from "@/components/board/eventBoard";

const PostList = () => {
    const {subPath} = useParams();

    const getBoardComponent = () => {
        switch(subPath) {
            case "new": return <NewBoard />;
            case "popular": return <PopularBoard />;
            case "attendance": return <AttendanceBoard />;
            case "gallery": return <GalleryBoard />;
            case "announcement": return <AnnouncementBoard />;
            case "event": return <EventBoard />;
            case "calendar": return <CalendarBoard />;
            case "poll": return <PollBoard />;
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
            {getBoardComponent()}
        </>
    );
}

export default PostList;
