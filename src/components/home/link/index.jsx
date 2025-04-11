import * as S from "./styles";
import cyr from "@/assets/image/cyr.png";
import forest from "@/assets/image/forest.png";
import nave from "@/assets/image/nave.png";
import youtube from "@/assets/icon/link/youtube.svg";
import instagram from "@/assets/icon/link/instagram.svg";
import blog from "@/assets/icon/link/blog.svg";
import facebook from "@/assets/icon/link/facebook.svg";
import soundcloud from "@/assets/icon/link/soundcloud.svg";
import cafe from "@/assets/icon/link/cafe.svg";
import nave2 from "@/assets/icon/link/nave.svg";
import x from "@/assets/icon/link/x.svg";

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
                <S.CotentWrapper>
                    <S.Content>
                        <S.PresentImage src={cyr}/>
                        <S.LinkList>
                            <S.ItemArea>
                                <S.Icon $icon={youtube}/>
                                <S.Link href="https://www.youtube.com/channel/UCyUnjor6wyRA2Xt3fFwnf6w" target="_blank">
                                <S.Text $color={"#FF0000"} $size={"13px"} $weight={"600"}>Youtube</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={instagram}/>
                                <S.Link href="https://www.instagram.com/_choiyuree/" target="_blank">
                                <S.GradientText $size={"13px"} $weight={"600"}>Instagram</S.GradientText></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={blog}/>
                                <S.Link href="https://blog.naver.com/yureemorae" target="_blank">
                                <S.Text $color={"#42D31A"} $size={"13px"} $weight={"600"}>Blog</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={cafe}/>
                                <S.Link href="https://cafe.daum.net/CHOIYUREE" target="_blank">
                                <S.Text $color={"#FF2041"} $size={"13px"} $weight={"600"}>Cafe</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={facebook}/>
                                <S.Link href="https://www.facebook.com/ChoiYuRee/" target="_blank">
                                <S.Text $color={"#0866FF"} $size={"13px"} $weight={"600"}>Facebook</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={soundcloud}/>
                                <S.Link href="https://soundcloud.com/yureechoi" target="_blank">
                                <S.Text $color={"#F26D23"} $size={"12px"} $weight={"600"}>SoundCloud</S.Text></S.Link>
                            </S.ItemArea>
                        </S.LinkList>
                    </S.Content>
                    <S.Content>
                        <S.PresentImage src={forest}/>
                        <S.LinkList>
                            <S.ItemArea>
                                <S.Icon $icon={youtube}/>
                                <S.Link href="https://www.youtube.com/@welcometoforest" target="_blank">
                                    <S.Text $color={"#FF0000"} $size={"13px"} $weight={"600"}>Youtube</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={instagram}/>
                                <S.Link href="https://www.instagram.com/_welcometoforest/" target="_blank">
                                    <S.GradientText $size={"13px"} $weight={"600"}>Instagram</S.GradientText></S.Link>
                            </S.ItemArea>
                        </S.LinkList>
                    </S.Content>
                    <S.Content>
                        <S.PresentImage src={nave}/>
                        <S.LinkList>
                            <S.ItemArea>
                                <S.Icon $icon={youtube}/>
                                <S.Link href="https://www.youtube.com/@navywave" target="_blank">
                                    <S.Text $color={"#FF0000"} $size={"13px"} $weight={"600"}>Youtube</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={instagram}/>
                                <S.Link href="https://www.instagram.com/nave_label/" target="_blank">
                                    <S.GradientText $size={"13px"} $weight={"600"}>Instagram</S.GradientText></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={nave2}/>
                                <S.Link href="https://navywave.kr/" target="_blank">
                                    <S.Text $color={"#4266F8"} $size={"13px"} $weight={"600"}>Nave</S.Text></S.Link>
                            </S.ItemArea>
                            <S.ItemArea>
                                <S.Icon $icon={x}/>
                                <S.Link href="https://www.instagram.com/nave_label/" target="_blank">
                                    <S.Text $color={"#000000"} $size={"13px"} $weight={"600"}>X</S.Text></S.Link>
                            </S.ItemArea>
                        </S.LinkList>
                    </S.Content>
                </S.CotentWrapper>
            </S.Wrapper>
        </>
    );
}

export default Link;