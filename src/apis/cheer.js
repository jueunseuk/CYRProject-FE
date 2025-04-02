import axios from "axios";
import instance from "./instance";

export const requestCheer = () => {
    return instance.post("/cheer/update");
}
