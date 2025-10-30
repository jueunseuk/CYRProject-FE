import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import UserManagement from "./manager";
import AdminManagement from "./admin";

const Management = ({user}) => {

    return (
        <S.Wrapper>
            <S.ManagementWrapper>
                <BC.Text $size={"16px"} $weight={"600"}>MEMBER 관리</BC.Text>
                <BC.Text $size={"13px"} style={{marginTop: "5px"}}>커뮤니티 MEMBER들에 대해 조회, 경고, 권한 변경, 차단, 차단 해제 등의 조작을 할 수 있습니다.</BC.Text>
                <BC.Text $size={"13px"} style={{marginTop: "5px"}}>권한 변경은 ADMIN만 가능합니다.</BC.Text>
                <UserManagement />
            </S.ManagementWrapper>
            {user.role === "ADMIN" &&
                <S.ManagementWrapper>
                    <BC.Text $size={"16px"} $weight={"600"}>MANAGER 관리</BC.Text>
                    <BC.Text $size={"13px"} style={{marginTop: "5px"}}>커뮤니티 MANAGER들에 대해 권한 변경, 차단, 차단 해제 등의 조작을 할 수 있습니다.</BC.Text>
                    <AdminManagement />
                </S.ManagementWrapper>
            }
        </S.Wrapper>
    );
};

export default Management;