import * as S from "./styles";
import useUserInfo from "@/hooks/localStorage";
import EditorComponent from "@/components/editor/editorComponent";

const PostEditor = () => {
    const user = useUserInfo();
    console.log(user)

    return (
        <>
            <S.Wrapper>
                <S.Select size={"1"}>
                    {user.role && (
                        <S.OptionGroup label="NOTICE">
                            <S.Option value={"5"}>공지사항</S.Option>
                            <S.Option value={"6"}>이벤트</S.Option>
                            <S.Option value={"7"}>캘린더</S.Option>
                            <S.Option value={"8"}>투표</S.Option>
                        </S.OptionGroup>
                    )}
                    <S.OptionGroup label="모래 이야기">
                        <S.Option value={"9"}>자유게시판</S.Option>
                        <S.Option value={"10"}>질문게시판</S.Option>
                        <S.Option value={"11"}>내가 그린 유리</S.Option>
                        <S.Option value={"12"}>내가 부른 유리</S.Option>
                        <S.Option value={"13"}>To. 유리</S.Option>
                    </S.OptionGroup>
                    <S.OptionGroup label="유리 이야기">
                        <S.Option value={"14"}>내가 좋아하는 유리 노래</S.Option>
                        <S.Option value={"15"}>미발매곡 가사 탐구</S.Option>
                        <S.Option value={"16"}>콘서트 후기</S.Option>
                        <S.Option value={"17"}>굿즈 후기</S.Option>
                    </S.OptionGroup>
                    <S.OptionGroup label="커뮤니티 이야기">
                        <S.Option value={"18"}>건의하기</S.Option>
                        <S.Option value={"19"}>신고하기</S.Option>
                        <S.Option value={"20"}>운영자 신청</S.Option>
                    </S.OptionGroup>
                </S.Select>
                <S.Input type="text" name="title" $width={"100%"} $border={"#CCC"}/>
                <EditorComponent />
            </S.Wrapper>
        </>
    )
}

export default PostEditor;