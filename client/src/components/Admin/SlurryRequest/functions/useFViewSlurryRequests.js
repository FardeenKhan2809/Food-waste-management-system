import { useState, useEffect } from 'react';
import axios from 'axios';

const useFViewSlurryRequests = () => {
  const [slurryRequests, setSlurryRequests] = useState([]);
  const [totalSlurry, setTotalSlurry] = useState(0);
  const [totalFoodWaste, setTotalFoodWaste] = useState(0);
  const [error, setError] = useState(null);

  const fetchSlurryRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/slurryRequests');
      setSlurryRequests(response.data);
      calculateTotals(response.data);
    } catch (error) {
      setError('Error fetching slurry requests');
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
    fetchSlurryRequests();
  }, []);

  return { slurryRequests, totalSlurry, totalFoodWaste, error, fetchSlurryRequests };
};

export default useFViewSlurryRequests;
