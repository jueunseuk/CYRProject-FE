import * as S from "./styles";
import notFound from "@/assets/image/404.png";

const WrongPage = () => {
    return (
        <S.Wrapper>
            <img src={notFound}></img>
        </S.Wrapper>
    );
}

export default WrongPage;