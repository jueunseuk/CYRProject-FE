import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid black;
    padding: 15px 0;
    gap: 10px;
`;

export const DotLine = styled.div`
    flex: 1;
    border-bottom: 1px dotted #999;
    margin: 0 8px;
    user-select: none;
`;

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    transition: all 0.1s ease;

    &:hover {
        scale: 1.03;
    }
`;