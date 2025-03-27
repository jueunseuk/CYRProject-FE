import * as S from "./styles";

const AnnouncementSummary = () => {
    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>공지사항</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}}>더보기</S.Text>
                </S.TitleArea>
                <S.Table>
                    <tbody>
                        <S.FirstRow>
                            <S.FirstColumn $align={"left"}><S.Text>[공지] 외로움이라는 건 정규 발매 기념 카세트 판매 안내</S.Text></S.FirstColumn>
                            <S.Column><S.Text>최유리 공식 팬카페</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2025.04.12</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>5,312</S.Text></S.Column>
                        </S.FirstRow>
                        <S.Row>
                            <S.FirstColumn $align={"left"}><S.Text>[공지] 최유리 - 다비치 EP [Stitch] 참여</S.Text></S.FirstColumn>
                            <S.Column><S.Text>최유리 공식 팬카페</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                        </S.Row>
                        <S.Row>
                            <S.FirstColumn $align={"left"}><S.Text>[공지] 2025.03.28 ~ 29 커뮤니티 점검 및 서비스 일시 중지 안내</S.Text></S.FirstColumn>
                            <S.Column><S.Text>커뮤니티 운영자</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2025.03.24</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2,465</S.Text></S.Column>
                        </S.Row>
                        <S.Row>
                            <S.FirstColumn $align={"left"}><S.Text>[공지] 최유리 첫번째 정규 앨범 [746] CD 및 LP 예약 판매 안내</S.Text></S.FirstColumn>
                            <S.Column><S.Text>최유리 공식 팬카페</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2025.02.28</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>5,104</S.Text></S.Column>
                        </S.Row>
                        <S.Row>
                            <S.FirstColumn $align={"left"}><S.Text>[공지] 최유리 - 단독 콘서트 ‘생각을 멈추다 보면’ 드레스 코드 및 유의사항 안내</S.Text></S.FirstColumn>
                            <S.Column><S.Text>최유리 공식 팬카페</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>2025.02.15</S.Text></S.Column>
                            <S.Column><S.Text $color={"#878787"}>3,943</S.Text></S.Column>
                        </S.Row>
                    </tbody>
                </S.Table>
            </S.Wrapper>
        </>
    );
}

export default AnnouncementSummary;