import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useUser() // Get the appUser state to check if the user is authenticated

  if (user === '') {
    // If user is not authenticated, redirect to the login page or home page
    return (
    <Navigate to="/" />
    );
  }

  // Render the protected component if authenticated
  return element;
};

export default ProtectedRoute;
