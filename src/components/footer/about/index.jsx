import * as S from "./styles";
import SA from "@/assets/image/SystemArchitecture.png";

const About = () => {
    return (
        <>
            <S.Wrapper>
                <S.Title>About</S.Title>
                <S.Text>CYR Community 프로젝트의 개발에 관한 페이지입니다.</S.Text>
                <S.Blank />

                <S.SubTitle>윤준수</S.SubTitle>
                <S.Introduce>안녕하세요. 가수 최유리님의 팬 커뮤니티 "CYR Community"를 개발한 <strong>윤준수</strong>입니다. 백엔드 개발자를 준비 중인 00년생 컴퓨터과학과 대학생입니다. 지속적으로 피드백 반영하며 개발 및 운영해 나갈 예정이니 많은 관심과 이용 부탁드립니다.</S.Introduce>
                <S.Text>연락처: <S.Link href="mailto:junsu120202@gmail.com">junsu120202@gmail.com</S.Link></S.Text>
                <S.Text>Visit: <S.Link href="https://github.com/jueunseuk">Github, </S.Link><S.Link href="https://jundyu.tistory.com">블로그</S.Link></S.Text>
                <S.Blank />

                <S.SubTitle>커뮤니티 개발 계기</S.SubTitle>
                <S.Introduce>2022년 가수 최유리님을 좋아하게 되고, '좋아하는 가수를 위해 뭘 할 수 있을까' 고민하다가 팬들을 위한 커뮤니티를 개발하게 되었습니다. 프로젝트의 초창기에는 혼자 일정이나 사진들을 관리할 계획이었으나 이왕 만드는거 모두가 유용하게 사용할 수 있는 공간으로 발전시키고 싶다는 생각이 들었습니다. <br /> 그래서 단순한 정보 공유를 넘어서, 팬들이 서로 소통하고 추억을 나누며 더 끈끈하게 연결될 수 있는 커뮤니티를 목표로 개발을 하게 되었습니다. <br /> </S.Introduce>
                <S.Blank />
                
                <S.SubTitle>기술 스택 개요</S.SubTitle>
                <S.List>
                    <S.FirstListItem>Planning</S.FirstListItem>
                    <S.SecondListItem>Google Sheets, Google Docs, Notion</S.SecondListItem>
                    <S.FirstListItem>Design</S.FirstListItem>
                    <S.SecondListItem>Figma</S.SecondListItem>
                    <S.FirstListItem>Frontend</S.FirstListItem>
                    <S.SecondListItem>React, Javascript, Recoil, React Query, Vite, Styled Component, Axios, Web Socket</S.SecondListItem>
                    <S.FirstListItem>Backend</S.FirstListItem>
                    <S.SecondListItem>Spring Boot 3, Spring Security, Spring Data JPA, Lombok, Java 21, Gradle</S.SecondListItem>
                    <S.FirstListItem>Database</S.FirstListItem>
                    <S.SecondListItem>MySQL, ERD Cloud</S.SecondListItem>
                    <S.FirstListItem>AI</S.FirstListItem>
                    <S.SecondListItem>OpenAI API (ChatGPT)</S.SecondListItem>
                    <S.FirstListItem>Deployment</S.FirstListItem>
                    <S.SecondListItem>Vercel, Render, AWS (EC2, RDS, S3), Docker</S.SecondListItem>
                    <S.FirstListItem>Authentication</S.FirstListItem>
                    <S.SecondListItem>OAuth 2.0 (Naver, Kakao, Google), Gmail SMTP, JWT</S.SecondListItem>
                    <S.FirstListItem>Others</S.FirstListItem>
                    <S.SecondListItem>Postman, Git, Github</S.SecondListItem>
                </S.List>
                <S.Blank />

                <S.SubTitle>시스템 아키텍쳐</S.SubTitle>
                <S.Image src={SA}></S.Image>

            </S.Wrapper>
        </>
    )
};

export default About;