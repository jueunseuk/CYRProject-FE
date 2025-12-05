import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as A from "@/apis/authentication";
import * as UBS from "@/apis/userBannerSetting";
import * as N from "@/apis/notification";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bell from "@/assets/icon/user/bell.svg";
import signature_bell from "@/assets/icon/user/signature_bell.svg";
import banner from "@/assets/image/banner.png";
import useUserInfo from "@/hooks/localStorage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotificationList from "@/components/modal/notificationList";

const Banner = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [imageData, setImageData] = useState([banner]);
    const [openNotificatinoModal, setOpenNotificationModal] = useState(false);
    const [bellStatus, setBellStatus] = useState(false);
    const [unreadCnt, setUnreadCnt] = useState(0);

    const handleNavigateHome = () => {
        navigate("/");
    };

    const handleRequestLogout = async () => {
        try {
            await A.requestLogout();
            localStorage.removeItem("userInfo");
            
            window.location.reload();
        } catch(error) {
            console.error('로그아웃 실패', error);
        } finally {
            window.location.reload();
        }
    };

    const fetchUnreadNotification = async () => {
        if(!user) return;
        try {
            const response = await N.getUnreadNotificationList();
            if(response.data.length > 0) {
                setBellStatus(true);
                setUnreadCnt(response.data.length);
            }
        } catch(error) {

        }
    };

    const fetchBannerImages = async () => {
        if(!user) return;

        try {
            const response = await UBS.getUserBannerList({isActive: "true"});
            if (response?.data?.length > 0) {
                setImageData(() => [banner, ...response.data]);
            }
        } catch (error) {

        }
    };

    const patchNotification = async () => {
        if(!user) return;
        try {
            await N.patchReadNotification();
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchUnreadNotification();
        fetchBannerImages();
    }, []);

    const handleClickNotification = () => {
        setOpenNotificationModal(true);
        fetchUnreadNotification();
        patchNotification();
    };

    return (
        <>
            <S.Wrapper>
                {openNotificatinoModal && <NotificationList onClose={() => setOpenNotificationModal(false)} />}
                {user?.userId ? <S.HorizontalWrapper $gap={"7px"} $jc={"flex-end"}>
                        <S.Text onClick={() => navigate("/mypage")}>{user.nickname}</S.Text>
                        <S.Text>|</S.Text>
                        <S.Text onClick={() => navigate("/setting")}>설정</S.Text>
                        <S.Text>|</S.Text>
                        <S.Text onClick={() => handleRequestLogout()}>로그아웃</S.Text>
                        <S.Text>|</S.Text>
                        <BC.HorizontalWrapper $ai={"center"} $gap ={"3px"} style={{cursor: "pointer"}}
                            onClick={handleClickNotification}
                        >
                            <BC.Icon $w={"13px"} $h={"13px"} src={bellStatus ? signature_bell : bell}/>
                            <BC.Text $size={"11px"} $weight={"600"}>({unreadCnt})</BC.Text>
                        </BC.HorizontalWrapper>
                    </S.HorizontalWrapper> : 
                    <S.HorizontalWrapper $gap={"5px"} $jc={"flex-end"}>
                        <S.Text onClick={() => navigate("/auth/login")}>로그인</S.Text>
                        <S.Text>|</S.Text>
                        <S.Text onClick={() => navigate("/auth/login")}>회원가입</S.Text>
                    </S.HorizontalWrapper>}

                <Swiper modules={[Pagination, Autoplay]}
                    loop={imageData.length > 1}
                    autoplay={{delay: "10000"}}
                    pagination={{clickable: true}}>
                        {imageData.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <S.BannerImage
                                    src={typeof img === "string" ? img : img.imageUrl}
                                    onClick={handleNavigateHome}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </S.Wrapper>
        </>
    );
}

export default Banner;