import * as S from "./styles";
import * as UBS from "@/apis/userBannerSetting";
import banner from "@/assets/image/banner.png";
import { useEffect, useState } from "react";

const BannerSetting = () => {
    const [bannerData, setBannerData] = useState([]);
    const [containData, setContainData] = useState([banner]);
    const [exceptData, setExceptData] = useState([]);

    const fetchAllBanner = async () => {
        try {
            const response = await UBS.getUserBannerList({isActive: false});
            setBannerData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        const contain = bannerData.filter(item => item.isActive === true);
        const except = bannerData.filter(item => item.isActive === false);
        setContainData([banner, ...contain]);
        setExceptData(except);
    }, [bannerData]);

    useEffect(() => {
        fetchAllBanner();
    }, []);

    const handleAddToContain = (selectItem) => {
        const newExcept = exceptData.filter(item => item.shopItemId !== selectItem.shopItemId);
        const newContain = [...containData, selectItem];

        setExceptData(newExcept);
        setContainData(newContain);
    };

    const handleRemoveToContaint = (selectItem) => {
        const newContain = containData.filter(item => item.shopItemId !== selectItem.shopItemId);
        const newExcept = [...exceptData, selectItem];

        setExceptData(newExcept);
        setContainData(newContain);
    };

    const requestUpdateBannerSequence = async () => {
        try {
            const active = containData.slice(1).map((item, index) => ({
                shopItemId: item.shopItemId,
                sequence: index+1,
                isActive: true
            }));

            const inactive = exceptData.map(item => ({
                shopItemId: item.shopItemId,
                sequence: 0,
                isActive: false
            }));

            const form = [...active, ...inactive];
            
            await UBS.updateBannerSequence(form);
            alert("배경 순서가 저장되었습니다.");
        } catch (error) {

        }
    };

    return (
        <S.Wrapper>
            <S.HorizontalWrapper style={{width: "100%", textAlign: "center"}}>
                <S.Text $size={"16px"} $weight={"600"} style={{width: "50%"}}>보유 중인 배경</S.Text>
                <S.Text $size={"16px"} $weight={"600"} style={{width: "50%"}}>활성화된 배경</S.Text>
            </S.HorizontalWrapper>
            <S.HorizontalWrapper style={{margin: "10px 0 20px 0"}}>
                <S.VerticalWrapper $ai={"center"} style={{width: "50%"}}>
                    {exceptData.length === 0 ?
                        <S.BannerItem>
                            <S.Text $size={"15px"} style={{padding: "2px 0"}}>0</S.Text>
                            <S.NoneImage />
                            <S.Text $size={"14px"} $weight={"600"}>이미지 없음</S.Text>
                            <S.Text $size={"13px"} $color={"#878787"}>모든 이미지가 선택되었습니다.</S.Text>
                        </S.BannerItem>
                    :
                    exceptData.map((b, idx) => (
                        <S.BannerItem key={b.shopItemId} style={{cursor: "pointer"}} onClick={() => handleAddToContain(b)}>
                            <S.Text $size={"15px"} style={{padding: "2px 0"}}>{idx}</S.Text>
                            <S.Image src={typeof b === "string" ? b : b.imageUrl} />
                            <S.Text $size={"14px"} $weight={"600"}>{b.name}</S.Text>
                            <S.Text $size={"13px"} $color={"#878787"}>{b.description}</S.Text>
                        </S.BannerItem>
                    ))}
                </S.VerticalWrapper>
                <S.VerticalWrapper $ai={"center"} style={{width: "50%"}}>
                    {containData.map((b, idx) => (
                        <S.BannerItem key={b.shopItemId ?? `default`} style={{cursor: idx === 0 ? "default" : "pointer"}} onClick={idx === 0 ? undefined : () => handleRemoveToContaint(b)}>
                            <S.Text $size={"15px"} style={{padding: "2px 0"}}>{idx === 0 ? `0 (fixed)` : idx}</S.Text>
                            <S.Image src={typeof b === "string" ? b : b.imageUrl} />
                            <S.VerticalWrapper $ai={"center"}>
                                <S.Text $size={"14px"} $weight={"600"}>{idx === 0 ? "기본 배경" : b.name}</S.Text>
                                <S.Text $size={"13px"} $color={"#878787"}>{idx === 0 ? "배너의 기본 설정값입니다." : b.description}</S.Text>
                            </S.VerticalWrapper>
                        </S.BannerItem>
                    ))}
                </S.VerticalWrapper>
            </S.HorizontalWrapper>
            <S.HorizontalWrapper $gap={"10px"} style={{alignSelf: "flex-end"}}>
                <S.Button $bg={"#C6BC73"} $color={"white"} onClick={requestUpdateBannerSequence}>저장하기</S.Button>
                <S.Button $bg={"#e2e2e2ff"} onClick={() => fetchAllBanner()}>초기화</S.Button>
            </S.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default BannerSetting;