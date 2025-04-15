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
    font-weight: 600;
`;

export const Select = styled.select`
    padding: 4px;
    font-size: 12px;
`;

export const OptionGroup = styled.optgroup`

`;

export const Option = styled.option`

`;