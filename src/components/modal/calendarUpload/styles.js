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
    justify-content: ${({$justify}) => $justify || "flex-start"};
    align-items: center;
    width: 100%;
`;

export const Icon = styled.img`
    width: ${({$width}) => $width || "13px"};
    height: ${({$height}) => $height || "13px"};
    cursor: pointer;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const InputArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputTitle = styled.input.attrs({
    type: "text",
    placeholder: "제목은 간단하게 입력해주세요. (최소 3자, 최대 15자)"
})`
    width: 440px;
    height: 40px;
    font-size: 13px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    outline: none;
`;

export const InputDesc = styled.textarea.attrs({
    placeholder: "설명은 되도록 자세히 작성해주세요! (최소 5자)"
})`
    width: 440px;
    min-height: 100px;
    font-size: 13px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    resize: vertical;
    outline: none;
`;

export const InputDate = styled.input.attrs({
    type: "date"
})`
    width: 130px;
    height: 40px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
`;

export const InputType = styled.select`
    padding: 4px;
    font-size: 13px;
    border: 1px solid #CCC;
    width: 180px;
`;

export const Option = styled.option`
`;

export const SubmitButton = styled.button`
    align-self: center;
    width: 330px;
    height: 40px;
    background-color: ${({ disabled }) => (disabled ? "#B8B8B8" : "#C6BC73")};
    border: none;
    border-radius: 15px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-top: 20px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`;

export const TooltipText = styled.span`
    position: absolute;
    bottom: 150%;
    transform: translateX(-50%);
    background-color: white;
    color: white;
    padding: 15px;
    border-radius: 8px;
    white-space: nowrap;
    z-index: 1;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
`;
