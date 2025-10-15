import * as S from "./styles";
import * as U from "@/apis/user";
import * as G from "@/apis/glass";
import glass from "@/assets/icon/user/glass.svg";
import sand from "@/assets/icon/user/sand.svg";
import furnace from "@/assets/icon/user/furnace.svg";
import shop from "@/assets/icon/user/shop.svg";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import { useNavigate } from "react-router-dom";

const Craft = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        glass: 0,
        sand: 0,
        temperature: 0,
        role: "GUEST"
    });
    const [sort, setSort] = useState("createdAt");
    const [direction, setDirection] = useState("DESC");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(30);
    const [logData, setLogData] = useState([]);

    const fetchUserData = async () => {
        try {
            const response = await U.getUserSidebar();
            setUserData(response.data);
        } catch (error) {

        }
    };

    const fetchLogData = async () => {
        try {
            const response = await G.getAllGlassLog({sort, direction, page, size});
            setLogData(response.data);
        } catch (error) {

        }
    };
    
    useEffect(() => {
        fetchUserData();
        fetchLogData();
    }, []);

    const clickConvertGlass = async () => {
        try {
            await U.postConvertGlass();
            alert("유리 조각 하나 제작 완료!");
            await fetchUserData();
            await fetchLogData();
        } catch (error) {

        }
    };

    const getCreatedAtColor = (date) => {
        if(!date) return 0;
        const now = new Date();
        const createdAt = new Date(date);
        return Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));
    };

    const getLogAttribute = (log) => {
        if(!log) return {color: "", bg: "", text: ""};

        if(log.name === "전환") {
            const att = {color: "#2E7D32", bg: "#E8F5E9", text: "Convert"};
            return att;
        } else if(log.name === "이벤트") {
            const att = {color: "#F9A825", bg: "#FFF8E1", text: "Event"};
            return att;
        } else if(log.name === "상점") {
            const att = {color: "#8D6E63", bg: "#EFEBE9", text: "Shop"};
            return att;
        }
    };

    const handleNavigateToShop = () => {
        navigate("/user/shop");
    };

    const handleNavigateToUserPage = (userId) => {
        navigate(`/users/${userId}`);
    }

    return (
        <S.Wrapper>
            <S.VerticalWrapper $gap={"20px"}>
                <S.Text $size={"25px"} $weight={"700"} style={{textAlign: "center"}}>유리공방</S.Text>
                <S.HorizontalWrapper $gap={"10px"}>
                    <S.Icon src={glass} $width={"20px"}/>
                    <S.Text $size={"20px"} $weight={"700"}>{userData.glass}</S.Text>
                </S.HorizontalWrapper>
                <S.QuoteWrapper>
                    <S.Text $size={"15px"} $weight={"600"}>아래의 조건을 모두 만족하면 유리 조각 하나를 얻을 수 있습니다.</S.Text>
                    <S.Text $size={"14px"} style={{textIndent: "8px"}}>1. 모래알 100알</S.Text>
                    <S.Text $size={"14px"} style={{textIndent: "8px"}}>2. 활동 온도 1800℃</S.Text>
                    <S.Text $size={"14px"} style={{textIndent: "8px"}}>3. 가입한 지 일주일 이상</S.Text>
                    <S.Text $size={"14px"} style={{textIndent: "8px"}}>4. MEMBER 권한 이상</S.Text>
                    <S.Text $size={"13px"} $color={"#878787"}>*유리 조각으로 변환 시 다시 되돌릴 수 없습니다.</S.Text>
                </S.QuoteWrapper>
                <S.HorizontalWrapper $gap={"20px"}>
                    <S.ItemBox>
                        <S.Text $size={"16px"}>모래알</S.Text>
                        <S.HorizontalWrapper $gap={"7px"}>
                            <S.Icon src={sand} />
                            <S.Text $size={"20px"} $weight={"700"} $color={userData.sand < 100 ? "red" : "green"}>{userData.sand}알</S.Text>
                        </S.HorizontalWrapper>
                    </S.ItemBox>
                    <S.ColumnContour />
                    <S.ItemBox>
                        <S.Text $size={"16px"}>활동 온도</S.Text>
                        <S.HorizontalWrapper $gap={"7px"}>
                            <S.Icon src={furnace} />
                            <S.Text $size={"20px"} $weight={"700"} $color={userData.temperature < 1800 ? "red" : "green"}>{userData.temperature}℃</S.Text>
                        </S.HorizontalWrapper>
                    </S.ItemBox>
                    <S.ColumnContour />
                    <S.ItemBox>
                        <S.Text $size={"16px"}>가입 경과일</S.Text>
                        <S.Text $size={"20px"} $weight={"700"} $color={getCreatedAtColor(userData.createdAt) < 7 ? "red" : "green"}>+{getCreatedAtColor(userData.createdAt)}일</S.Text>
                    </S.ItemBox>
                    <S.ColumnContour />
                    <S.ItemBox>
                        <S.Text $size={"16px"}>권한</S.Text>
                        <S.Text $size={"20px"} $weight={"700"} $color={userData.role === "GUEST" ? "red" : "green"}>{userData.role}</S.Text>
                    </S.ItemBox>
                </S.HorizontalWrapper>
                <S.Button disabled={
                    userData.sand < 100 ||
                    userData.temperature < 1800 ||
                    getCreatedAtColor(userData.createdAt) < 7 ||
                    userData.role === "GUEST"}
                    onClick={clickConvertGlass}
                >
                    유리 조각으로 바꾸기
                </S.Button>

            </S.VerticalWrapper>

            <S.VerticalWrapper $gap={"10px"}>
                <S.Text $size={"18px"} $weight={"700"} style={{textAlign: "center"}}>공방 히스토리</S.Text>
                <S.Text $size={"14px"}>전체 사용자의 공방 활동 중 최근 30건을 표시합니다.</S.Text>
                <S.LogWrapper>
                    {logData.map((log) => (
                        <S.LogItem key={log.glassLogId}>
                            <S.Text $size={"14px"} $weight={"700"} $color={"#878787"}>{formatDate(log.createdAt, 7)}</S.Text>
                            <S.TextIcon title={log.description}
                                $color={getLogAttribute(log).color} $bg={getLogAttribute(log).bg}>{getLogAttribute(log).text}</S.TextIcon>
                            <S.Text $size={"14px"} $weight={"600"} style={{cursor: "pointer"}}
                                onClick={() => handleNavigateToUserPage(log.userId)}>{log.nickname}</S.Text>
                            <S.Text $size={"14px"} $weight={"400"}>님이&nbsp;</S.Text>
                            <S.Text $size={"14px"} $weight={"600"}>{log.description}</S.Text>
                            <S.Text $size={"14px"} $weight={"400"}>을 통해 유리 조각이&nbsp;</S.Text>
                            <S.Text $size={"14px"} $weight={"600"} $color={log.amount > 0 ? "#0000ff" : "#ff0000"}>{log.amount > 0 ? `${log.amount} 만큼 증가` : `${-log.amount} 만큼 감소`}</S.Text>
                            <S.Text $size={"14px"} $weight={"400"}>했습니다.</S.Text>
                        </S.LogItem>
                    ))}
                </S.LogWrapper>
            </S.VerticalWrapper>
            <S.ShopButton onClick={handleNavigateToShop}>
                <S.Icon src={shop} $width={"17px"} />유리상점으로 이동
            </S.ShopButton>
        </S.Wrapper>
    );
};

export default Craft;