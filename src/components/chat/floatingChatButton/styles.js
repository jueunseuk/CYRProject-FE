import styled from "styled-components";

export const YulTalk = styled.img`
    position: fixed;
    bottom: 100px;
    width: 60px;
    cursor: pointer;
    z-index: 999;
    filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4));

    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`;