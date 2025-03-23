import * as S from "./styles";
import { BOARDS } from "@/constants/boards";
import dash from "@/assets/icon/etc/dash.svg";

const Board = () => {
    return (
        <>
            <S.Wrapper>
                <S.BoardBox>
                    <S.Title>
                        {BOARDS[0].label}
                    </S.Title>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[1].icon} />
                        {BOARDS[1].label}
                    </S.Title>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[2].icon} />
                        {BOARDS[2].label}
                    </S.Title>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[3].icon} />
                        {BOARDS[3].label}
                    </S.Title>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[4].icon} />
                        {BOARDS[4].label}
                    </S.Title>
                    <S.SubBoardBox>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[4].children[0].label}<S.IconArea src={BOARDS[4].children[0].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[4].children[1].label}<S.IconArea src={BOARDS[4].children[1].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[4].children[2].label}<S.IconArea src={BOARDS[4].children[2].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[4].children[3].label}<S.IconArea src={BOARDS[4].children[3].icon} /></S.SubTitle>
                    </S.SubBoardBox>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[5].icon} />
                        {BOARDS[5].label}
                    </S.Title>
                    <S.SubBoardBox>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[5].children[0].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[5].children[1].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[5].children[2].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[5].children[3].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[5].children[4].label}</S.SubTitle>
                    </S.SubBoardBox>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[6].icon} />
                        {BOARDS[6].label}
                    </S.Title>
                    <S.SubBoardBox>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[6].children[0].label}<S.IconArea src={BOARDS[6].children[0].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[6].children[1].label}<S.IconArea src={BOARDS[6].children[1].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[6].children[2].label}<S.IconArea src={BOARDS[6].children[2].icon} /></S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[6].children[3].label}<S.IconArea src={BOARDS[6].children[3].icon} /></S.SubTitle>
                    </S.SubBoardBox>
                </S.BoardBox>
                <S.Contour />
                <S.BoardBox>
                    <S.Title>
                        <S.IconArea src={BOARDS[7].icon} />
                        {BOARDS[7].label}
                    </S.Title>
                    <S.SubBoardBox>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[7].children[0].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[7].children[1].label}</S.SubTitle>
                        <S.SubTitle><S.DashArea src={dash} />{BOARDS[7].children[2].label}</S.SubTitle>
                    </S.SubBoardBox>
                </S.BoardBox>
            </S.Wrapper>
        </>
    );
}

export default Board;
