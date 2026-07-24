import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 25px;
`;

export const SearchArea = styled.div`
    display: flex;
    gap: 7px;

    input {
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
`;

export const SearchButton = styled.button`
    height: 36px;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #c6bc73;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
`;

export const FilterArea = styled.div`
    display: flex;
    gap: 7px;
    margin-bottom: 20px;
`;

export const FilterButton = styled.button`
    padding: 7px 14px;
    border: 1px solid ${({$active}) => $active ? "#c6bc73" : "#ddd"};
    border-radius: 20px;
    background-color: ${({$active}) => $active ? "#c6bc73" : "white"};
    color: ${({$active}) => $active ? "white" : "#555"};
    cursor: pointer;
`;

export const AlbumGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

export const AlbumCard = styled.div`
    overflow: hidden;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
    }

    > img,
    > div:first-child {
        aspect-ratio: 1 / 1;
    }
`;

export const ImagePlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f3f1e8;
    color: #999;
    font-size: 14px;
`;

export const AlbumContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 16px;
`;

export const Introduction = styled.div`
    min-height: 38px;
    color: #777;
    font-size: 13px;
    line-height: 19px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;