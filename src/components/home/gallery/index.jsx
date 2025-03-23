import * as S from "./styles";

const GallerySummary = () => {
    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>유리 갤러리</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}}>더보기</S.Text>
                </S.TitleArea>
            </S.Wrapper>
        </>
    )
}

export default GallerySummary;