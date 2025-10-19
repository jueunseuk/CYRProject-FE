import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 60px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
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

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 20px;
    background-color: #fcf9e5ff;
    gap: 5px;
    border-left: 3px solid #C6BC73;
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
})`
    width: ${({$width}) => $width || "25px"};
`;

export const ItemBox = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 25px 35px;
    border-radius: 10px;
    gap: 15px;

    &:hover {
        background-color: #f7f7f7ff;
    }
`;

export const ColumnContour = styled.div`
    width: 1px;
    height: 75%;
    background-color: #DDD;
`;

export const Button = styled.button`
    width: 280px;
    height: 40px;
    align-self: center;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;
    background: ${({ disabled }) => (disabled ? "#EEE" : "#C6BC73")};
    color: ${({ disabled }) => (disabled ? "#aaa" : "white")};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

    &:hover {
        background: ${({ disabled }) =>
        disabled ? "#EEE" : "#d3c97fff"};
    }
`;

export const LogWrapper = styled.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const LogItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px;
    border-radius: 5px;
    border-bottom: 1px solid #eeeeee;

    &:hover {
        background-color: #f3f3f3ff;
    }
`;

export const TextIcon = styled.div`
    border-radius: 15px;
    background-color: ${({$bg}) => $bg};
    color: ${({$color}) => $color};
    padding: 1px 5px;
    margin: 0 15px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 5px;
`;