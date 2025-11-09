import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as P from "@/apis/poll";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import useUserInfo from "@/hooks/localStorage";

const FinishedPoll = () => {
    const user = useUserInfo();
    const [pollData, setPolLData] = useState([]);
    const [selectedPollId, setSelectedPollId] = useState(null);
    const [selectedPollOptionId, setSelectedPollOptionId] = useState(null);

    const fetchPollData = async () => {
        try {
            
            const response = await P.getActivePollList({status: "FINISHED"});
            setPolLData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchPollData();
    }, []);

    const handleVote = async () => {
        try {
            await P.votePoll(selectedPollId, selectedPollOptionId);
            alert("투표 완료!");
            fetchPollData();
        } catch(error) {

        }
    };

    const handleUpdatePoll = async () => {
        
    }

    const handleOptionClick = (pollId, optionId) => {
        setSelectedPollId(pollId);
        setSelectedPollOptionId(optionId);
    };
    console.log(pollData)

    return (
        <BC.VerticalWrapper>
            <BC.HorizontalWrapper $jc={"flex-start"} $ai={"flex-end"} style={{width: "100%", borderBottom: "2px solid black"}}>
                <BC.Text $size={"16px"} $weight={"600"} style={{padding: "0 10px"}}>종료된 투표</BC.Text>
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

                        {poll.imageUrl && <BC.Image src={poll.imageUrl} $w={"100%"} $h={"200px"}/>}

                        <BC.Text $size={"14px"} style={{textAlign: "center"}}>{poll.description}</BC.Text>

                        <BC.VerticalWrapper>
                            <BC.Text $size={"15px"} $weight={"600"} style={{textAlign: "center"}}>&lt;투표 결과&gt;</BC.Text>
                            <BC.Text $size={"14px"} $weight={"500"}>투표자 수 {poll.userCnt}명</BC.Text>
                            <BC.VerticalWrapper style={{marginTop: "5px"}}>
                                {poll.options.map((option, idx) => (
                                    <S.PollOptionItem key={option.pollOptionId} $target={option.pollOptionId === poll.votePollOptionId} $join={poll.isJoin}
                                        onClick={() => handleOptionClick(poll.pollId, option.pollOptionId)}
                                    >
                                        <BC.HorizontalWrapper>
                                            <BC.Text $color={option.pollOptionId === poll.winningOptionId ? "red" : ""} $size={"14px"} $weight={option.pollOptionId === poll.votePollOptionId ? "700" : "500"} style={{width: "20px", textAlign: "center"}}>{idx+1}</BC.Text>
                                            <BC.Text $color={option.pollOptionId === poll.winningOptionId ? "red" : ""} $size={"14px"} $weight={option.pollOptionId === poll.votePollOptionId ? "700" : "500"}>{option.content}</BC.Text>
                                        </BC.HorizontalWrapper>
                                        <BC.Text $color={option.pollOptionId === poll.winningOptionId ? "red" : ""} $size={"14px"} $weight={"600"} style={{textAlign: "center", width: "20px"}}>{option.voteCount ? option.voteCount : 0}</BC.Text>
                                    </S.PollOptionItem>
                                ))}
                            </BC.VerticalWrapper>
                        </BC.VerticalWrapper>
                        
                    </S.PollItem>
                ))}
            </BC.HorizontalWrapper>
        </BC.VerticalWrapper>
    );
};

export default FinishedPoll;