import { useEffect } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const EventBoard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        alert("개발 예정입니다!");
        navigate("/");
    }, [])
    
    return (
        <>
            <></>
        </>
    )
}

export default EventBoard;