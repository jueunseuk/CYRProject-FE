import styled from "styled-components";

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
`;