import * as S from "./styles";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from "@/assets/image/banner.png";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.png";
import banner4 from "@/assets/image/banner4.png";

const Banner = () => {

    const handleNavigateHome = () => {
        window.location.href = '/';
    };

    return (
        <>
            <S.Wrapper>
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