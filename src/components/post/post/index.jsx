import * as S from "./styles";
import { useParams } from "react-router-dom";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";
import useUserInfo from "@/hooks/localStorage";
import WrongPage from "@/pages/wrong/WrongPage";
import GalleryPost from "@/components/post/galleryPost";
import BasicPost from "@/components/post/basicPost";
import EventPost from "@/components/post/eventPost";

const Post = () => {
    const user = useUserInfo();
    const {subPath} = useParams();

    const getPostComponent = () => {
        switch(subPath) {
            case "post": return <BasicPost />;
            case "gallery": return <GalleryPost />;
            case "event": return <EventPost />;
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
                    {getPostComponent()}
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    );
}

export default Post;
