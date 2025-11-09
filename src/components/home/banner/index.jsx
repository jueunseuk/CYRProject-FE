import * as S from "./styles";
import * as A from "@/apis/authentication";
import * as UBS from "@/apis/userBannerSetting";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bell from "@/assets/icon/user/bell.svg";
import banner from "@/assets/image/banner.png";
import useUserInfo from "@/hooks/localStorage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Banner = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [imageData, setImageData] = useState([banner]);

    const handleNavigateHome = () => {
        window.location.href = '/';
    };

    const handleRequestLogout = async () => {
        try {
            await A.requestLogout();
            localStorage.removeItem("userInfo");
            
            window.location.reload();
        } catch(error) {
            console.error('로그아웃 실패', error);
        }
    };

    useEffect(() => {
        if(!user) return;
        
        const fetchBannerImages = async () => {
            try {
                const response = await UBS.getUserBannerList({isActive: "true"});
                if (response?.data?.length > 0) {
                    setImageData(() => [banner, ...response.data]);
                }
            } catch (error) {

            }
        };

        fetchBannerImages();
    }, []);

    return (
        <>
            <S.Wrapper>
                {user?.userId ? <S.HorizontalWrapper $gap={"7px"} $jc={"flex-end"}>
                        <S.Text onClick={() => navigate("/mypage")}>{user.nickname}</S.Text>
                        <S.Text>|</S.Text>
                        <S.Text onClick={() => navigate("/setting")}>설정</S.Text>
                        <S.Text>|</S.Text>
                        <S.Text onClick={() => handleRequestLogout()}>로그아웃</S.Text>
                        <S.Text>|</S.Text>
                        <S.Icon src={bell} onClick={() => ""}/>
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