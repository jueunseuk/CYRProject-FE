import * as G from "@/apis/gallery";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const GallerySummary = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const handleNavigateGallery = () => {
        navigate("/gallery");
    }

    const handleNavigateGalleryPost = (galleryId) => {
        navigate(`/gallery/${galleryId}`);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await G.getAllGalleryImages();
                setImages(response.data.content);
            } catch(error) {
                
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>유리 갤러리</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}} onClick={handleNavigateGallery}>더보기</S.Text>
                </S.TitleArea>
                <S.ContentArea>
                    {images.slice(0, 6).map((image) => (
                        <S.GalleryItem
                            key={image.galleryImageId}
                            src={encodeURI(image.imageUrl)}
                            loading="lazy"
                            onClick={() => handleNavigateGalleryPost(image.galleryId)}
                        />
                    ))}
                </S.ContentArea>
            </S.Wrapper>
        </>
    )
}

export default GallerySummary;