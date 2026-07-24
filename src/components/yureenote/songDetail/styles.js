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

export const SongHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd;
`;

export const AlbumImagePlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    background-color: #f3f1e8;
    color: #999;
    font-size: 13px;
`;

export const TitleBadge = styled.div`
    padding: 3px 7px;
    border-radius: 4px;
    background-color: #c6bc73;
    color: white;
    font-size: 10px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding: 27px 0;
    border-bottom: 1px solid #eee;
`;

export const CreditBox = styled.div`
    width: 100%;
    border-top: 1px solid #eee;
`;

export const CreditRow = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: 20px;
    min-height: 45px;
    padding: 8px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    &:hover {
        background-color: #faf9f4;
    }
`;

export const CreatorName = styled.div`
    padding: 4px 9px;
    border-radius: 5px;
    background-color: #f3f1e6;
    color: #665d31;
    font-size: 12px;
`;

export const Lyrics = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: #fafafa;
    color: #555;
    font-size: 14px;
    line-height: 27px;
    white-space: pre-wrap;
`;