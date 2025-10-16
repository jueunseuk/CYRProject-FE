import * as S from "./styles";
import * as SH from "@/apis/shop";

const ShopBuyModal = ({onClose, selectItem}) => {

    const handleClickShopItem = async (item) => {
            try {
                const itemId = item.shopItemId;
                await SH.postPurchaseShopItem(itemId);
                alert(`${item.name} 아이템을 성공적으로 구매했습니다.`);
                onClose();
            } catch(error) {
    
            }
        };
    return (
        <>
            <S.Wrapper onClick={onClose}>
                <S.Content>
                    <S.Text $size={"20px"}><S.Text $size={"20px"} $weight={"600"}>{selectItem.name}</S.Text> 아이템을 구매하시겠습니까?</S.Text>
                    <S.HorizontalWrapper>
                        <S.Button $bg={"#C6BC73"} style={{color: "white"}} onClick={() => handleClickShopItem(selectItem)}>구매</S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default ShopBuyModal;