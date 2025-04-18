import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;

export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 13px;
    margin-top: 10px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 20px;
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const GalleryUploadButton = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    width: 225px;
    height: 30px;
    border: 1px solid #E7E7E7;
    background-color: white;
    color: #C6BC73;
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 11px;
    height: 11px;
`;

export const SortArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
`;

export const Sort = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: ${({$weight}) => $weight || "400"};
    cursor: default;
`;

export const Contour = styled.hr`
    width: 100%;
    border: 0;
    background-color: black;
    height: 2px;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const GalleryArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 7px;
`;

export const GalleryItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    width: 200px;
    height: 200px;
    background-color: black;
    background-image: url(${props => encodeURI(props.$imageUrl)});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        background-color: rgba(0, 0, 0, 0);
        transition: background 0.3s ease;
    }

    &:hover::after {
        background-color: rgba(0, 0, 0, 0.65);
    }

    &:hover div {
        opacity: 1;
    }
`;

export const OverlayText = styled.div`
    z-index: 2;
    color: white;
    width: 75%;
    text-align: center;
    font-size: ${({$size}) => $size};
    font-weight: ${({$weight}) => $weight};
    opacity: 0;
    transition: opacity 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;

export const PaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 590px;
    gap: 10px;
    font-size: 12px;
    margin-top: 20px;
`;

export const PageButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: ${({$border}) => $border || "0px"} solid #C6BC73;
    color: #C6BC73;
    font-weight: ${({$weight}) => $weight || "400"};

    &:hover {
        text-decoration: underline;
    }
`;