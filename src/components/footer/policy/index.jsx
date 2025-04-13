import * as S from "./styles";
import ReactMarkDown from "react-markdown";
import policy from "@/assets/markdown/policy.md?raw";

const Policy = () => {
    return (
        <>
            <S.Wrapper>
                <ReactMarkDown>
                    {policy}
                </ReactMarkDown>
            </S.Wrapper>
        </>
    )
};

export default Policy;