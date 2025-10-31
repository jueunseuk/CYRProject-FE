import styled from "styled-components";

export const PostItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }

    mark {
        font-weight: 700;
        padding: 0 1px;
        border-radius: 3px;
    }
`;