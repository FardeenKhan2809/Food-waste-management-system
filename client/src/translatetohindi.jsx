import React from 'react';

const translations = {
  'Home': 'होम',
  'About Us': 'हमारे बारे में',
  'Sign-In': 'साइन इन करें',
  'Donate Us': 'हमें दान करें',
  'Food Waste Management System': 'खाद्य अपशिष्ट प्रबंधन प्रणाली',
  // Add more translations as needed
};

const TranslateToHindi = ({ text }) => {
  const translatedText = translations[text] || text;
  return <>{translatedText}</>;
};

export default TranslateToHindi;
