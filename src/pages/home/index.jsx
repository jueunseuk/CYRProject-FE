import * as S from "./styles";
import Board from "@/components/home/board";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import GuestInfo from "@/components/home/guestInfo";
import LoginInfo from "@/components/home/loginInfo";
import Search from "@/components/home/search";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <S.HorizontalWrapper>
                <S.VerticalWrapper width={"200px"}>
                    <GuestInfo></GuestInfo>
                    <LoginInfo></LoginInfo>
                    <Search></Search>
                    <Board></Board>
                </S.VerticalWrapper>
                <S.VerticalWrapper width={"865px"}>

                </S.VerticalWrapper>
            </S.HorizontalWrapper>
            <S.Contour />
            <Footer></Footer>
        </>
    );
}

export default Home;
