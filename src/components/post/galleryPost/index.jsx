import * as G from "@/apis/gallery";
import * as S from "./styles";
import camera from "@/assets/icon/gallery/camera.svg";
import author from "@/assets/icon/gallery/author.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";

const GalleryPost = () => {
    const {postId} = useParams();
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        profileImageUrl: "",
        description: "",
        picturedAt: "0000.00.00",
        imageUrls: []
    });

    useEffect(() => {
        const fetchGallery = async () => {
                try {
                    const response = await G.getGallery(postId);
                    console.log(response);
                    setFormData(response.data);
                } catch(error) {
                    
                }
            };
    
            fetchGallery();
    }, []);

    return (
        <>
            {formData ? 
                <S.Wrapper /> :
                <S.Wrapper>
                    <S.VerticalWrapper>
                        <S.Text $size={"14px"} style={{cursor: "pointer"}}>유리 갤러리 &gt;</S.Text>
                        <S.Text $size={"18px"} $weight={"700"} style={{marginTop: "1px"}}>{formData.title}</S.Text>
                        <S.HorizontalWrapper $gap={"15px"} style={{marginTop: "10px"}}>
                            <S.Profile src={formData.profileImageUrl}/>
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={author} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"14px"} style={{cursor: "pointer"}}>{formData.author}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"5px"}>
                                <S.Icon src={camera} $width={"10px"} $height={"10px"}/>
                                <S.Text $size={"12px"} $color={"#878787"}>{formatDate(formData.picturedAt, 5)}</S.Text>
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
                </S.Wrapper>
            }
        </>
    );
}

export default GalleryPost;