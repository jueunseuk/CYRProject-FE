import * as S from "./styles";
import * as SH from "@/apis/shop";
import * as U from "@/apis/user";
import glass from "@/assets/icon/user/glass.svg";
import checked from "@/assets/icon/etc/checked.svg";
import unchecked from "@/assets/icon/etc/unchecked.svg";
import { SHOPS } from "@/constants/shops";
import { useEffect, useRef, useState } from "react";
import ShopBuyModal from "@/components/modal/shopItemBuy";

const Shop = () => {
    const [buyModalOpen, setBuyModalOpen] = useState(false);
    const [selectItem, setSelectItem] = useState({});
    const [selectedTap, setSelectedTap] = useState(0);
    const [underline, setUnderline] = useState({ width: 0, offset: 0 });
    const refs = useRef([]);
    const [userData, setUserData] = useState({
        glass: 0
    });
    const [size, setSize] = useState(100);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("shopItemId");
    const [direction, setDirection] = useState("ASC");
    const [includeBoughtItems, setIncludeBoughtItems] = useState(false);
    const [itemData, setItemData] = useState([]);
    
    useEffect(() => {
        if(refs.current[selectedTap]) {
            const el = refs.current[selectedTap];
            setUnderline({
                width: el.offsetWidth,
                offset: el.offsetLeft,
            });
        }
    }, [selectedTap]);

    const fetchUserData = async () => {
        try {
            const response = await U.getUserSidebar();
            setUserData(response.data);
        } catch (error) {

        }
    };

    const fetchShopItemList = async (categoryId) => {
        try {
            const response = await SH.getShopItemList(categoryId, {size, page, sort, direction, includeBoughtItems});
            setItemData(response.data);
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        fetchShopItemList(selectedTap+1);
    }, [page, size, sort, direction, selectedTap, includeBoughtItems, buyModalOpen]);
    
    const handleCloseModal = () => {
        setBuyModalOpen(false);
        fetchShopItemList(selectedTap + 1);
    };
    
    return (
        <S.Wrapper>
            {buyModalOpen && <ShopBuyModal onClose={handleCloseModal } selectItem={selectItem} />}
            <S.Text $size={"25px"} $weight={"700"} style={{textAlign: "center"}}>유리상점</S.Text>
            <S.HorizontalWrapper $gap={"10px"}>
                <S.Icon src={glass} $width={"20px"}/>
                <S.Text $size={"20px"} $weight={"700"}>{userData.glass}</S.Text>
            </S.HorizontalWrapper>
            <S.QuoteWrapper>
                <S.Text $size={"15px"} $weight={"600"}>공방에서 획득한 유리 조각은 유리 상점에서 사용할 수 있습니다.</S.Text>
                <S.Text $size={"14px"}>상품 클릭 시 구매 가능하고, 구매한 상품은 인벤토리에서 확인 가능합니다.</S.Text>
                <S.Text $size={"14px"}>구매 복원은 불가능하니 신중한 구매 부탁드립니다.</S.Text>
            </S.QuoteWrapper>
            <S.VerticalWrapper>
                <S.TabWrapper>
                    {SHOPS.map((shop, idx) => (
                        <S.NavigateText
                            key={shop.id}
                            ref={(el) => (refs.current[idx] = el)}
                            $active={selectedTap === idx}
                            onClick={() => setSelectedTap(idx)}>
                            {shop.name}
                        </S.NavigateText>
                    ))}
                    <S.Underline $width={underline.width} $offset={underline.offset} />
                </S.TabWrapper>
                <S.Text style={{margin: "10px 0", textAlign: "left", width: "100%"}}>{SHOPS[selectedTap].description}</S.Text>
                <S.HorizontalWrapper $jc={"space-between"} style={{width: "100%", padding: "10px 5px"}}>
                    <S.Text><S.Text $weight={"700"}>{itemData?.length}</S.Text>개의 구매 가능한 상품</S.Text>
                    <S.HorizontalWrapper $ai={"center"} $jc={"space-between"} $gap={"5px"}>
                        <S.HorizontalWrapper $gap={"5px"} style={{marginRight: "15px", cursor: "default"}}>
                            <S.Text>구매한 상품 포함</S.Text>
                            <S.Icon src={includeBoughtItems ? checked : unchecked} style={{cursor: "pointer"}}
                                onClick={() => setIncludeBoughtItems(includeBoughtItems ? false : true)}
                            />
                        </S.HorizontalWrapper>
                        <S.Text $size={"12px"} onClick={() => setSort("shopItemId")} $weight={sort === "shopItemId" ? 800 : ""} style={{cursor: "default"}} title="아이템 등록 순">기본</S.Text>
                        <S.Text $size={"12px"}>|</S.Text>
                        <S.Text $size={"12px"} onClick={() => setSort("saleCnt")} $weight={sort === "saleCnt" ? 800 : ""} style={{cursor: "default"}} title="누적 판매량이 많은 순">인기</S.Text>
                        <S.Text $size={"12px"}>|</S.Text>
                        <S.Text $size={"12px"} onClick={() => setSort("name")} $weight={sort === "name" ? 800 : ""} style={{cursor: "default"}} title="아이템 이름 순">이름</S.Text>
                        <S.Text $size={"12px"}>|</S.Text>
                        <S.Text $size={"12px"} onClick={() => setSort("price")} $weight={sort === "price" ? 800 : ""} style={{cursor: "default"}} title="가격이 낮은 순">가격</S.Text>
                    </S.HorizontalWrapper>
                </S.HorizontalWrapper>
                <S.ShopItemWrapper>
                    {itemData.map((item) => (
                        <S.ShopItem key={item.shopItemId} onClick={() => {
                            setBuyModalOpen(true);
                            setSelectItem(item); }}>
                            <S.VerticalWrapper $gap={"5px"}>
                                <S.ItemImage src={item.imageUrl}/>
                                <S.Text $size={"15px"} $weight={"700"} $color={item.shopCategoryId === 3 ? item.description : ""}>{item.name}</S.Text>
                                <S.Text $size={"13px"} $color={"#878787"}>{item.description}</S.Text>
                            </S.VerticalWrapper>
                            <S.HorizontalWrapper $gap={"5px"} style={{marginTop: "10px"}}>
                                {Array.from({ length: item.price }).map((_, idx) => (
                                    <S.Icon key={idx} src={glass} />
                                ))}
                            </S.HorizontalWrapper>
                        </S.ShopItem>
                    ))}
                </S.ShopItemWrapper>
            </S.VerticalWrapper>
        </S.Wrapper>
    );
};

export default Shop;