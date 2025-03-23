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
    width: 100%;
    min-width: 1080px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;