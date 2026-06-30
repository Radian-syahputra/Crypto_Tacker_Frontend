import { useEffect } from 'react';
import { getMe } from '../services/authService';
import useAuthStore from '../store/authStore';

const useAuth = () => {
  const { setUser, clearUser, setLoading } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const response = await getMe();
        setUser(response.data);
      } catch (error) {
        clearUser();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []); // [] = hanya jalan sekali saat app pertama dibuka
};

export default useAuth;