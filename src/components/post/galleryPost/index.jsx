import * as G from "@/apis/gallery";
import * as S from "./styles";
import camera from "@/assets/icon/gallery/camera.svg";
import author from "@/assets/icon/gallery/author.svg";
import list from "@/assets/icon/gallery/list.svg";
import view from "@/assets/icon/post/view.svg";
import MoreOption from "@/components/modal/moreOption";
import ImageFullScreen from "@/components/modal/imageFullScreen";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";

const GalleryPost = () => {
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
        imageUrls: []
    });
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleNavigateGallery = () => {
        navigate("/gallery");
    }

    useEffect(() => {
        const fetchGallery = async () => {
                try {
                    setSkeleton(true);
                    const response = await G.getGallery(postId);
                    setFormData(response.data);
                } catch(error) {
                    
                } finally {
                    setSkeleton(false);
                }
            };
    
            fetchGallery();
    }, []);

    const handleImageFullScreen = () => {
        setIsProfileModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false);
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
                            {isProfileModalOpen && <ImageFullScreen onClose={handleCloseModal} profile={formData.profileImageUrl}/>}
                            <S.Profile src={formData.profileImageUrl} onClick={() => handleImageFullScreen()} />
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={author} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"14px"} $weight={"600"} style={{cursor: "pointer"}}>{formData.author}</S.Text>
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
                    <S.NaviagateButton onClick={handleNavigateGallery}><S.Icon src={list} $width={"13px"} $height={"10px"}/>목록</S.NaviagateButton>
                </S.Wrapper>
            }
        </>
    );
}

export default GalleryPost;