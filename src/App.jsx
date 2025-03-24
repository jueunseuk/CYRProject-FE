import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { RouterObject } from './RouterList';
import '@/styles/index.css';
import axios from 'axios';

const AppWithAuth = () => {
  const setUser = useSetRecoilState(userState);

    useEffect(() => {
        const restoreLogin = async () => {
          try {
              const res = await axios.post(
                  `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/token/access/reset`,
                  {},
                  { withCredentials: true }
            );

            const accessToken = res.headers["authorization"];
            if(accessToken) {
              setUser({
                  userId: res.data.userId,
                  name: res.data.name,
                  nickname: res.data.nickname,
                  profileUrl: res.data.profileUrl,
                  accessToken: accessToken,
                  role: res.data.role,
                });
            }
          } catch (error) {
              console.log("로그인 실패 또는 비로그인 상태");
          }
      };

      restoreLogin();
    }, [setUser]);

  return <RouterProvider router={RouterObject} />;
};

function App() {
  return (
    <StrictMode>
      <RecoilRoot>
        <AppWithAuth />
      </RecoilRoot>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App;