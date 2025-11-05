import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/localStorage";

const RankingSummary = () => {
    const user = useUserInfo();
    const navigate = useNavigate();

    const handleNavigateRanking = () => {
        navigate("/ranking");
    };

    useEffect(() => {
    }, []);

    return (
        <>
            <S.Wrapper>
                <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{borderBottom: "2px solid black", padding: "2px 10px"}}>
                    <BC.Text $size={"16px"} $weight={"600"}>랭킹</BC.Text>
                    <BC.Text $size={"12px"} style={{cursor: "pointer"}} onClick={handleNavigateRanking}>더보기</BC.Text>
                </BC.HorizontalWrapper>
                
            </S.Wrapper>
        </>
    )
}

export default RankingSummary;