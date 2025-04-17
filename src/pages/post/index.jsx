import * as S from "./styles";
import { useParams } from "react-router-dom";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";
import useUserInfo from "@/hooks/localStorage";
import BasicPost from "@/components/post/basicPost";
import GalleryPost from "@/components/post/galleryPost";
import EventPost from "@/components/post/eventPost";
import WrongPage from "../wrong/WrongPage";

const Post = () => {
    const user = useUserInfo();
    const {subPath} = useParams();

    const getBoardComponent = () => {
        switch(subPath) {
            case "new": return <BasicPost />;
            case "popular": return <BasicPost />;
            case "attendance": return <BasicPost />;
            case "gallery": return <GalleryPost />;
            case "announcement": return <BasicPost />;
            case "event": return <EventPost />;
            case "calendar": return <BasicPost />;
            case "poll": return <BasicPost />;
            case "free": return <BasicPost />;
            case "qna": return <BasicPost />;
            case "art": return <BasicPost />;
            case "cover": return <BasicPost />;
            case "letter": return <BasicPost />;
            case "favorite": return <BasicPost />;
            case "unreleased": return <BasicPost />;
            case "concert": return <BasicPost />;
            case "goods": return <BasicPost />;
            case "suggestion": return <BasicPost />;
            case "complaint": return <BasicPost />;
            case "apply": return <BasicPost />;
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

export default Post;
