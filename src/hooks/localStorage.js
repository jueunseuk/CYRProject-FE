import { useMemo } from "react";

const useUserInfo = () => {
  return useMemo(() => {
    try {
      const str = localStorage.getItem("userInfo");
      return str ? JSON.parse(str) : { role: "GUEST" };
    } catch {
      return { role: "GUEST" };
    }
  }, []);
};

export default useUserInfo;