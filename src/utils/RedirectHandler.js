import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const RedirectHandler = () => {
  const { username } = useParams(); // Get the username parameter
  const navigate = useNavigate(); // Navigate programmatically
  const { setAppUser } = useApp();

  useEffect(() => {
    if (username) {
      // If a username parameter exists, navigate to the ProfileView of that person
      navigate(`/profile/${username}`);
      setAppUser('client');
    } else {
      // Otherwise, navigate to the home page
      navigate('/');
      setAppUser('user');
    }
  }, [username, navigate, setAppUser]);

  return null; // No need to render anything
};

export default RedirectHandler;
