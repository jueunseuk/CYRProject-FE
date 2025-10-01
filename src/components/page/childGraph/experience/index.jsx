import * as S from "./styles";

const Experience = () => {
    return (
        <S.Wrapper>
            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>경험치</S.Text>
            <S.VerticalWrapper $ai={"center"} $gap={"5px"} style={{width: "95%", marginBottom: "25px"}}>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>현재 경험치</S.Text>
                    <S.Text $size={"16px"}>1029</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>오늘 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>23</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>3</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번주 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>118</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>-24</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번달 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>892</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>14</S.Text>
                </S.HorizontalWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
        </S.Wrapper>
    );
};

export default Experience;