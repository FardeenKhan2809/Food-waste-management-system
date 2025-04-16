import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout()  {
    const navigate = useNavigate();
    
    
  const handleLogout = async () => {
    try {
      // Disable back navigation
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
  
      const response = await axios.post('http://localhost:5000/api/logout');
      if (response.status === 200) {
        // Redirect to login page after successful logout
        navigate('/');
      } else {
        console.error('Logout failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Re-enable back navigation
      window.removeEventListener('popstate', () => {
        window.history.pushState(null, null, window.location.pathname);
      });
    }
  };
  
    return (
      <>
     
  
       
      
      </>
    );
  };
  
  export default Logout;
  