import styled from "styled-components";
import banner from "@/assets/image/banner.png";

export const BannerImage = styled.img.attrs({
    src: banner,
    alt: "Banner Image"
})`
    width: 100%;
    heigth: 500px;
    cursor: pointer;
    margin-bottom: 10px;
`;
