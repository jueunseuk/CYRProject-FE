import * as S from "./styles";

const Footer = () => {
    return (
        <>
            <S.Wrapper>
                <S.HorizontalWrapper>
                    <S.Text>서비스 이용약관</S.Text>|
                    <S.Text>개인정보 보호정책</S.Text>|
                    <S.Text>커뮤니티 이용가이드</S.Text>|
                    <S.Text>About Us</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper>
                    <S.Text>CopyrightⓒJunsu All rights reserved.</S.Text>
                </S.HorizontalWrapper>
            </S.Wrapper>
        </>
    );
}

export default Footer;