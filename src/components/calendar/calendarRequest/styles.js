import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: ${({$gap}) => $gap};
    align-items: ${({$align}) => $align || "center"};
    justify-content: ${({$justify}) => $justify || "center"};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({$gap}) => $gap || "10px"};
    align-items: ${({$align}) => $align};
    justify-content: ${({$justify}) => $justify};
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const RequestArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F3E9;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
`;

export const InputField = styled.textarea`
    font-size: 14px;
    width: 735px;
    height: 65px;
    min-height: 65px;
    max-height: 130px;
    border: 1px solid #E4E4E4;
    outline: none;
    padding: 10px;
    font-size: 15px;
    resize: vertical;
`;

export const RequestButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    background-color: ${({disabled}) => (disabled ? "#B8B8B8" : "#C6BC73")};
    font-weight: 700;
    color: white;
    font-size: 13px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const RequestBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
`;

export const UserProfile = styled.img`
    width: 50px;
    heigth: 50px;
    max-height: 50px;
    border-radius: 50px;
    object-fit: cover;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 13px 15px;
    background-color: #F4F3E9;
    width: 750px;
    border-radius: 10px;
    gap: 10px;
`;

export const IconArea = styled.img`
    width: 9px;
    height: 9px;
`;

export const RequestTextBox = styled.div`
    width: 100%;
    background-color: white;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
`;

export const NoRequestWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;