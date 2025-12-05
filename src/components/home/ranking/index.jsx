import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as R from "@/apis/ranking";
import first from "@/assets/icon/rank/first.svg";
import second from "@/assets/icon/rank/second.svg";
import third from "@/assets/icon/rank/third.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/localStorage";

const RankingSummary = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [rankData, setRankData] = useState([]);
    
    const handleNavigateRanking = () => {
        navigate("/ranking");
    };

    const handleNavigateUser = (userId) => {
        navigate(`/users/${userId}`);
    };

    const fetchRankingData = async () => {
        try {
            const response = await R.getSummaryRankingData();
            setRankData(response.data);
        } catch(error) {
            
        }
    };

    useEffect(() => {
        fetchRankingData();
    }, []);

    const attendanceRank = rankData
        .filter((r) => r.type === "ATTENDANCE" && r.period === "TOTAL")
        .slice(0, 3);

    const cheerTotalRank = rankData
        .filter((r) => r.type === "CHEER" && r.period === "TOTAL")
        .slice(0, 3);

    const cheerDailyRank = rankData
        .filter((r) => r.type === "CHEER" && r.period === "DAILY")
        .slice(0, 3);

    const glassRank = rankData
        .filter((r) => r.type === "GLASS" && r.period === "TOTAL")
        .slice(0, 3);

    const getBackground = (priority) => {
        if(priority === 1) {
            return "linear-gradient(-90deg, #FFD700, #fffaddff)";
        } else if(priority === 2) {
            return "linear-gradient(-90deg, #C0C0C0, #fafafaff)";
        } else {
            return "linear-gradient(-90deg, #CD7F32, #fff3dfff)";
        }
    };

    const getIcon = (priority) => {
        if(priority === 1) {
            return first;
        } else if(priority === 2) {
            return second;
        } else {
            return third;
        }
    };

    return (
        <>
            <S.Wrapper>
                <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{borderBottom: "2px solid black", padding: "2px 10px"}}>
                    <BC.Text $size={"16px"} $weight={"600"}>커뮤니티 랭킹</BC.Text>
                    <BC.Text $size={"12px"} style={{cursor: "pointer"}} onClick={handleNavigateRanking}>더보기</BC.Text>
                </BC.HorizontalWrapper>
                <BC.HorizontalWrapper $jc={"flex-start"} $gap={"10px"} style={{overflowX: "auto"}}>
                    <BC.VerticalWrapper $jc={"flex-start"} $gap={"7px"} style={{width: "220px", height: "150px", marginTop: "5px"}}>
                        <BC.Text $size={"15px"} $weight={"600"} style={{margin: "3px"}}>출석</BC.Text>
                        {attendanceRank.map((rank) => (
                            <S.RankItem key={rank.rankingId} style={{background: getBackground(rank.priority)}}>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Icon src={getIcon(rank.priority)} $w={"20px"} $h={"20px"} />
                                    <BC.Text $weight={"500"} style={{cursor: "pointer"}} onClick={() => handleNavigateUser(rank.userId)}>{rank.nickname}</BC.Text>
                                </BC.HorizontalWrapper>
                                <BC.Text $weight={"600"}>{rank.score}회</BC.Text>
                            </S.RankItem>
                        ))}
                    </BC.VerticalWrapper>
                    <BC.VerticalWrapper $jc={"flex-start"} $gap={"7px"} style={{width: "220px", height: "150px", marginTop: "5px"}}>
                        <BC.Text $size={"15px"} $weight={"600"} style={{margin: "3px"}}>총 응원</BC.Text>
                        {cheerTotalRank.map((rank) => (
                            <S.RankItem key={rank.rankingId} style={{background: getBackground(rank.priority)}}>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Icon src={getIcon(rank.priority)} $w={"20px"} $h={"20px"} />
                                    <BC.Text $weight={"500"} style={{cursor: "pointer"}} onClick={() => handleNavigateUser(rank.userId)}>{rank.nickname}</BC.Text>
                                </BC.HorizontalWrapper>
                                <BC.Text $weight={"600"}>{rank.score}회</BC.Text>
                            </S.RankItem>
                        ))}
                    </BC.VerticalWrapper>
                    <BC.VerticalWrapper $jc={"flex-start"} $gap={"7px"} style={{width: "220px", height: "150px", marginTop: "5px"}}>
                        <BC.Text $size={"15px"} $weight={"600"} style={{margin: "3px"}}>일일 응원</BC.Text>
                        {cheerDailyRank.map((rank) => (
                            <S.RankItem key={rank.rankingId} style={{background: getBackground(rank.priority)}}>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Icon src={getIcon(rank.priority)} $w={"20px"} $h={"20px"} />
                                    <BC.Text $weight={"500"} style={{cursor: "pointer"}} onClick={() => handleNavigateUser(rank.userId)}>{rank.nickname}</BC.Text>
                                </BC.HorizontalWrapper>
                                <BC.Text $weight={"600"}>{rank.score}회</BC.Text>
                            </S.RankItem>
                        ))}
                    </BC.VerticalWrapper>
                    <BC.VerticalWrapper $jc={"flex-start"} $gap={"7px"} style={{width: "220px", height: "150px", marginTop: "5px"}}>
                        <BC.Text $size={"15px"} $weight={"600"} style={{margin: "3px"}}>유리 조각</BC.Text>
                        {glassRank.map((rank) => (
                            <S.RankItem key={rank.rankingId} style={{background: getBackground(rank.priority)}}>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Icon src={getIcon(rank.priority)} $w={"20px"} $h={"20px"} />
                                    <BC.Text $weight={"500"} style={{cursor: "pointer"}} onClick={() => handleNavigateUser(rank.userId)}>{rank.nickname}</BC.Text>
                                </BC.HorizontalWrapper>
                                <BC.Text $weight={"600"}>{rank.score}회</BC.Text>
                            </S.RankItem>
                        ))}
                    </BC.VerticalWrapper>
                </BC.HorizontalWrapper>
            </S.Wrapper>
        </>
    )
}

export default RankingSummary;