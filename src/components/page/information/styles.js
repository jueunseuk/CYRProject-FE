import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
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

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const ProfileImage = styled.img.attrs({
    alt: ""
})`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;

    &: hover {
        cursor: pointer;
    }
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
    alt: "Icon"
})`
    width: ${({$width}) => $width || "12px"};
    height: ${({$height}) => $height || "12px"};

    &: hover {
        cursor: pointer;
    }
`;

export const DotLine = styled.div`
    flex: 1;
    border-bottom: 1px dotted #999;
    margin: 0 20px;
    user-select: none;
`;