import { Loader } from 'shared/ui';
import { useEffect } from 'react';
import axios from 'axios';

export const LoginElkRedirectPage = () => {
  //     https://lk.orb.ru/oauth/authorize?client_id=28&redirect_uri=http://hackathon-1.orb.ru&response_type=code&scope=email+auth_method

  useEffect(() => {
    (async () => {
      await axios
        .get(
          'https://lk.orb.ru/oauth/authorize?client_id=27&state=http://hackathon-2.orb.ru&redirect_uri=http://hackathon-2.orb.ru/login-elk-redirect&response_type=code&scope=email+auth_method',
          {},
        )
        .then(console.log);
    })();
  }, []);

  return <Loader />;
};
