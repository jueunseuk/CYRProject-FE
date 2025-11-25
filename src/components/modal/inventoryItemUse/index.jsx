import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as U from "@/apis/user";
import * as UI from "@/apis/inventory";
import { useEffect, useState } from "react";
import { UserProfileImage } from "@/common/func/UserProfile";

const InventoryUseModal = ({onClose, selectItem}) => {
    const [targetId, setTargetId] = useState();
    const [targetName, setTargetName] = useState("");
    const [userData, setUserData] = useState([]);

    const handleClickInventoryItem = async (item) => {
        try {
            const response = await UI.useInventoryItem(item.userInventoryId, {"otherId": targetId});
            switch(response.data.type) {
                case "ATTENDANCE_PLUS_TICKET" : {
                    alert(`아이템을 사용해서 연속 출석일 수가 ${response.data.data}로 증가하였습니다.`);
                    break;
                }
                case "RANDOM_SAND_BOX" : {
                    alert(`아이템을 사용해서 모래알을 ${response.data.data}만큼 획득했습니다.`);
                    break;
                }
                case "GLASS_GIFT_TICKET" : {
                    alert(`아이템을 사용해서 님에게 성공적으로 유리 조각을 선물했습니다.`);
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

    const fetchUserList = async () => {
        try {
            const response = await U.getUserList();
            setUserData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);
    
    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.Text $size={"18px"}><S.Text $size={"18px"} $weight={"600"}>{selectItem.name}</S.Text> 아이템을 {targetName ? `${targetName}님에게 `: ""}사용하시겠습니까?</S.Text>
                    <S.HorizontalWrapper>
                        <S.Button $bg={"#C6BC73"} style={{color: "white"}} onClick={() => handleClickInventoryItem(selectItem)}>사용</S.Button>
                        <S.Button $bg={"#E7E7E7"} onClick={onClose}>취소</S.Button>
                    </S.HorizontalWrapper>
                </S.Content>
                {selectItem.shopItemId === 402 &&
                    <BC.VerticalWrapper $gap={"3px"} 
                        style={{backgroundColor: "white", width: "240px", maxHeight: "500px", boxShadow: "0px 0px 16px rgb(0, 0, 0, 0.5)", padding: "15px 25px", borderRadius: "10px", overflowY: "auto", cursor: "pointer"}}
                    >
                        <BC.Text $size={"15px"} $weight={"600"}>사용자 목록</BC.Text>
                        {userData?.map((user) => (
                            <BC.HorizontalWrapper key={user.userId} $jc={"flex-start"} $gap={"10px"} style={{width: "100%", backgroundColor: targetId === user.userId ? "#eee" : "", padding: "5px", borderRadius: "8px", transition: "all 0.2s ease"}}
                                onClick={() => {setTargetId(user.userId); setTargetName(user.nickName);}}
                            >
                                <UserProfileImage user={user} height={"30px"} width={"30px"} radius={"30px"} />
                                <BC.Text $size={"11px"} $weight={"600"} style={{backgroundColor: "#eee", borderRadius: "5px", padding: "1px 5px"}}>{user.role}</BC.Text>
                                <BC.Text $size={"13px"}>{user.nickName}</BC.Text>
                            </BC.HorizontalWrapper>
                        ))}
                    </BC.VerticalWrapper>
                }
            </S.Wrapper>
        </>
    )
};

export default InventoryUseModal;