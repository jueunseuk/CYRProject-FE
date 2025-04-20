import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 20px;
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

export const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin-top: 25px;
`;

export const DayWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
`;

export const DayItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 700;
    width: 110px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 8px;
    color: ${({$color}) => $color || "black"};
`;

export const DateWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
`;

export const DateItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 110px;
    min-height: 120px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    background-color: ${({$bg}) => $bg || ""};
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    ${({ $hoverable }) =>
        $hoverable &&
        `&:hover {
          transform: translateY(-5px) scale(1.5);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1;
    }`}
`;