import * as S from "./style";
import * as BC from "@/common/basic/BasicComponent";
import { useSearchParams } from "react-router-dom";

const SearchComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <S.Wrapper>
            검색하기
        </S.Wrapper>
    );
};

export default SearchComponent;