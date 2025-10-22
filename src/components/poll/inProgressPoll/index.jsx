import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as P from "@/apis/poll";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import useUserInfo from "@/hooks/localStorage";
import AggregatePreview from "@/components/modal/aggregatePreview";

const InProgressPoll = () => {
    const user = useUserInfo();
    const [pollData, setPolLData] = useState([]);
    const [selectedPollId, setSelectedPollId] = useState(null);
    const [selectedPollOptionId, setSelectedPollOptionId] = useState(null);
    const [openAggregatePreviewModal, setOpenAggregatePreviewModal] = useState(false);
    const [aggregateData, setAggregateData] = useState([]);

    const fetchPollData = async () => {
        try {
            
            const response = await P.getActivePollList({status: "IN_PROGRESS"});
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

    const handleAggregatePreviewPoll = async (pollId) => {
        try {
            const response = await P.aggregatePreviewPoll(pollId);
            setAggregateData(response.data);
            setOpenAggregatePreviewModal(true);
            fetchPollData();
        } catch(error) {

        }
    };

    const handleCancelPoll = async (poll) => {
         try {
            const status = "CANCELED";
            await P.updatePoll(poll.pollId, status);
            fetchPollData();

            alert("투표를 강제로 취소했습니다.")
        } catch(error) {

        }
    };

    const handleOptionClick = (pollId, optionId) => {
        setSelectedPollId(pollId);
        setSelectedPollOptionId(optionId);
    };

    return (
        <BC.VerticalWrapper>
            <BC.HorizontalWrapper $jc={"flex-start"} $ai={"flex-end"} style={{width: "100%", borderBottom: "2px solid black"}}>
                <BC.Text $size={"19px"} $weight={"600"} style={{marginRight: "10px"}}>진행 중인 투표</BC.Text>
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
                            {poll.options.map((option, idx) => (
                                <S.PollOptionItem key={option.pollOptionId} $target={option.pollOptionId === poll.votePollOptionId} $join={poll.isJoin}
                                    onClick={() => handleOptionClick(poll.pollId, option.pollOptionId)}
                                >
                                    <BC.Text $size={"14px"} $weight={option.pollOptionId === poll.votePollOptionId ? "700" : "500"} style={{width: "20px", textAlign: "center"}}>{idx+1}</BC.Text>
                                    <BC.Text $size={"14px"} $weight={option.pollOptionId === poll.votePollOptionId ? "700" : "500"}>{option.content}</BC.Text>
                                </S.PollOptionItem>
                            ))}
                        </BC.VerticalWrapper>
                        {!poll.isJoin && <S.Button disabled={poll.pollId !== selectedPollId}
                            onClick={handleVote}
                        >
                            투표
                        </S.Button>}
                        { (user?.role === "ADMIN" || user?.role === "MANAGER") &&
                            <BC.VerticalWrapper $gap={"8px"}>
                                <BC.HorizontalWrapper $jc={"space-between"} style={{width: "100%"}}>
                                    <S.Option $bg={"#7d7fff"} $hbg={"#8d8effff"} onClick={() => handleAggregatePreviewPoll(poll.pollId)}>중간 집계</S.Option>
                                    <S.Option $bg={"#ff7d7d"} $hbg={"#ff8d8dff"} onClick={() => handleCancelPoll(poll)}>투표 취소</S.Option>
                                </BC.HorizontalWrapper>
                            </BC.VerticalWrapper>
                        }
                    </S.PollItem>
                ))}
            </BC.HorizontalWrapper>
            {openAggregatePreviewModal && <AggregatePreview onClose={() => setOpenAggregatePreviewModal(false)} poll={aggregateData} />}
        </BC.VerticalWrapper>
    );
};

export default InProgressPoll;