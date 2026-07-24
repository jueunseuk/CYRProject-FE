import * as BC from "@/common/basic/BasicComponent";
import * as UBS from "@/apis/userBoardSetting";
import bookmark from "@/assets/icon/etc/bookmark.svg";
import not_bookmark from "@/assets/icon/etc/not_bookmark.svg";
import { BOARD_GROUPS } from "@/constants/boardGroup";
import { useEffect, useState } from "react";

const BoardSetting = () => {
    const [boardData, setBoardData] = useState([]);

    const settingGroups = BOARD_GROUPS.filter((group) => group.type === "group");

    const fetchUserBoard = async () => {
        try {
            const response = await UBS.getUserBoardList();
            setBoardData(response.data);
        } catch(error) {
            console.error("즐겨찾기 게시판 조회 실패", error);
        }
    };

    const updateUserBoard = async (boardId) => {
        try {
            const isBookmarked = boardData.includes(Number(boardId));

            if(isBookmarked) {
                await UBS.deleteUserBookmark(boardId);
            } else {
                await UBS.postUserBookmark(boardId);
            }

            fetchUserBoard();
        } catch(error) {
            console.error("즐겨찾기 게시판 변경 실패", error);
        }
    };

    useEffect(() => {
        fetchUserBoard();
    }, []);

    return (
        <BC.HorizontalWrapper
            $jc={"space-between"}
            $ai={"flex-start"}
            $gap={"15px"}
            style={{ width: "100%", marginTop: "20px" }}
        >
            {settingGroups.map((group) => (
                <BC.VerticalWrapper
                    key={group.key}
                    $ai={"flex-start"}
                    $gap={"7px"}
                    style={{
                        padding: "10px",
                        border: "1px solid #C6BC73",
                    }}
                >
                    <BC.Text
                        $size={"16px"}
                        $weight={"600"}
                        style={{
                            textAlign: "center",
                            width: "100%",
                            marginBottom: "5px",
                            paddingBottom: "5px",
                            borderBottom: "1px solid #ddd",
                        }}
                    >
                        {group.label}
                    </BC.Text>

                    {group.boards.map((board) => {
                        const isBookmarked = boardData.includes(Number(board.id));

                        return (
                            <BC.HorizontalWrapper
                                key={board.id}
                                $jc={"space-between"}
                                style={{ width: "100%" }}
                            >
                                <BC.Text $size={"14px"}>
                                    {board.label}
                                    {board.icon &&
                                        <BC.Icon
                                            src={board.icon}
                                            style={{ marginLeft: "3px" }}
                                        />
                                    }
                                </BC.Text>

                                <BC.DotLine $margin={"15px"}/>

                                <BC.Icon
                                    $w={"15px"}
                                    src={isBookmarked ? bookmark : not_bookmark}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => updateUserBoard(board.id)}
                                />
                            </BC.HorizontalWrapper>
                        );
                    })}
                </BC.VerticalWrapper>
            ))}
        </BC.HorizontalWrapper>
    );
};

export default BoardSetting;