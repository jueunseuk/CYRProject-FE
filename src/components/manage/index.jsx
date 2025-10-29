import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { useNavigate } from "react-router-dom";
import UserManagement from "./user";

const Management = ({user}) => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.ManagementWrapper>
                <BC.Text $size={"16px"} $weight={"600"}>MEMBER 관리</BC.Text>
                <BC.Text $size={"13px"} style={{marginTop: "5px"}}>커뮤니티 사용자들에 대해 조회, 경고, 차단, 차단 해제 등의 조작을 할 수 있습니다.</BC.Text>
                <UserManagement />
            </S.ManagementWrapper>
            {user.role === "ADMIN" &&
                <S.ManagementWrapper>
                    <BC.Text $size={"16px"} $weight={"600"}>ADMIN</BC.Text>
                    <BC.Text $size={"13px"} style={{marginTop: "5px"}}>MANAGER의 역할에 더해 모든 사용자의 권한을 조정할 수 있습니다.</BC.Text>
                    <UserManagement />
                </S.ManagementWrapper>
            }
        </S.Wrapper>
    );
};

export default Management;