import useUserInfo from "@/hooks/localStorage";
import SearchComponent from "@/components/search";

const SearchPage = () => {
    const user = useUserInfo();

    return (
        <>
            <SearchComponent />
        </>
    )
};

export default SearchPage;