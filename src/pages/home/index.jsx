import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
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
import useUserInfo from "@/hooks/localStorage";
import CommunityInfo from "@/components/home/communityStatistic";
import RankingSummary from "@/components/home/ranking";
import InProgressPoll from "@/components/poll/inProgressPoll";
import YoutubeComponent from "@/components/home/youtube";
import LoudSpeakerPost from "@/components/home/loudSpeaker";

const Home = () => {
    const user = useUserInfo();

    return (
        <>
            <Banner></Banner>
            <BC.HorizontalWrapper $ai={"flex-start"} $jc={"space-between"} style={{width: "100%"}}>
                <S.SidebarWrapper>
                    {user && user.userId ? (
                        <LoginInfo></LoginInfo>
                    ) : (
                        <GuestInfo></GuestInfo>
                    )}
                    <Search></Search>
                    <Board></Board>
                    <CommunityInfo />
                </S.SidebarWrapper>
                <S.ContentWrapper>
                    <AnnouncementSummary />
                    <BC.HorizontalWrapper $jc={"space-between"} style={{width: "100%"}}>
                        <Cheer />
                        <CalendarSummary />
                        <Link />
                    </BC.HorizontalWrapper>
                    <LoudSpeakerPost />
                    <LatestPost />
                    <GallerySummary />
                    {(user && user.userId) && <InProgressPoll />}
                    <RankingSummary />
                    <YoutubeComponent />
                </S.ContentWrapper>
            </BC.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    );
}

export default Home;
