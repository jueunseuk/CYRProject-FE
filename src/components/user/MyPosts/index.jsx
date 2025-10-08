import { useEffect, useState } from "react";
import * as S from "./styles";

const MyPosts = () => {
    const [postData, setPostData] = useState({});

    useEffect(() => {
        const fetchUserPosts = async (searchId) => {
            try {

            } catch(error) {
                
            }
        }
    }, []);

    return (
        <S.Wrapper>

            내가 쓴 게시글 보여주는 공간
        </S.Wrapper>
    );
};

export default MyPosts;