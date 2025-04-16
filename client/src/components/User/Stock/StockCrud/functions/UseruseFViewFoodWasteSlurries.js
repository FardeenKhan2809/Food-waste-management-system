import { useState, useEffect } from 'react';
import axios from 'axios';

const UseruseFViewFoodWasteSlurries = () => {
  const [foodWasteSlurries, setFoodWasteSlurries] = useState([]);
  const [totalSlurry, setTotalSlurry] = useState(0);
  const [totalFoodWaste, setTotalFoodWaste] = useState(0);
  const [error, setError] = useState(null);

  const fetchFoodWasteSlurries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/foodwasteslurries');
      setFoodWasteSlurries(response.data);
      calculateTotals(response.data);
    } catch (error) {
      setError('Error fetching food waste slurries');
    }
  };

  const calculateTotals = (data) => {
    let slurryTotal = 0;
    let foodWasteTotal = 0;
    data.forEach((item) => {
      if (item.type === 'Slurry') {
        slurryTotal += item.quantity;
      } else {
        foodWasteTotal += item.quantity;
      }
    });
    setTotalSlurry(slurryTotal);
    setTotalFoodWaste(foodWasteTotal);
  };

  useEffect(() => {
    fetchFoodWasteSlurries();
  }, []);

  return { foodWasteSlurries, totalSlurry, totalFoodWaste, error, fetchFoodWasteSlurries };
};

export default UseruseFViewFoodWasteSlurries;
