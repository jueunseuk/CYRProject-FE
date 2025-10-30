import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as M from "@/apis/manager";
import { useEffect, useState } from "react";
import { UserProfileImage } from "@/common/func/UserProfile";
import { formatDate } from "@/util/dateFormatter";

const UserManagement = () => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("createdAt");
    const [size, setSize] = useState(100);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("ASC");
    const [query, setQuery] = useState("");

    const fetchMemberList = async () => {
        try {
            const response = await M.getMemberList();
            setUserData(response.data);
            setFilteredData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchMemberList();
    }, [page, size, sort, status, direction]);

    const handleUserInActive = async (user) => {
        try {
            const patchStatus = {status : user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"};
            await M.updateUserStatus(user.userId, patchStatus);

        } catch(error) {

        } finally {
            fetchMemberList();
        }
    };

    const handleUserWarnCnt = async (user, amount) => {
        try {
            await M.updateUserWarnCnt(user.userId, {"amount": amount});
        } catch(error) {

        } finally {
            fetchMemberList();
        }
    };

    const getUserStatus = (status) => {
        if(status === "ACTIVE") {
            return "활성화";
        } else if(status === "INACTIVE") {
            return "차단";
        } else if(status === "SECCESION") {
            return "탈퇴";
        }
    };

    const getUserStatusColor = (status) => {
        if(status === "ACTIVE") {
            return "green";
        } else if(status === "INACTIVE") {
            return "red";
        } else if(status === "SECCESION") {
            return "#878787";
        }
    };

    return (
        <BC.VerticalWrapper $jc={"flex-start"} style={{maxHeight: "500px", border: "1px solid #878787", marginTop: "10px", overflow: "auto"}}>
            <S.Table>
                <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "25%" }} />
                </colgroup>
                <thead>
                    <S.FirstRow>
                        <S.Column>프로필</S.Column>
                        <S.Column>닉네임</S.Column>
                        <S.Column>가입일</S.Column>
                        <S.Column>권한</S.Column>
                        <S.Column>계정 상태</S.Column>
                        <S.Column>경고 횟수</S.Column>
                    </S.FirstRow>
                </thead>
                <tbody>
                    {filteredData.map((user, idx) => (
                        <S.Row key={user.userId}>
                            <S.Column><UserProfileImage user={user} width={"30px"} height={"30px"} radius={"30px"}/></S.Column>
                            <S.Column style={{width: "10%"}}>{user.nickname}</S.Column>
                            <S.Column>{formatDate(user.createdAt, 1)}</S.Column>
                            <S.Column>{user.role}</S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Text $color={getUserStatusColor(user.status)} $weight={"600"}>{getUserStatus(user.status)}</BC.Text>
                                    <S.Button $size={"12px"} onClick={() => handleUserInActive(user)}>{user.status === "ACTIVE" ? "차단" : "해제"}</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"25px"}>
                                    <S.Button $size={"17px"} onClick={() => handleUserWarnCnt(user, -1)}>-</S.Button>
                                    <BC.Text $weight={"600"} >{user.warn}</BC.Text>
                                    <S.Button $size={"17px"} onClick={() => handleUserWarnCnt(user, 1)}>+</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                        </S.Row>
                    ))}
                </tbody>
            </S.Table>
        </BC.VerticalWrapper>
    );
};

export default UserManagement;