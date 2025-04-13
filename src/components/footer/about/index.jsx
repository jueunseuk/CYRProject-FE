import * as S from "./styles";
import ReactMarkDown from "react-markdown";
import about from "@/assets/markdown/about.md?raw";

const About = () => {
    return (
        <>
            <S.Wrapper>
                <ReactMarkDown>
                    {about}
                </ReactMarkDown>
            </S.Wrapper>
        </>
    )
};

export default About;