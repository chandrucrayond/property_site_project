import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({ isSignedIn, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      console.log("As not logged in -> Under Protected pages, you can't visit this site -> So redirecting to homepage");
      navigate("/login");
    }
  }, [isSignedIn, navigate]);

  return children;
}

export default Protected;

