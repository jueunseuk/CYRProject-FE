import * as S from "./styles";
import information from "@/assets/icon/etc/information.svg";

const Cheer = () => {
    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>응원하기</S.Text>
                    <S.TooltipWrapper>
                        <S.IconArea src={information} />
                        <S.TooltipText>
                            <p style={{fontSize: "16px", fontWeight:"700"}}>응원이란?</p>
                            <p style={{fontSize:"14px"}}>아래의 응원을 눌러서 유리를 응원해보세요!</p>
                            <p style={{fontSize:"14px"}}>응원은 1분에 1번씩만 가능합니다.</p>
                        </S.TooltipText>
                    </S.TooltipWrapper>
                </S.TitleArea>
                <S.ContentArea>
                    <S.Content>
                        <S.Text $size={"12px"} $color={"white"}>응원합계</S.Text>
                        <S.Text $size={"12px"} $color={"white"}>ㅡ</S.Text>
                        <S.Text $size={"16px"} $weight={"700"} $color={"white"}>32,235 회</S.Text>
                        <S.CheerButton>응원</S.CheerButton>
                    </S.Content>
                </S.ContentArea>
            </S.Wrapper>
        </>
    );
}

export default Cheer;