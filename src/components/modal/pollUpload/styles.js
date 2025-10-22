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
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.5);
`;

export const Icon = styled.img`
    width: ${({$width}) => $width || "13px"};
    height: ${({$height}) => $height || "13px"};
    cursor: pointer;
`;

export const InputText = styled.input.attrs({
    type: "text"
})`
    width: 440px;
    font-size: 13px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    outline: none;
`;

export const InputDate = styled.input.attrs({
    type: "datetime-local",
    step: "300"
})`
    width: 200px;
    font-size: 13px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

export const Select = styled.select`
    padding: 10px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid #CCC;
    width: 100px;
    border-radius: 8px;
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
    border: 1px solid #9C9589;
    border-radius: 8px;
    white-space: nowrap;
    z-index: 1;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
`;

export const FileArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
`;

export const FileUploadButton = styled.div`
    width: 80px;
    height: 80px;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    cursor: pointer;
`;

export const FileItem = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
`;

export const FileInput = styled.input`
    display: none;
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
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

    &: hover {
        background-color: ${({$hbg}) => $hbg};
    }
`;

export const Index = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const OptionItem = styled.div`
    display: flex;
    width: 100%;
    gap: 5px;
    transition: all 0.3s ease;

    &:hover {
        scale: 1.03;
    }
`;