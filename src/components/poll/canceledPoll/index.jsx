import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as P from "@/apis/poll";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import useUserInfo from "@/hooks/localStorage";

const CanceledPoll = () => {
    const user = useUserInfo();
    const [pollData, setPolLData] = useState([]);

    const fetchPollData = async () => {
        try {
            
            const response = await P.getActivePollList({status: "CANCELED"});
            setPolLData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchPollData();
    }, []);

    return (
        <BC.VerticalWrapper>
            <BC.HorizontalWrapper $jc={"flex-start"} $ai={"flex-end"} style={{width: "100%", borderBottom: "2px solid black"}}>
                <BC.Text $size={"16px"} $weight={"600"} style={{padding: "0 10px"}}>취소된 투표</BC.Text>
                <BC.Text $size={"15px"} $weight={"600"}>{pollData.length}개</BC.Text>
            </BC.HorizontalWrapper>
            <BC.HorizontalWrapper $jc={"flex-start"} $ai={"flex-start"} $gap={"23px"} style={{width: "100%", padding: "15px 0", flexWrap: "wrap"}}>
                {pollData.map((poll, idx) => (
                    <S.PollItem key={poll.pollId}>
                        <BC.Text $color={"white"} $bg={poll.isJoin ? "#C6BC73" : "#ccc"} $weight={"800"} style={{width: "100%", textAlign: "center", borderRadius: "5px", padding: "5px 0"}}>{poll.isJoin ? "참여 완료" : "미참여"}</BC.Text>
                        <BC.VerticalWrapper>
                            <BC.Text $size={"16px"} $weight={"600"} style={{textAlign: "center"}}>{poll.title}</BC.Text>
                            <BC.Text $size={"12px"} $color={"#878787"} style={{textAlign: "center"}}>시작: {formatDate(poll.createdAt, 4)}</BC.Text>
                            <BC.Text $size={"12px"} $color={"#878787"} style={{textAlign: "center"}}>종료: {formatDate(poll.closedAt, 4)}</BC.Text>
                        </BC.VerticalWrapper>
                    </S.PollItem>
                ))}
            </BC.HorizontalWrapper>
        </BC.VerticalWrapper>
    );
};

export default CanceledPoll;