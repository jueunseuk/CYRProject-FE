import * as BC from "@/common/basic/BasicComponent";
import * as UBS from "@/apis/userBoardSetting";
import bookmark from "@/assets/icon/etc/bookmark.svg";
import not_bookmark from "@/assets/icon/etc/not_bookmark.svg";
import { BOARDS } from "@/constants/boards";
import { useEffect, useState } from "react";

const BoardSetting = () => {
    const [boardData, setBoardData] = useState([]);

    const fetchUserBoard = async () => {
        try {
            const response = await UBS.getUserBoardList();
            setBoardData(response.data);
        } catch(error) {

        }
    };

    const updateUserBoard = async (boardId) => {
        try {
            const isBookmarked = boardData.some((b) => b.boardId === boardId);

            if (isBookmarked) {
            await UBS.deleteUserBookmark(boardId);
            } else {
            await UBS.postUserBookmark(boardId);
            }

            fetchUserBoard();
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchUserBoard();
    }, []);

    return (
        <BC.HorizontalWrapper $jc={"space-between"} $ai={"flex-start"} $gap={"15px"} style={{width: "100%", marginTop: "20px"}}>
            <BC.VerticalWrapper $ai={"flex-start"} $gap={"7px"} style={{ padding: "10px", border: "1px solid #C6BC73" }}>
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
                    {BOARDS[4].label}
                </BC.Text>

                {BOARDS[4].children.map((child) => {
                    const isBookmarked = boardData.includes(Number(child.id));
                    return (
                    <BC.HorizontalWrapper key={child.id} $jc={"space-between"} style={{ width: "100%" }}>
                        <BC.Text $size={"14px"}>
                            {child.label}
                            <BC.Icon src={child.icon} style={{ marginLeft: "3px" }} />
                        </BC.Text>
                        <BC.DotLine $margin={"15px"} />
                        <BC.Icon
                            $w={"15px"}
                            src={isBookmarked ? bookmark : not_bookmark}
                            style={{ cursor: "pointer" }}
                            onClick={() => updateUserBoard(child.id)}
                        />
                    </BC.HorizontalWrapper>
                    );
                })}
            </BC.VerticalWrapper>
            <BC.VerticalWrapper $ai={"flex-start"} $gap={"7px"} style={{ padding: "10px", border: "1px solid #C6BC73" }}>
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
                    {BOARDS[5].label}
                </BC.Text>

                {BOARDS[5].children.map((child) => {
                    const isBookmarked = boardData.includes(Number(child.id));
                    return (
                    <BC.HorizontalWrapper key={child.id} $jc={"space-between"} style={{ width: "100%" }}>
                        <BC.Text $size={"14px"}>
                            {child.label}
                            <BC.Icon src={child.icon} style={{ marginLeft: "3px" }} />
                        </BC.Text>
                        <BC.DotLine $margin={"15px"} />
                        <BC.Icon
                            $w={"15px"}
                            src={isBookmarked ? bookmark : not_bookmark}
                            style={{ cursor: "pointer" }}
                            onClick={() => updateUserBoard(child.id)}
                        />
                    </BC.HorizontalWrapper>
                    );
                })}
            </BC.VerticalWrapper>
            <BC.VerticalWrapper $ai={"flex-start"} $gap={"7px"} style={{ padding: "10px", border: "1px solid #C6BC73" }}>
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
                    {BOARDS[6].label}
                </BC.Text>

                {BOARDS[6].children.map((child) => {
                    const isBookmarked = boardData.includes(Number(child.id));
                    return (
                    <BC.HorizontalWrapper key={child.id} $jc={"space-between"} style={{ width: "100%" }}>
                        <BC.Text $size={"14px"}>
                            {child.label}
                            <BC.Icon src={child.icon} style={{ marginLeft: "3px" }} />
                        </BC.Text>
                        <BC.DotLine $margin={"15px"} />
                        <BC.Icon
                            $w={"15px"}
                            src={isBookmarked ? bookmark : not_bookmark}
                            style={{ cursor: "pointer" }}
                            onClick={() => updateUserBoard(child.id)}
                        />
                    </BC.HorizontalWrapper>
                    );
                })}
            </BC.VerticalWrapper>
            <BC.VerticalWrapper $ai={"flex-start"} $gap={"7px"} style={{ padding: "10px", border: "1px solid #C6BC73" }}>
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
                    {BOARDS[7].label}
                </BC.Text>

                {BOARDS[7].children.map((child) => {
                    const isBookmarked = boardData.includes(Number(child.id));
                    return (
                    <BC.HorizontalWrapper key={child.id} $jc={"space-between"} style={{ width: "100%" }}>
                        <BC.Text $size={"14px"}>
                            {child.label}
                            <BC.Icon src={child.icon} style={{ marginLeft: "3px" }} />
                        </BC.Text>
                        <BC.DotLine $margin={"15px"} />
                        <BC.Icon
                            $w={"15px"}
                            src={isBookmarked ? bookmark : not_bookmark}
                            style={{ cursor: "pointer" }}
                            onClick={() => updateUserBoard(child.id)}
                        />
                    </BC.HorizontalWrapper>
                    );
                })}
            </BC.VerticalWrapper>
        </BC.HorizontalWrapper>
    );
};

export default BoardSetting;