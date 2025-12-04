import { useParams } from "react-router-dom";
import WrongPage from "../wrong/WrongPage";
import PostUpdateEditor from "@/components/editor/postUpdateEditor";
import AnnouncementUpdateEditor from "@/components/editor/announcementUpdateEditor";

const UpdateEditor = () => {
    const {type} = useParams();

    const getBoardComponent = () => {
        switch(type) {
            case "post": return <PostUpdateEditor />;
            case "announcement": return <AnnouncementUpdateEditor />;
            default : return <WrongPage />;
        }
    };

    return (
        <>
            {getBoardComponent()}
        </>
    )
};

export default UpdateEditor;