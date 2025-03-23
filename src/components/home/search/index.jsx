import * as S from "./style";

const Search = () => {

    const handleRequestPost = () => {

    }

    return (
        <>
            <S.Wrapper>
                <S.SearchInput onKeyDown={handleRequestPost}></S.SearchInput>
                <S.SearchButton />
            </S.Wrapper>
        </>
    );
}

export default Search;