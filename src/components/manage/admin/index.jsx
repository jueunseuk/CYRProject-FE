import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/admin";
import search from "@/assets/icon/chat/search.svg";
import { useEffect, useState } from "react";
import { UserProfileImage } from "@/common/func/UserProfile";
import { formatDate } from "@/util/dateFormatter";

const AdminManagement = () => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("createdAt");
    const [size, setSize] = useState(100);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("ASC");
    const [searchText, setSearchText] = useState("");

    const fetchAdminList = async () => {
        try {
            const response = await A.getManagerList({page, sort, size, direction});
            setUserData(response.data);
            setFilteredData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchAdminList();
    }, [page, size, sort, status, direction]);

    const handleUserInActive = async (user) => {
        try {
            const patchStatus = {status : user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"};
            await M.updateUserStatus(user.userId, patchStatus);

        } catch(error) {

        } finally {
            fetchAdminList();
        }
    };

    const handleUserRole = async (user, role) => {
        try {
            await A.updateUserRole(user.userId, {"role": role});
        } catch(error) {

        } finally {
            fetchAdminList();
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = userData.filter((room) =>
            room.nickname.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
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
            <BC.HorizontalWrapper $gap={"15px"} style={{width: "50%", padding: "5px 0"}}>
                <BC.Icon src={search}/>
                <BC.Input type="search" $w={"70%"} style={{padding: "5px", border: "none", borderBottom: "1px solid black", background: "linear-gradient(0deg, #F8F8F8, white 30%)"}}
                    placeholder="닉네임으로 검색.."
                    onChange={handleSearch}
                />
            </BC.HorizontalWrapper>
            <S.Table>
                <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "30%" }} />
                </colgroup>
                <thead>
                    <S.FirstRow>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>프로필</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>닉네임</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>가입일</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>권한</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>계정 상태</S.Column>
                    </S.FirstRow>
                </thead>
                <tbody>
                    {filteredData.map((user, idx) => (
                        <S.Row key={user.userId}>
                            <S.Column><UserProfileImage user={user} width={"30px"} height={"30px"} radius={"30px"}/></S.Column>
                            <S.Column style={{width: "10%"}}>{user.nickname}</S.Column>
                            <S.Column>{formatDate(user.createdAt, 1)}</S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Text $weight={"600"}>{user.role}</BC.Text>
                                    <S.Button onClick={() => handleUserRole(user, "MEMBER")}>강등</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Text $color={getUserStatusColor(user.status)} $weight={"600"}>{getUserStatus(user.status)}</BC.Text>
                                    <S.Button $size={"12px"} onClick={() => handleUserInActive(user)}>{user.status === "ACTIVE" ? "차단" : "해제"}</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                        </S.Row>
                    ))}
                </tbody>
            </S.Table>
        </BC.VerticalWrapper>
    );
};

export default AdminManagement;