import { Outlet } from "react-router-dom";
import styled from "styled-components";

const HomeLayout = () => {
    return (
        <HomeBackGround>
            <Outlet />
        </HomeBackGround>
    );
}

export default HomeLayout;

const HomeBackGround = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin: 0px;
`;