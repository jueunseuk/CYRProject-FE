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

export const LinkText = styled.a`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
    text-decoration: underline;
`;

export const Image = styled.img`
    width: ${({$w}) => $w};
    height: ${({$h}) => $h};
    object-fit: ${({$fit}) => $fit || "containt"};
`;

export const Icon = styled.img`
    width: ${({$w}) => $w};
    height: ${({$h}) => $h};
`;

export const Contour = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({$bg}) => $bg};
`;

export const Input = styled.input`
    width: ${({$w}) => $w};
    height: ${({$h}) => $h};
    outline: none;
`;