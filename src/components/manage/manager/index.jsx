import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as M from "@/apis/manager";
import * as A from "@/apis/admin";
import search from "@/assets/icon/chat/search.svg";
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
    const [searchText, setSearchText] = useState("");
    const [asset, setAsset] = useState("warn");

    const fetchMemberList = async () => {
        try {
            const response = await M.getMemberList({page, sort, size, direction});
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

    const handleUserAsset = async (user, amount) => {
        try {
            await M.updateUserAsset(user.userId, asset, {"amount": amount});
        } catch(error) {

        } finally {
            fetchMemberList();
        }
    };

    const handleUserRole = async (user, role) => {
        try {
            await A.updateUserRole(user.userId, {"role": role});
        } catch(error) {

        } finally {
            fetchMemberList();
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = userData.filter((user) =>
            user.nickname.toLowerCase().includes(value)
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

    const getUserAsset = (user) => {
        switch(asset) {
            case "warn": return user.warn;
            case "glass": return user.glass;
            case "sand": return user.sand;
            case "temperature": return user.temperature;
        }
    };

    const getAssetUnit = () => {
        switch(asset) {
            case "temperature": return 50;
            default: return 1;
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
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                </colgroup>
                <thead>
                    <S.FirstRow>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>프로필</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>닉네임</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>가입일</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>권한</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>계정 상태</S.Column>
                        <S.Column style={{fontWeight: "600", fontSize: "14px"}}>
                            <S.Select value={asset} onChange={(e) => setAsset(e.target.value)}>
                                <S.Option value="warn">경고 횟수</S.Option>
                                <S.Option value="glass">유리 조각</S.Option>
                                <S.Option value="sand">모래알</S.Option>
                                <S.Option value="temperature">활동 온도</S.Option>
                            </S.Select>
                        </S.Column>
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
                                    <S.Button onClick={() => handleUserRole(user, "MANAGER")}>등업</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"10px"}>
                                    <BC.Text $color={getUserStatusColor(user.status)} $weight={"600"}>{getUserStatus(user.status)}</BC.Text>
                                    <S.Button $size={"12px"} onClick={() => handleUserInActive(user)}>{user.status === "ACTIVE" ? "차단" : "해제"}</S.Button>
                                </BC.HorizontalWrapper>
                            </S.Column>
                            <S.Column>
                                <BC.HorizontalWrapper $gap={"20px"}>
                                    <S.Button $size={"17px"} onClick={() => handleUserAsset(user, -getAssetUnit())}>-</S.Button>
                                    <BC.Text $weight={"600"} >{getUserAsset(user)}</BC.Text>
                                    <S.Button $size={"17px"} onClick={() => handleUserAsset(user, getAssetUnit())}>+</S.Button>
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