import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import notFound from "@/assets/image/404.png";

const WrongPage = ({type}) => {

    const getSystemMessage = () => {
        switch(type) {
            case "post" : return "존재하지 않거나 삭제된 게시글입니다.";
            default : return "존재하지 않는 페이지입니다.";
        }
    };

    return (
        <S.Wrapper>
            <img src={notFound}></img>
            <BC.Text $size={"300"}>({getSystemMessage()})</BC.Text>
        </S.Wrapper>
    );
}

export default WrongPage;