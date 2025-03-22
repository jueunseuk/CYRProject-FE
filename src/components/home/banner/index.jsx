import * as S from "./styles";

const Banner = () => {

    const handleNavigateHome = () => {
        window.location.href = '/';
    };

    return (
        <>
            <S.BannerImage onClick={handleNavigateHome}/>
        </>
    );
}

export default Banner;