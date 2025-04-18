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
    justify-content: space-between;
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
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
`;

export const Text = styled.div`
    font-size: ${({size}) => size};
    font-weight: ${({$weight}) => $weight};
    color: ${({color}) => color || "black"};
`;
    
export const LevelArea = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 170px;
    flex-wrap: wrap-reverse;
    gap: 12px;
`;

export const LevelSet = styled.div`
    display: flex;
    gap: 7px;
`;

export const LevelText = styled.div`
    font-size: 14px;
`;

export const LevelIcon = styled.img.attrs((props) => {
    src: props.src
    alt: "Level Icon"
})`
    width: 15px;
    height: 15px;
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