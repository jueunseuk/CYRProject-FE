import styled from "styled-components";

export const GalleryItem = styled.div`
    display: flex;
    justify-content: space-between;
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

export const Image = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
`;