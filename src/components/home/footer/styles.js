import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 50px 0;
    gap: 180px;
    background-color: #faf7e2ff;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

export const Text = styled.span`
    font-size: 13px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        font-weight: 500;
    }
`;

export const LinkText = styled.a`
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        font-weight: 500;
    }
`;