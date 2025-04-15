import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Input = styled.input`
    width: ${({$width}) => $width};
    height: ${({$height}) => $height};
    outline: none;
    border: 1px solid ${({$border}) => $border};
    padding: 8px 12px;
    font-size: 16px;
    font-weight: 500;
`;

export const Select = styled.select`
    padding: 4px;
    font-size: 13px;
    border: 1px solid #CCC;
    width: 180px;
`;

export const OptionGroup = styled.optgroup`
    font-size: 14px;
    font-weight: 700;
`;
    
export const Option = styled.option`
`;

export const SubmitButton = styled.button`
    align-self: center;
    width: 100px;
    height: 40px;
    background-color: ${({ disabled }) => (disabled ? "#B8B8B8" : "#C6BC73")};
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-top: 65px;
    cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;