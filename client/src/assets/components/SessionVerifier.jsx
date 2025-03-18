// assets/components/SessionVerifier.jsx
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SessionVerifier = ({ setRole }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3001/auth/verify')
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
          if (location.pathname !== '/login') navigate('/login');
        }
      })
      .catch(() => {
        setRole('');
        if (location.pathname !== '/login') navigate('/login');
      });
  }, []);

  return null;
};

export default SessionVerifier;
