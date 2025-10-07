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
    position: relative;
    background-color: #fcf9e5ff;
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "flex-start"};
    align-items: ${({$ai}) => $ai || "center"};
    width: 100%;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const Icon = styled.img`
    width: ${({$width}) => $width || "15px"};
    height: ${({$height}) => $height || "15px"};
    cursor: pointer;
    position: absolute;
    right: 15px;
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

export const FileInput = styled.input`
    display: none;
`;

export const Input = styled.input.attrs({
    type: "text"
})`
    width: ${({$width}) => $width};
    height: 40px;
    font-size: 13px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    outline: none;
`;

export const TextArea = styled.textarea`
    font-size: 14px;
    width: 100%;
    min-height: 60px;
    max-height: 100px;
    border: none;
    padding: 10px;
    font-size: 13px;
    resize: vertical;

`;

export const Select = styled.select`
    border: none;
    width: 150px;
    height: 40px;
    padding: 10px;
`;

export const InputImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: white;
    object-fit: cover;
    cursor: pointer;
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
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;
