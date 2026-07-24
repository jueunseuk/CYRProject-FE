import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as UBS from "@/apis/userBoardSetting";
import dash from "@/assets/icon/etc/dash.svg";
import bookmark from "@/assets/icon/etc/bookmark.svg";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { BOARD_GROUPS, SERIAL_BOARDS } from "@/constants/boardGroup";
import useUserInfo from "@/hooks/localStorage";

const Board = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const [favoriteBoards, setFavoriteBoards] = useState([]);

    const handleNavigateBoard = (path) => {
        navigate(`/${path}`);
    };

    const fetchUserBoard = async () => {
        if(!user?.userId) {
            setFavoriteBoards([]);
            return;
        }

        try {
            const response = await UBS.getUserBoardList();
            const favoriteBoardIds = new Set((response.data ?? []).map(Number));
            const result = SERIAL_BOARDS.filter((board) => favoriteBoardIds.has(board.id));
            setFavoriteBoards(result);
        } catch(error) {
            setFavoriteBoards([]);
        }
    };

    useEffect(() => {
        fetchUserBoard();
    }, [user?.userId]);

    return (
        <S.Wrapper>
            <S.BoardBox>
                <S.Title>
                    <BC.Icon src={bookmark} $w={"15px"}/>
                    즐겨찾기 게시판
                </S.Title>

                {favoriteBoards.length > 0 &&
                    <S.SubBoardBox>
                        {favoriteBoards.map((board) => (
                            <S.SubTitle key={board.id} onClick={() => handleNavigateBoard(board.path)}>
                                <S.DashArea src={dash}/>
                                {board.label}
                                {board.icon && <S.IconArea src={board.icon}/>}
                            </S.SubTitle>
                        ))}
                    </S.SubBoardBox>
                }
            </S.BoardBox>

            {BOARD_GROUPS.map((group) => (
                <Fragment key={group.key}>
                    {group.type === "single" ?
                        group.boards.map((board) => (
                            <Fragment key={board.id}>
                                <S.Contour/>
                                <S.BoardBox>
                                    <S.Title onClick={() => handleNavigateBoard(board.path)}>
                                        {board.icon && <S.IconArea src={board.icon}/>}
                                        {board.label}
                                    </S.Title>
                                </S.BoardBox>
                            </Fragment>
                        ))
                        :
                        <>
                            <S.Contour/>
                            <S.BoardBox>
                                <S.Title>
                                    {group.icon && <S.IconArea src={group.icon}/>}
                                    {group.label}
                                </S.Title>

                                <S.SubBoardBox>
                                    {group.boards.map((board) => (
                                        <S.SubTitle key={board.id} onClick={() => handleNavigateBoard(board.path)}>
                                            <S.DashArea src={dash}/>
                                            {board.label}
                                            {board.icon && <S.IconArea src={board.icon}/>}
                                        </S.SubTitle>
                                    ))}
                                </S.SubBoardBox>
                            </S.BoardBox>
                        </>
                    }
                </Fragment>
            ))}
        </S.Wrapper>
    );
};

export default Board;