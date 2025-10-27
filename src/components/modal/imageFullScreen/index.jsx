import * as S from "./styles";

const ImageFullScreen = ({onClose, profile}) => {
    return (
        <S.Wrapper onClick={onClose} >
            <S.Content>
                <S.Image src={profile} />
            </S.Content>
        </S.Wrapper>
    );
};

export default ImageFullScreen;