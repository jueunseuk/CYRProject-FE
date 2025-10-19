import * as S from "./styles";
import * as UI from "@/apis/inventory";

const InventoryUseModal = ({onClose, selectItem}) => {

    const handleClickInventoryItem = async (item) => {
        try {
            const response = await UI.useInventoryItem(item.userInventoryId);
            switch(response.data.type) {
                case "ATTENDANCE_PLUS_TICKET" : {
                    alert(`아이템을 사용해서 연속 출석일 수가 ${response.data.data}로 증가하였습니다.`);
                    break;
                }
                case "RANDOM_SAND_BOX" : {
                    alert(`아이템을 사용해서 모래알을 ${response.data.data}만큼 획득했습니다.`);
                    break;
                }
                default : {
                    alert(`${item.name} 아이템을 성공적으로 사용했습니다.`);
                }
            }

            onClose();
        } catch(error) {

        }
    };
    
    return (
        <>
            <S.Wrapper onClick={onClose}>
                <S.Content>
                    <S.Text $size={"20px"}><S.Text $size={"20px"} $weight={"600"}>{selectItem.name}</S.Text> 아이템을 사용하시겠습니까?</S.Text>
                    <S.HorizontalWrapper>
                        <S.Button $bg={"#C6BC73"} style={{color: "white"}} onClick={() => handleClickInventoryItem(selectItem)}>사용</S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default InventoryUseModal;