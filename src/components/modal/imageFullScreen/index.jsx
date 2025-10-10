import * as S from "./styles";
import cancel from "@/assets/icon/etc/cancel.svg";

const ImageFullScreen = ({onClose, profile}) => {
    return (
        <S.Wrapper onClick={onClose} >
            <S.Content>
                <S.Image src={profile} />
                {/* <S.Icon src={cancel} onClick={onClose} /> */}
            </S.Content>
        </S.Wrapper>
    );
};

export default ImageFullScreen;