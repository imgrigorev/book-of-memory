import { Loader } from 'shared/ui';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { sessionActions, useAppDispatch } from 'app/store';

export const LoginElkRedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('window.location', window.location);

    if (!location.search) {
      window.location.href =
        'https://lk.orb.ru/oauth/authorize?client_id=27&state=http://hackathon-2.orb.ru&redirect_uri=http://hackathon-2.orb.ru/login-elk-redirect&response_type=code&scope=email+auth_method';
      return;
    }

    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (window.location.hostname !== 'localhost') {
      window.location.href = `http://localhost:5173/login-elk-redirect?code=${code}`;
      return;
    }

    if (code) {
      axios.get(`http://localhost:8083/api/v1/elk-auth?code=${code}`).then(res => {
        window.localStorage.setItem('token-elk', res.data.data.token);
        navigate('/');
        dispatch(sessionActions.setIsAuthenticated(true));
      });
    }
  }, []);

  return <Loader />;
};
