import * as S from "./styles";
import images from "@/assets/icon/user/images.svg";
import likePosts from "@/assets/icon/user/likePosts.svg";
import posts from "@/assets/icon/user/posts.svg";
import comments from "@/assets/icon/user/comments.svg";

const ParentRecord = () => {
    return (
        <S.Wrapper>
            <S.Text $size={"18px"} $weight={"700"}>활동</S.Text>
            <S.ItemList>
                <S.ItemBox>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={posts} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >내가 작성한 글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>25</S.DataText>
                </S.ItemBox>
                <S.ItemBox>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={comments} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >내가 작성한 댓글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>14</S.DataText>
                </S.ItemBox>
                <S.ItemBox>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={likePosts} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >내가 공감한 글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>29</S.DataText>
                </S.ItemBox>
                <S.ItemBox>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={images} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >내가 올린 사진</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>112</S.DataText>
                </S.ItemBox>
            </S.ItemList>
        </S.Wrapper>
    );
};

export default ParentRecord;