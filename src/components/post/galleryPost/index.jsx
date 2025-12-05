import * as G from "@/apis/gallery";
import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import camera from "@/assets/icon/gallery/camera.svg";
import author from "@/assets/icon/gallery/author.svg";
import list from "@/assets/icon/gallery/list.svg";
import view from "@/assets/icon/post/view.svg";
import MoreOption from "@/components/modal/moreOption";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";
import { UserProfileImage2 } from "@/common/func/UserProfile2";
import WrongPage from "@/pages/wrong/WrongPage";

const GalleryPost = () => {
    const [notFound, setNotFound] = useState(false);
    const {postId} = useParams();
    const navigate = useNavigate();
    const [skeleton, setSkeleton] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        authorId: 0,
        profileImageUrl: "",
        description: "",
        picturedAt: "",
        imageUrls: [],
        tags: []
    });

    const handleNavigateGallery = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchGallery = async () => {
                try {
                    setSkeleton(true);
                    const response = await G.getGallery(postId);
                    setFormData(response.data);
                } catch(error) {
                    setNotFound(true);
                } finally {
                    setSkeleton(false);
                }
            };
    
            fetchGallery();
    }, []);

    if(notFound) {
        return <WrongPage type={"post"} />;
    };

    return (
        <>
            {skeleton ? 
                <S.Wrapper /> :
                <S.Wrapper>
                    <S.VerticalWrapper>
                        <S.Text $size={"14px"} style={{cursor: "pointer"}} onClick={handleNavigateGallery}>유리 갤러리 &gt;</S.Text>
                        <S.HorizontalWrapper $justify={"space-between"} style={{width: "100%"}}>
                            <S.Text $size={"18px"} $weight={"700"} style={{marginTop: "1px"}}>{formData.title}</S.Text>
                            <MoreOption formData={formData} type="gallery"/>
                        </S.HorizontalWrapper>
                        <S.HorizontalWrapper $gap={"15px"} style={{marginTop: "10px"}}>
                            <UserProfileImage2 userId={formData.authorId} profileUrl={formData.profileImageUrl} width={"35px"} height={"35px"} radius={"35px"} />
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={author} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"14px"} $weight={"600"} style={{cursor: "pointer"}} onClick={() => navigate(`/users/${formData.authorId}`)}>{formData.author}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={camera} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"12px"} $color={"#878787"}>{formatDate(formData.picturedAt, 5)}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={view} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"12px"} $color={"#878787"}>{formData.viewCnt}</S.Text>
                            </S.HorizontalWrapper>
                        </S.HorizontalWrapper>
                    </S.VerticalWrapper>
                    <S.Contour />
                    <S.VerticalWrapper>
                        <S.Content>
                            <S.DescriptionArea>
                                <S.Text $size={"18px"} $weight={"600"}>&lt; 사진 설명 &gt;</S.Text>
                                <S.Text $size={"14px"} style={{whiteSpace: "pre-line", lineHeight: "20px"}}>{formData.description}</S.Text>
                            </S.DescriptionArea>
                            <S.ImageArea>
                                {formData.imageUrls.map((url, i) => (
                                    <S.ImageItem key={i} src={url} alt={`gallery-img-${i}`} />
                                ))}
                            </S.ImageArea>
                        </S.Content>
                    </S.VerticalWrapper>
                    <BC.HorizontalWrapper $jc={"flex-start"} $gap={"5px"} style={{width: "100%", padding: "20px"}}>
                        {formData.tags.map((tag, idx) => (
                            <BC.Text key={idx} $size={"14px"} $color={"#878787"} $weight={"600"} style={{cursor: "pointer"}}
                                onClick={() => navigate(`/gallery?name=${tag}`)}
                            >#{tag}</BC.Text>
                        ))}
                    </BC.HorizontalWrapper>
                    <S.NaviagateButton onClick={handleNavigateGallery}><S.Icon src={list} $width={"13px"} $height={"10px"}/>목록</S.NaviagateButton>
                </S.Wrapper>
            }
        </>
    );
}

export default GalleryPost;