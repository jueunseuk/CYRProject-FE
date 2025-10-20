import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;   
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
`;

export const Content = styled.div`
    background-color: #F4F3E9;
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "flex-start"};
    align-items: ${({$ai}) => $ai || "flex-start"};
    gap: ${({$gap}) => $gap};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "flex-start"};
    align-items: ${({$ai}) => $ai || "flex-start"};
    gap: ${({$gap}) => $gap};
`;

export const Image = styled.img`
    width: 100%;
`;

export const Icon = styled.img`
    width: 100%;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "15px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const InputReason = styled.input.attrs({
    type: "text",
    placeholder: "처리 사유는 명확하고 간결하게 작성해주세요."
})`
    width: 440px;
    height: 40px;
    font-size: 15px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    outline: none;
`;

export const Button = styled.button`
    align-self: center;
    padding: 10px 50px;
    background-color: ${({$bg}) => $bg};
    border: none;
    border-radius: 15px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-top: 20px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const Loading = styled.div`
    background-color: #F4F3E9;
    border-radius: 10px;
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;