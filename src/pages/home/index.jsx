import * as S from "./styles";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";
import AnnouncementSummary from "@/components/home/announcement";
import Cheer from "@/components/home/cheer";
import CalendarSummary from "@/components/home/calendar";
import Link from "@/components/home/link";
import LatestPost from "@/components/home/latest";
import GallerySummary from "@/components/home/gallery";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <S.HorizontalWrapper>
                <S.SidebarWrapper>
                    <GuestInfo></GuestInfo>
                    <LoginInfo></LoginInfo>
                    <Search></Search>
                    <Board></Board>
                </S.SidebarWrapper>
                <S.ContentWrapper>
                    <AnnouncementSummary />
                    <S.HorizontalWrapper>
                        <Cheer />
                        <CalendarSummary />
                        <Link />
                    </S.HorizontalWrapper>
                    <LatestPost />
                    <GallerySummary />
                </S.ContentWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    );
}

export default Home;
