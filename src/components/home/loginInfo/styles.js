import styled from "styled-components";
import profile from "@/assets/image/default_profile.jpg";

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
    justify-content: space-between;
    width: 170px;
`;

export const ProfileImage = styled.img.attrs({
    src: profile,
    alt: "Profile Image"
})`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
`;

export const Text = styled.div`
    font-size: ${({size}) => size};
    font-weight: ${({weight}) => weight};
    color: ${({color}) => color || "black"};
`;
    
export const LevelArea = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const LevelSet = styled.div`
    display: flex;
    gap: 5px;
`;

export const LevelText = styled.div`
    font-size: 10px;
`;

export const LevelIcon = styled.img.attrs((props) => {
    src: props.src
    alt: "Level Icon"
})`
    width: 10px;
    height: 10px;
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