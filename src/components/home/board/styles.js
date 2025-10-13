import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 2.5px 0;
`;

export const Contour = styled.hr`
    width: 100%;
    border: 0;
    background-color: #E7E7E7;
    height: 1px;
    margin: 0;
`;

export const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    min-height: 36px;
    padding: 10px 15px;
`;

export const SubBoardBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const SubTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 13px;
    cursor: pointer;
    padding: 0 0 0 3px;

    &:hover {
        text-decoration: underline;
    }
`;

export const DashArea = styled.img`
    width: 8px;
    height: 8px;
`;

export const IconArea = styled.img`
    width: 9px;
    height: 9px;
`;
