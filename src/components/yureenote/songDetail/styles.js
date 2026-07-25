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
    align-items: flex-start;
    gap: 25px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd;
`;

export const SongImagePlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: #f3f1e8;
    color: #999;
    font-size: 13px;
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

export const Introduction = styled.div`
    max-width: 650px;
    color: #666;
    font-size: 13px;
    line-height: 20px;
    white-space: pre-wrap;
`;

export const MusicLink = styled.a`
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0 12px;
    border: 1px solid #c6bc73;
    border-radius: 5px;
    color: #766c32;
    font-size: 12px;
    text-decoration: none;

    &:hover {
        background-color: #f7f5e9;
    }
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
    grid-template-columns: 130px 1fr;
    align-items: center;
    gap: 20px;
    min-height: 47px;
    padding: 9px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    &:hover {
        background-color: #faf9f4;
    }
`;

export const CreatorBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
`;

export const CreatorName = styled.div`
    padding: 4px 9px;
    border-radius: 5px;
    background-color: #f3f1e6;
    color: #665d31;
    font-size: 12px;
`;

export const Lyrics = styled.div`
    padding: 22px;
    border-radius: 8px;
    background-color: #fafafa;
    color: #555;
    font-size: 14px;
    line-height: 28px;
    white-space: pre-wrap;
`;

export const EmptySection = styled.div`
    width: 100%;
    padding: 35px 0;
    border-radius: 8px;
    background-color: #fafafa;
    color: #999;
    font-size: 13px;
    text-align: center;
`;

export const MessageBox = styled.div`
    width: 100%;
    padding: 80px 0;
    color: #888;
    font-size: 14px;
    text-align: center;
`;