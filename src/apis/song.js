import instance from "./instance";

export const getAllSongsByAlbum = async (albumId) => {
    try {
        const response = await instance.get(`/albums/${albumId}/songs`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
        }

        throw error;
    }
}

export const getSongInformation = async (albumId, songId) => {
    try {
        const response = await instance.get(`/albums/${albumId}/songs/${songId}`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
            
        }

        throw error;
    }
}
