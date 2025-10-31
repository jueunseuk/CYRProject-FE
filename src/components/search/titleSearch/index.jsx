import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate } from "react-router-dom";

const TitleSearch = ({data, pagination}) => {
    const navigate = useNavigate();

    const handleNavigateUserPage = (post) => {
        navigate(`/${post.name}/${post.postId}`);
    };

    return (
        <BC.VerticalWrapper $ai={"flex-start"} $jc={"flex-start"} $gap={"10px"}>
            <BC.Text $size={"13px"}>총 <BC.Text $size={"13px"} $weight={"600"} style={{display: "inline"}}>{pagination.totalElements}</BC.Text>건의 검색 결과</BC.Text>
            {data.map((post, idx) => (
                <S.PostItem key={post.postId} onClick={() => handleNavigateUserPage(post)}>
                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"} style={{width: "600px"}}>
                        <BC.HorizontalWrapper $gap={"8px"}>
                            <BC.Text $size={"15px"}>[ {post.korean} ]</BC.Text>
                            <BC.Text $size={"15px"} $weight={"600"} dangerouslySetInnerHTML={{ __html: post.title }}/>
                            <BC.Text $size={"13px"} $color={"#878787"}>{formatDate(post.createdAt, 1)}</BC.Text>
                        </BC.HorizontalWrapper>
                        <BC.Text $color={"#878787"} $size={"13px"} dangerouslySetInnerHTML={{ __html: post.content }}></BC.Text>
                    </BC.VerticalWrapper>
                </S.PostItem>
            ))}
        </BC.VerticalWrapper>
    );
};

export default TitleSearch;