import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

export const SkeletonItem = styled.div`
    width: ${({$width}) => $width || "200px"};
    height: ${({$height}) => $height|| "200px"};
    background: linear-gradient(
        135deg,
        #F5F5F5 0%,
        #E0E0E0 50%,
        #F5F5F5 100%
    );
    background-size: ${({$size}) => $size || "600px"} 100%;
    animation: ${shimmer} 5s infinite linear;
    border-radius: ${({$radius}) => $radius || "8px"};
`;
