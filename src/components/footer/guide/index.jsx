import * as S from "./styles";
import ReactMarkDown from "react-markdown";
import guide from "@/assets/markdown/guide.md?raw";

const Guide = () => {
    return (
        <>
            <S.Wrapper>
                <ReactMarkDown>
                    {guide}
                </ReactMarkDown>
            </S.Wrapper>
        </>
    )
};

export default Guide;