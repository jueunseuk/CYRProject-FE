import { useMemo } from "react";

const useUserInfo = () => {
  return useMemo(() => {
    try {
      const str = localStorage.getItem("userInfo");
      return str ? JSON.parse(str) : null;
    } catch {
      return null;
    }
  }, []);
};

export default useUserInfo;