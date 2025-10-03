import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    padding: 15px 15px;
    width: 100%;
    gap: 5px;
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

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const GraphWrapper = styled.div`
    width: 100%;
    height: 300px;
`;

export const EmptyGraphWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #cacacaff;
`;

export const FieldWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 8px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    
    &: hover {
        scale: 1.01;
        background-color: #f1f1f1ff;
    }
`;
