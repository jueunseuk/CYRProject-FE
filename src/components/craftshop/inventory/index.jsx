import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as UI from "@/apis/inventory";
import { useEffect, useRef, useState } from "react";
import { INVENTORYS } from "@/constants/inventorys";
import { formatDate } from "@/util/dateFormatter";
import InventoryUseModal from "@/components/modal/inventoryItemUse";
import ImageFullScreen from "@/components/modal/imageFullScreen";

const Inventory = () => {
    const [useModalOpen, setUseModalOpen] = useState(false);
    const [viewImageModalOpen, setViewImageModalOpen] = useState(false);
    const [selectItem, setSelectItem] = useState({});
    const [selectedTap, setSelectedTap] = useState(0);
    const [underline, setUnderline] = useState({ width: 0, offset: 0 });
    const refs = useRef([]);
    const [size, setSize] = useState(100);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState();
    const [direction, setDirection] = useState("DESC");
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

    const fetchShopItemList = async (categoryId) => {
        try {
            if(categoryId === 0) {
                const response = await UI.getAllBuyList({size, page, sort, direction});
                setItemData(response.data);
            } else if(categoryId === 4) {
                const response = await UI.getBuyList(categoryId, {size, page, direction});
                setItemData(response.data);
            } else if(categoryId === 6) {
                const response = await UI.getUseList({size, page, direction});
                setItemData(response.data);
            } else {
                const response = await UI.getBuyList(categoryId, {size, page, sort, direction});
                setItemData(response.data);
            }
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchShopItemList(selectedTap);
    }, [page, size, sort, direction, selectedTap]);

    const handleCloseModal = () => {
        setUseModalOpen(false);
        fetchShopItemList(selectedTap);
    };

    const getItemAmount = (item) => {
        if(item.plus) {
            if(selectedTap === 4) {
                return ` * ${item.plus - item.minus}`;
            } else {
                return ` * ${item.minus}`;
            }
        } else {
            return "";
        }
    }
    
    return (
        <S.Wrapper>
            {useModalOpen && <InventoryUseModal onClose={handleCloseModal} selectItem={selectItem} />}
            {viewImageModalOpen && <ImageFullScreen onClose={() => setViewImageModalOpen(false)} profile={selectItem.imageUrl} />}
            <S.Text $size={"25px"} $weight={"700"} style={{textAlign: "center"}}>인벤토리</S.Text>
            <S.QuoteWrapper>
                <S.Text $size={"15px"} $weight={"600"}>상점에서 구매한 아이템들을 볼 수 있습니다.</S.Text>
                <S.Text $size={"14px"}>소모품의 경우 클릭해서 사용가능합니다.</S.Text>
                <S.Text $size={"14px"}>아이템 복원은 불가능하니 아이템의 주의사항에 따라 신중한 사용 부탁드립니다.</S.Text>
            </S.QuoteWrapper>
            <S.VerticalWrapper>
                <S.TabWrapper>
                    {INVENTORYS.map((inventory, idx) => (
                        <S.NavigateText
                            key={inventory.id}
                            ref={(el) => (refs.current[idx] = el)}
                            $active={selectedTap === idx}
                            onClick={() => setSelectedTap(idx)}>
                            {inventory.name}
                        </S.NavigateText>
                    ))}
                    <S.Underline $width={underline.width} $offset={underline.offset} />
                </S.TabWrapper>
                <S.Text style={{margin: "10px 0", textAlign: "left", width: "100%"}}>{INVENTORYS[selectedTap].description}</S.Text>
                <S.HorizontalWrapper $jc={"space-between"} style={{width: "100%", padding: "10px 5px"}}>
                    <S.Text><S.Text $weight={"700"}>{itemData.length}</S.Text>개의 구매한 상품</S.Text>
                </S.HorizontalWrapper>
                <S.ShopItemWrapper>
                    {itemData.map((item) => (
                        <S.ShopItem key={item.shopItemId} onClick={() => {
                            if(selectedTap === 4) {
                                setUseModalOpen(true);
                            } else {
                                setViewImageModalOpen(true);
                            }
                            setSelectItem(item);
                        }}>
                            <S.VerticalWrapper $gap={"5px"}>
                                {item.imageUrl ? <S.ItemImage src={item.imageUrl}/> : <BC.EmptyBox $w={"162px"} $h={"162px"}>No Images</BC.EmptyBox>}
                                <S.Text $size="15px" $weight="700" $color={item.shopCategoryId === 3 ? item.description : ""}>
                                    {item.name}
                                    {getItemAmount(item)}
                                </S.Text>
                                <S.Text $size={"13px"} $color={"#878787"}>{item.description}</S.Text>
                                <S.Text $size={"12px"} $color={"#878787"}>{formatDate(item.createdAt, 2)}</S.Text>
                            </S.VerticalWrapper>
                        </S.ShopItem>
                    ))}
                </S.ShopItemWrapper>
            </S.VerticalWrapper>
        </S.Wrapper>
    );
};

export default Inventory;