import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { UserProfileImage } from "@/common/func/UserProfile";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate } from "react-router-dom";

const NicknameSearch = ({data, pagination}) => {
    const navigate = useNavigate();

    const handleNavigateUserPage = (userId) => {
        navigate(`/users/${userId}`);
    };

    return (
        <BC.VerticalWrapper $ai={"flex-start"} $jc={"flex-start"} $gap={"10px"}>
            <BC.Text $size={"13px"}>총 <BC.Text $size={"13px"} $weight={"600"} style={{display: "inline"}}>{pagination.totalElements}</BC.Text>건의 검색 결과</BC.Text>
            {data.map((user, idx) => (
                <S.UserItem key={user.userId} onClick={() => handleNavigateUserPage(user.userId)}>
                    <UserProfileImage width={"50px"} height={"50px"} border={"50px"} user={user} />
                    <BC.VerticalWrapper $ai={"flex-start"} $gap={"3px"} style={{width: "600px"}}>
                        <BC.HorizontalWrapper $gap={"8px"}>
                            <BC.Text $size={"13px"}>{user.role}</BC.Text>
                            <BC.Text $size={"16px"} $weight={"600"} dangerouslySetInnerHTML={{ __html: user.highlightNickname }}/>
                            <BC.Text $size={"13px"} $color={"#878787"}>{formatDate(user.createdAt, 1)} 가입</BC.Text>
                        </BC.HorizontalWrapper>
                        <BC.Text $size={"13px"} $color={"#878787"} style={{width: "400px"}}>{user.introduction === null ? "자기소개가 없습니다." : user.introduction}</BC.Text>
                    </BC.VerticalWrapper>
                    <BC.Text $size={"15px"}>활동 온도 : <BC.Text $weight={"700"} $size={"15px"} style={{display: "inline"}}>{user.temperature} ℃</BC.Text></BC.Text>
                </S.UserItem>
            ))}
        </BC.VerticalWrapper>
    );
};

export default NicknameSearch;