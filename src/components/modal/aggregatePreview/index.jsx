import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";

const AggregatePreview = ({onClose, poll}) => {

    return (
        <>
            <S.Wrapper onClick={onClose}>
                <S.Content>
                    <BC.Text $size={"20px"}><BC.Text $size={"20px"} $weight={"600"}>{poll.name}</BC.Text>중간 집계 결과</BC.Text>
                    <BC.VerticalWrapper>
                        {poll.map((p) => (
                            <BC.HorizontalWrapper key={p.pollOptionId} $jc={"flex-start"} $gap={"5px"}>
                                <BC.Text $size={"15px"} $weight={"600"}>{p.content}</BC.Text> =&gt;
                                <BC.Text $size={"15px"} $weight={"600"}>{p.voteCount}</BC.Text>
                            </BC.HorizontalWrapper>
                        ))}
                    </BC.VerticalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default AggregatePreview;