import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 30px;
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
    align-items: flex-start;
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
    border-radius: 8px;
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
    padding: 2px 5px;
    border: 1px solid #C6BC73;
    border-radius: 5px;
    color: #C6BC73;
    font-size: 9px;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
`;

export const IntroductionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    max-width: 700px;
`;

export const AlbumIntroduction = styled.div`
    color: #777;
    font-size: 13px;
    line-height: 21px;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow: hidden;

    ${({$expanded}) => !$expanded && `
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    `}
`;

export const IntroductionButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: #8D7D4F;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;