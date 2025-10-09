import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-top: 2px solid black;
    padding: 15px 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
`;

export const ProfileArea = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    width: 170px;
`;

export const ProfileImage = styled.img.attrs({
    alt: "Profile Image"
})`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    object-fit: cover;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap || "0px"};
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size};
    font-weight: ${({$weight}) => $weight};
    color: ${({$color}) => $color || "black"};
`;

export const DotLine = styled.div`
    flex: 1;
    border-bottom: 1px dotted #999;
    margin: 0 8px;
    user-select: none;
`;

export const IconArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    gap: 7px;
`;

export const LevelText = styled.div`
    font-size: 14px;
`;

export const Icon = styled.img.attrs((props) => {
    src: props.src
    alt: "Level Icon"
})`
    width: ${({$width}) => $width || "20px"};
    height: ${({$height}) => $height || "20px"};
`;

export const WriteButton = styled.button`
    width: 170px;
    height: 30px;
    background-color: #C6BC73;
    color: white;
    font-size: 13px;
    border: none;
    cursor: pointer;
`;

export const LinkText = styled.div`
    color: #B8B8B8;
    font-size: 11px;
    text-decoration: underline;
    cursor: pointer;
`;