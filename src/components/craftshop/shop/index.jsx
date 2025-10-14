import * as S from "./styles";
import glass from "@/assets/icon/user/glass.svg";
import { useEffect, useState } from "react";

const Shop = () => {
    const [userData, setUserData] = useState({
        glass: 0
    });

    useEffect(() => {
        const fetchExp = async () => {
            try {
                const response = await U.getUserSidebar();
                setUserData(response.data);
            } catch (error) {

            }
        };
    
        fetchExp();
    }, []);

    return (
        <S.Wrapper>
            <S.Text $size={"25px"} $weight={"700"} style={{textAlign: "center"}}>유리상점</S.Text>
            <S.HorizontalWrapper $gap={"10px"}>
                <S.Icon src={glass} $width={"20px"}/>
                <S.Text $size={"20px"} $weight={"700"}>{userData.glass}</S.Text>
            </S.HorizontalWrapper>
            <S.QuoteWrapper>
                <S.Text $size={"15px"} $weight={"600"}>공방에서 획득한 유리 조각은 유리 상점에서 사용할 수 있습니다.</S.Text>
            </S.QuoteWrapper>
        </S.Wrapper>
    );
};

export default Shop;