import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1080px;
    height: 525px;
    margin-bottom: 10px;
`;

export const BannerImage = styled.img`
    cursor: pointer;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap};
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    height: 25px;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "11px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        scale: 1.01;
    }
`;

export const Icon = styled.img`
    width: ${({$width}) => $width || "13px"};
    height: ${({$height}) => $height || "13px"};
    cursor: pointer;
`;