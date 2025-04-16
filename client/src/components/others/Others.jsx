import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";

import { OthersSidebar } from './Sidebar';
import { OthersImage } from './OthersImage';
import{ OthersCard, OthersCard1, OthersCard2} from "./OthersCard";
import Footer from '../Footer/Footer';

function Others()  {
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
   
  <div className="flex flex-col md:flex-row items-center">
    <Typography variant="h1" className="ml-6 mt-6 font-bold text-3xl text-amber-500">
      Food Waste Management System
    </Typography>
    <div className="mt-6 md:ml-auto">
      <OthersSidebar />
    </div>
  </div>


      <div className="space mb-6"></div>
      <OthersImage/>
      <div className="space"><br></br></div>
      <OthersCard/>
      <div className="space"><br></br></div>
      <OthersCard1/>
      <div className="space"><br></br></div>
      <OthersCard2/>
      <div className="space"><br></br></div>
      <Footer/>
<div className='space'><br></br></div>


     
    
    </>
  );
};

export default Others;
