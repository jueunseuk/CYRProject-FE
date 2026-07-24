import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
`;

export const BackButton = styled.button`
    margin-bottom: 20px;
    padding: 0;
    border: none;
    background: none;
    color: #777;
    font-size: 13px;
    cursor: pointer;

    &:hover {
        color: #333;
        text-decoration: underline;
    }
`;

export const AlbumHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

export const AlbumImagePlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    flex-shrink: 0;
    background-color: #f3f1e8;
    color: #999;
    font-size: 13px;
`;

export const SongBox = styled.div`
    width: 100%;
    border-top: 1px solid #ddd;
`;

export const SongRow = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr 100px;
    align-items: center;
    gap: 15px;
    padding: 14px 12px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    &:hover {
        background-color: #faf9f4;
    }
`;

export const TitleBadge = styled.div`
    padding: 3px 7px;
    border-radius: 4px;
    background-color: #c6bc73;
    color: white;
    font-size: 10px;
`;