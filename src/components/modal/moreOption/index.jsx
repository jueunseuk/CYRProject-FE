import * as S from "./styles";
import { useState } from "react";

const MoreOption = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenOption = () => {
        setIsOpen((prev) => !prev);
    }

    const handleEdit = () => {
            setIsOpen(false);
    };
    
    const handleDelete = () => {
        setIsOpen(false);
    };

    return (
        <>
            <S.MoreOptionWrapper>
                <S.MoreIcon onClick={handleOpenOption}>
                    {isOpen && (
                        <S.OptionBox>
                            <S.OptionButton onClick={handleEdit}>수정</S.OptionButton>
                            <S.OptionButton onClick={handleDelete}>삭제</S.OptionButton>
                            <S.OptionButton onClick={handleDelete}>게시글 신고</S.OptionButton>
                        </S.OptionBox>
                    )}
                </S.MoreIcon>
            </S.MoreOptionWrapper>
        </>
    );
}

export default MoreOption;