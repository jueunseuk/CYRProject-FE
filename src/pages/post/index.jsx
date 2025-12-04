import { useParams } from "react-router-dom";
import BasicPost from "@/components/post/basicPost";
import GalleryPost from "@/components/post/galleryPost";
import EventPost from "@/components/post/eventPost";
import WrongPage from "../wrong/WrongPage";
import AnnouncementPost from "@/components/post/announcementPost";

const Post = () => {
    const {subPath} = useParams();

    const getBoardComponent = () => {
        switch(subPath) {
            case "new": return <BasicPost />;
            case "popular": return <BasicPost />;
            case "attendance": return <BasicPost />;
            case "gallery": return <GalleryPost />;
            case "announcement": return <AnnouncementPost />;
            case "event": return <EventPost />;
            case "calendar": return <BasicPost />;
            case "poll": return <BasicPost />;
            case "free": return <BasicPost />;
            case "qna": return <BasicPost />;
            case "art": return <BasicPost />;
            case "cover": return <BasicPost />;
            case "letter": return <BasicPost />;
            case "favorite": return <BasicPost />;
            case "unreleased": return <BasicPost />;
            case "concert": return <BasicPost />;
            case "goods": return <BasicPost />;
            case "suggestion": return <BasicPost />;
            case "complaint": return <BasicPost />;
            case "apply": return <BasicPost />;
            default : return <WrongPage />;
        }
    };

    return (
        <>
            {getBoardComponent()}
        </>
    );
}

export default Post;
