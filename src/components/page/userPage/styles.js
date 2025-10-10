import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 50px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
})`
    width: ${({$width}) => $width || "12px"};
`;

export const LinkText = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: #878787;
    text-decoration: underline;

    &: hover {
        cursor: pointer;
    }
`;