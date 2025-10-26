import styled from "styled-components";

export const TextMessageWrapper = styled.div`
    display: flex;
    justify-content: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
    border-radius: 12px;
    margin: 5px 0;
    gap: 8px;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
`;