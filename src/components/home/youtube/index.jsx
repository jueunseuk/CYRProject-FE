import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import { useEffect, useState } from "react";

const YoutubeComponent = () => {
    const [videoId, setVideoId] = useState(null);

    const API_KEY = import.meta.env.VITE_YOUTUBE_CLIENT_SECRET;
    const CHANNEL_ID = "UCyUnjor6wyRA2Xt3fFwnf6w";

    useEffect(() => {
        const fetchYoutubeVideo = async () => {
            try {
                const channelRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`);
                const channelData = await channelRes.json();
                const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

                const videoRes = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=1&key=${API_KEY}`
                );
                const videoData = await videoRes.json();

                setVideoId(videoData.items[0].snippet.resourceId.videoId);
            } catch (err) {
            }
        };

        fetchYoutubeVideo();
    }, []);
    
    return (
        <S.Wrapper>
            <S.TitleArea>
                <BC.Text $size={"16px"} $weight={"600"}>NEW YULTUBE</BC.Text>
            </S.TitleArea>
            <BC.HorizontalWrapper>
                {videoId && (
                    <S.Iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                
            </BC.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default YoutubeComponent;