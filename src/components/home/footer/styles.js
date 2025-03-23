import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1060px;
    margin-bottom: 35px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Text = styled.span`
    font-size: 13px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;