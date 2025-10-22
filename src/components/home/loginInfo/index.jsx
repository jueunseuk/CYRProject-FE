import * as U from "@/apis/user";
import * as A from "@/apis/authentication";
import * as S from "./styles";
import furnace from "@/assets/icon/user/furnace.svg";
import exp from "@/assets/icon/user/exp.svg";
import sand from "@/assets/icon/user/sand.svg";
import glass from "@/assets/icon/user/glass.svg";
import shop from "@/assets/icon/user/shop.svg";
import factory from "@/assets/icon/user/factory.svg";
import mypage from "@/assets/icon/user/mypage.svg";
import inventory from "@/assets/icon/user/inventory.svg";
import sandbox from "@/assets/icon/user/sandbox.svg";
import useUserInfo from "@/hooks/localStorage";
import ImageFullScreen from "@/components/modal/imageFullScreen";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginInfo = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [userAmount, setUserAmount] = useState({
        expCnt: 0,
        glass: 0,
        sand: 0,
        temperature: 0
    });
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleNavigateWrite = () => {
        navigate("/write/post");
    };

    const handleNavigateMyPage = () => {
        navigate("/mypage");
    };

    useEffect(() => {
        const fetchExp = async () => {
            try {
                const response = await U.getUserSidebar();
                setUserAmount(response.data);
            } catch (error) {

            }
        };
    
        fetchExp();
    }, []);

    const handleRequestLogout = async () => {
        try {
            const response = await A.requestLogout();
            localStorage.removeItem("userInfo");
            
            window.location.reload();
        } catch(error) {
            console.error('로그아웃 실패', error);
        }
    };

    const handleNavigateMypage = () => {
        navigate("/mypage");
    };

    const handleNavigateCraftshop = () => {
        navigate("/user/craftshop");
    };

    const handleNavigateShop = () => {
        navigate("/user/shop");
    };

    const handleNavigateInventory = () => {
        navigate("/user/inventory");
    };

    const handleNavigateSands = () => {
        alert("개발 예정입니다!")
        // navigate("/user/sands");
    };

    const handleImageFullScreen = () => {
        setIsProfileModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false);
    };

    return (
        <S.Wrapper>
            <S.Title>내 정보</S.Title>
            <S.ProfileArea>
                {isProfileModalOpen && <ImageFullScreen onClose={handleCloseModal} profile={user.profileUrl}/>}
                <S.ProfileImage src={user.profileUrl} onClick={() => handleImageFullScreen()}  style={{cursor: "pointer"}}/>
                <S.VerticalWrapper>
                    <S.Text $size={"12px"} $weight={"300"}>{user.role}</S.Text>
                    <S.Text $size={"16px"} $weight={"700"} onClick={() => handleNavigateMypage()} style={{cursor: "pointer"}}>{user.nickname ? user.nickname : user.name}</S.Text>
                    <S.Text $size={"11px"} $color={"#878787"}>{formatDate(user.createdAt, 2)}</S.Text>
                </S.VerticalWrapper>
            </S.ProfileArea>
            <S.IconArea >
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.HorizontalWrapper $gap={"5px"} $jc={"space-between"}>
                        <S.Icon src={exp} />
                        <S.Text $size={"12px"}>경험치</S.Text>
                    </S.HorizontalWrapper>
                    <S.DotLine />
                    <S.Text $size={"12px"} $weight={"600"}>{userAmount.expCnt}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.HorizontalWrapper $gap={"5px"} $jc={"space-between"}>
                        <S.Icon src={glass} />
                        <S.Text $size={"12px"}>유리</S.Text>
                    </S.HorizontalWrapper>
                    <S.DotLine />
                    <S.Text $size={"12px"} $weight={"600"}>{userAmount.glass} 조각</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.HorizontalWrapper $gap={"5px"} $jc={"space-between"}>
                        <S.Icon src={sand}/>
                        <S.Text $size={"12px"}>모래알</S.Text>
                    </S.HorizontalWrapper>
                    <S.DotLine />
                    <S.Text $size={"12px"} $weight={"600"}>{userAmount.sand} 알</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.HorizontalWrapper $gap={"5px"} $jc={"space-between"}>
                        <S.Icon src={furnace}/>
                        <S.Text $size={"12px"}>활동 온도</S.Text>
                    </S.HorizontalWrapper>
                    <S.DotLine />
                    <S.Text $size={"12px"} $weight={"600"}>{userAmount.temperature} ℃</S.Text>
                </S.HorizontalWrapper>
            </S.IconArea>
            <S.HorizontalWrapper $jc={"center"} $ai={"center"} style={{width: "170px", flexWrap: "wrap", columnGap: "7px"}}>
                <S.ItemBox onClick={() => handleNavigateMyPage()} title="마이페이지로 이동">
                    <S.Icon src={mypage} />
                    <S.Text $size={"11px"} $weight={"600"}>마이페이지</S.Text>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateCraftshop()} title="유리공방으로 이동">
                    <S.Icon src={factory} />
                    <S.Text $size={"11px"} $weight={"600"}>유리공방</S.Text>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateShop()} title="유리상점으로 이동">
                    <S.Icon src={shop} />
                    <S.Text $size={"11px"} $weight={"600"}>유리상점</S.Text>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateInventory()} title="인벤토리로 이동">
                    <S.Icon src={inventory} />
                    <S.Text $size={"11px"} $weight={"600"}>인벤토리</S.Text>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateSands()} title="추가 예정">
                    <S.Icon src={sandbox} />
                    <S.Text $size={"11px"} $weight={"600"}>모래사장</S.Text>
                </S.ItemBox>
            </S.HorizontalWrapper>
            <S.WriteButton onClick={handleNavigateWrite}>글쓰기</S.WriteButton>
            <S.LinkText onClick={handleRequestLogout}>로그아웃</S.LinkText>
        </S.Wrapper>
    );
}

export default LoginInfo;