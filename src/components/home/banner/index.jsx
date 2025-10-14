import * as S from "./styles";
import * as A from "@/apis/authentication";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bell from "@/assets/icon/user/bell.svg";
import banner from "@/assets/image/banner.png";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.png";
import banner4 from "@/assets/image/banner4.png";
import useUserInfo from "@/hooks/localStorage";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const user = useUserInfo();
    const navigate = useNavigate();

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
                loop={true}
                autoplay={{delay: "10000"}}
                pagination={{clickable: true}}>
                    <SwiperSlide><S.BannerImage src={banner} onClick={handleNavigateHome}/></SwiperSlide>
                    <SwiperSlide><S.BannerImage src={banner2} onClick={handleNavigateHome}/></SwiperSlide>
                    <SwiperSlide><S.BannerImage src={banner3} onClick={handleNavigateHome}/></SwiperSlide>
                    <SwiperSlide><S.BannerImage src={banner4} onClick={handleNavigateHome}/></SwiperSlide>
                </Swiper>
            </S.Wrapper>
        </>
    );
}

export default Banner;