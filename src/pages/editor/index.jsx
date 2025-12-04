import { useParams } from "react-router-dom";
import WrongPage from "../wrong/WrongPage";
import PostEditor from "@/components/editor/postEditor";

const Editor = () => {
    const {type} = useParams();

    const getBoardComponent = () => {
        switch(type) {
            case "post": return <PostEditor />;
            default : return <WrongPage />;
        }
    };

    return (
        <>
            {getBoardComponent()}
        </>
    )
};

export default Editor;