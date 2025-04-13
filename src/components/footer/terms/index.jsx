import * as S from "./styles";
import ReactMarkDown from "react-markdown";
import terms from "@/assets/markdown/terms.md?raw";

const Terms = () => {
    return (
        <>
            <S.Wrapper>
                <ReactMarkDown>
                    {terms}
                </ReactMarkDown>
            </S.Wrapper>
        </>
    )
};

export default Terms;