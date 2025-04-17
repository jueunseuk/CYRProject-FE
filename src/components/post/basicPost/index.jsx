import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import useUserInfo from "@/hooks/localStorage";
import MoreOption from "@/components/modal/moreOption";
import author from "@/assets/icon/post/author.svg";
import empathy from "@/assets/icon/post/empathy.svg";
import view from "@/assets/icon/post/view.svg";
import comment from "@/assets/icon/post/comment.svg";
import ellipse from "@/assets/icon/post/ellipse.svg";
import list from "@/assets/icon/gallery/list.svg";

const BasicPost = () => {
    const user = useUserInfo();
    const {subPath} = useParams();
    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const {postId} = useParams();
    const navigate = useNavigate();
    const [skeleton, setSkeleton] = useState(true);

    const handleNavigatePostList = () => {
        navigate(`/${subPath}`);
    }

    return (
        <>
            <S.Wrapper>
                <S.VerticalWrapper>
                    <S.Text $size={"14px"} style={{cursor: "pointer"}}>{boardInfo.label} &gt;</S.Text>
                    <S.HorizontalWrapper $justify={"space-between"} style={{width: "100%"}}>
                        <S.Text $size={"18px"} $weight={"700"} style={{marginTop: "1px"}}>제목입니다아아앙</S.Text>
                        {/* {user.userId === formData?.authorId && ( */}
                            {/* <MoreOption formData={formData} /> */}
                        {/* )} */}
                    </S.HorizontalWrapper>
                    <S.HorizontalWrapper $gap={"15px"} style={{marginTop: "10px"}}>
                        <S.Profile />
                        <S.HorizontalWrapper>
                            <S.Icon src={author} $width={"10px"} $height={"10px"}/>
                            <S.Text $size={"14px"} $weight={"600"} style={{cursor: "pointer"}}>말랑준듀</S.Text>
                        </S.HorizontalWrapper>
                        <S.HorizontalWrapper>
                            <S.Icon src={empathy} $width={"10px"} $height={"10px"}/>
                            <S.Text $size={"12px"} style={{cursor: "pointer"}}>363</S.Text>
                        </S.HorizontalWrapper>
                        <S.HorizontalWrapper>
                            <S.Icon src={view} $width={"10px"} $height={"10px"}/>
                            <S.Text $size={"12px"} $color={"#878787"} $weight={"600"} style={{cursor: "pointer"}}>23631</S.Text>
                        </S.HorizontalWrapper>
                        <S.HorizontalWrapper>
                            <S.Icon src={comment} $width={"10px"} $height={"10px"}/>
                            <S.Text $size={"12px"} $color={"#878787"} $weight={"600"} style={{cursor: "pointer"}}>62</S.Text>
                        </S.HorizontalWrapper>
                        <S.Icon src={ellipse} $width={"3px"} $height={"3px"}/>
                        <S.Text $size={"12px"} $color={"#878787"}>2025.02.13</S.Text>
                    </S.HorizontalWrapper>
                </S.VerticalWrapper>
                <S.Contour />
                <S.VerticalWrapper>
                <S.Content>
                    
                </S.Content>
                </S.VerticalWrapper>
                <S.NaviagateButton onClick={handleNavigatePostList}><S.Icon src={list} $width={"13px"} $height={"10px"}/>목록</S.NaviagateButton>
            </S.Wrapper>
        </>
    );
}

export default BasicPost;