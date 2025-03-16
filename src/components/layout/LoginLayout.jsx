import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LoginLayout = () => {
    return (
        <LoginBackGround>
            <Outlet />
        </LoginBackGround>
    );
}

export default LoginLayout;

const LoginBackGround = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin: 0px;
`;