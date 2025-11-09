import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 20px;
`;

export const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 20px;
    background-color: #fcf9e5ff;
    gap: 5px;
    border-left: 3px solid #C6BC73;
`;

export const TabWrapper = styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px solid #cacaca;
    width: 100%;
`;

export const NavigateText = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: ${({ $active }) => ($active ? "600" : "400")};
    padding: 10px 25px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "black" : "#666")};
    background-color: ${({ $active }) => ($active ? "#f6f6f6" : "white")};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: ${({ $width }) => $width}px;
    background: black;
    transition: transform 0.3s ease;
    transform: translateX(${({ $offset }) => $offset}px);
`;

export const TopRankItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: flex-end;
    width: 100%;
    position: relative;
`;

export const RankItemWrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
`;

export const TopRankItem = styled.div`
    width: 180px;
    border-radius: 10px;
    transition: all 0.3s ease;
    gap: 10px;
`;

export const RestRankItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    gap: 10px;
`;

export const ProfileImage = styled.img`
    width: ${({$w}) => $w || "100%"};
    height: ${({$h}) => $h || "100%"};
    border-radius: ${({$r}) => $r || "100%"};
    object-fit: cover;
    cursor: pointer;
    border: 3px solid ${({$c}) => $c || "none"};
`;