import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 1080px;
    margin-bottom: 35px;
    gap: 90px;
    padding: 0px 30px;
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