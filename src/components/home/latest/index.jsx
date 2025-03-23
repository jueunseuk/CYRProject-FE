import * as S from "./styles";

const LatestPost = () => {
    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>최신글</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}}>더보기</S.Text>
                </S.TitleArea>
                    <S.Table>
                        <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "51%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        <tbody>
                            <S.FirstRow>
                                <S.FirstColumn><S.Text>[자유게시판]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>유리님 노래로 컬러링한 모래님들 있나요?!?</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>장쪅</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.15</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>67</S.Text></S.Column>
                            </S.FirstRow>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.15</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>124</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[자유게시판]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>유리님 콘서트 가고 싶어요..</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>맑음율</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.15</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>152</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[[내가 그린 유리]]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>율님 얼굴 귀엽게 그려봤어욤 ㅇㅅaㅇ</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>내안의최유리</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.15</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>168</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[To. 유리]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>율님에게 매일 편지쓰기 19일차</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>히히다</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.15</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>1</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[자유게시판]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>오늘 유리님 ‘숲’ 듣고 입덕했습니다.</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.14</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>248</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[굿즈 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>유리님 여운 콘서트 당시 판매했던 마우스패드 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>숲바람</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.14</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>167</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                            <S.Row>
                                <S.FirstColumn><S.Text>[콘서트 후기]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>해피뉴리클 콘서트 후기</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>유리밖은위험해</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>2025.04.01</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>3,175</S.Text></S.Column>
                            </S.Row>
                        </tbody>
                    </S.Table>
            </S.Wrapper>
        </>
    )
}

export default LatestPost;