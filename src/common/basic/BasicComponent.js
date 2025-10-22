import styled from "styled-components";

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap};
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({$gap}) => $gap};
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    width: 100%;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
    background-color: ${({$bg}) => $bg || "none"};
`;

export const Image = styled.img`
    width: ${({$w}) => $w};
    height: ${({$h}) => $h};
    object-fit: contain;
`;

export const Icon = styled.img`
    width: ${({$w}) => $w};
    height: ${({$h}) => $h};
`;