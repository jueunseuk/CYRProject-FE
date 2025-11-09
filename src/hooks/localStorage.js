import { useEffect, useState, useMemo } from "react";
import * as U from "@/apis/user";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(() => {
    try {
      const str = localStorage.getItem("userInfo");
      return str ? JSON.parse(str) : { role: "GUEST" };
    } catch {
      return { role: "GUEST" };
    }
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if(!userId) return;
    
    const fetchUserInfo = async () => {
      try {
        const response = await U.getLocalInfo();
        const data = response.data;

        localStorage.setItem("userInfo", JSON.stringify(data));
        setUserInfo(data);
      } catch (error) {
        localStorage.removeItem("userInfo");
        setUserInfo({ role: "GUEST" });
      }
    };

    fetchUserInfo();
  }, []);

  return useMemo(() => userInfo, [userInfo]);
};

export default useUserInfo;
