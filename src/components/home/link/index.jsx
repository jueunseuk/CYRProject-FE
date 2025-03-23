import * as S from "./styles";
import instagram from "@/assets/icon/link/instagram.png";
import nave from "@/assets/icon/link/nave.png";
import youtube from "@/assets/icon/link/youtube.png";
import facebook from "@/assets/icon/link/facebook.png";

const Link = () => {

    const handleNavigateOfficial = (value) => {
        window.open(value, "_blank");
    }

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>유리 바로가기</S.Text>
                </S.TitleArea>
                <S.ContentArea>
                    <S.LinkButton src={instagram} onClick={() => handleNavigateOfficial("https://www.instagram.com/_choiyuree/")}/>
                    <S.LinkButton src={youtube} onClick={() => handleNavigateOfficial("https://www.youtube.com/channel/UCyUnjor6wyRA2Xt3fFwnf6w/feed")}/>
                    <S.LinkButton src={facebook} onClick={() => handleNavigateOfficial("https://www.facebook.com/ChoiYuRee/")}/>
                    <S.LinkButton src={nave} onClick={() => handleNavigateOfficial("https://navywave.kr/")}/>
                </S.ContentArea>
            </S.Wrapper>
        </>
    );
}

export default Link;