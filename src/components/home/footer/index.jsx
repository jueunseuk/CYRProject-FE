import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateFooter = (url) => {
        navigate(`/${url}`);
    };

    return (
        <>
            <S.Wrapper>
                <S.HorizontalWrapper>
                    <S.Text onClick={() => handleNavigateFooter("terms")}>서비스 이용약관</S.Text>
                    <S.Text>|</S.Text>
                    <S.Text onClick={() => handleNavigateFooter("policy")}>개인정보 보호정책</S.Text>
                    <S.Text>|</S.Text>
                    <S.Text onClick={() => handleNavigateFooter("guide")}>커뮤니티 이용가이드</S.Text>
                    <S.Text>|</S.Text>
                    <S.Text onClick={() => handleNavigateFooter("about")}>About</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper>
                    <S.Text>CopyrightⓒJunsu All rights reserved.</S.Text>
                </S.HorizontalWrapper>
            </S.Wrapper>
        </>
    );
}

export default Footer;