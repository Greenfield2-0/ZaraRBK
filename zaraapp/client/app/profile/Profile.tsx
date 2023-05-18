'use client'
import React, { useState, useEffect } from 'react';

const Profile: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const user = window.localStorage.getItem('User');
      if (user) {
        setIsLoggedIn(true);
      }
    }, []);
  
    const handleLogout = () => {
      window.localStorage.removeItem('User');
      setIsLoggedIn(false);
    };
    if (isLoggedIn) {
        return (
          <div>
            <h1>Welcome, user!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
      }
  return (
    <div>
      <h1>Welcome to your profile!</h1>
    </div>
  );
};

export default Profile;
