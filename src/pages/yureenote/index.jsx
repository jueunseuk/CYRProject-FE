import { useParams } from "react-router-dom";
import WrongPage from "../wrong/WrongPage";
import AlbumList from "@/components/yureenote/albumList";
import SongList from "@/components/yureenote/songList";
import SongDetail from "@/components/yureenote/songDetail";

const YureeNote = () => {
    const { subPath, albumId, songId } = useParams();

    const getComponent = () => {
        if(albumId && songId) {
            return <SongDetail/>;
        }

        if(albumId) {
            return <SongList/>;
        }

        switch(subPath) {
            case "albums": return <AlbumList/>;
            default: return <WrongPage/>;
        }
    };

    return (
        <>
            {getComponent()}
        </>
    );
};

export default YureeNote;