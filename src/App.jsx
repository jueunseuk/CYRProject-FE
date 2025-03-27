import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { RouterObject } from './RouterList';
import axios from 'axios';
import '@/styles/index.css';

const AppWithAuth = () => {

    useEffect(() => {
        const restoreLogin = async () => {
          try {
              const res = await axios.post(
                  `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/token/access/reset`,
                  {},
                  { withCredentials: true }
              );

            if(res.data && res.data.userId) {
                localStorage.setItem("userInfo", JSON.stringify({
                    userId: res.data.userId,
                    nickname: res.data.nickname,
                    role: res.data.role,
                    name: res.data.name,
                    createdAt: res.data.createdAt,
                    profileUrl: res.data.profileUrl
                }));
            }

          } catch (error) {
              console.log("Failed to Login");
              localStorage.removeItem("userInfo");
          }
      };

      restoreLogin();
    }, []);

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