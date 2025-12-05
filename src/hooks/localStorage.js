import { useEffect, useState, useMemo } from "react";
import * as U from "@/apis/user";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(() => {
    try {
      const str = localStorage.getItem("userInfo");
      return str ? JSON.parse(str) : null;
    } catch {
      return { role: "GUEST" };
    }
  });

  const fetchUserInfo = async () => {
    try {
      const response = await U.getLocalInfo();
      const data = response.data;

      localStorage.setItem("userInfo", JSON.stringify(data));
      setUserInfo(data);
    } catch (error) {
      localStorage.removeItem("userInfo");
    }
  };

  useEffect(() => {
    if(userInfo == null) {
      return;
    }
    fetchUserInfo();
  }, [userInfo]);

  return useMemo(() => userInfo, [userInfo]);
};

export default useUserInfo;
