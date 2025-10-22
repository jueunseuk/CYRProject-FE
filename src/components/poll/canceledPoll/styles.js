import styled from "styled-components";

export const PollItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid #eee;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    padding : 10px 8px;
    gap: 15px;
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        scale: 1.03;
    }
`;
