import * as G from "@/apis/gallery";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/localStorage";
import { SkeletonItem } from "@/common/skeleton/Skeleton";

const GallerySummary = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    const user = useUserInfo();
    const [amount, setAmount] = useState(6);

    const handleNavigateGallery = () => {
        navigate("/gallery");
    }

    const handleNavigateGalleryPost = (galleryId) => {
        if (!user || !user.userId) {
            alert("로그인 후 이용가능합니다.");
            return;
        }
        navigate(`/gallery/${galleryId}`);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setSkeleton(true);
                const response = await G.getRandomImages(amount);
                setImages(response.data);
            } catch(error) {
                
            } finally {
                setSkeleton(false);
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
                    {skeleton ? 
                        Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonItem key={index} $width={"140px"} $height={"140px"}/>
                        ))
                        : images?.map((image) => (
                            <S.GalleryItem
                                key={image.galleryImageId}
                                src={encodeURI(image.imageUrl)}
                                onClick={() => handleNavigateGalleryPost(image.galleryId)}
                            />
                    ))}
                </S.ContentArea>
            </S.Wrapper>
        </>
    )
}

export default GallerySummary;