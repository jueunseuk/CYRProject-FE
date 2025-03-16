import { Outlet } from "react-router-dom";
import styled from "styled-components";

const BackGround = () => {
    return (
        <BackGroundWrapper>
            <Outlet />
        </BackGroundWrapper>
    );
}

export default BackGround;

const BackGroundWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F6F6;
`;