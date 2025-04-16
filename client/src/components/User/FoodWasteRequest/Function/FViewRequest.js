import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FViewRequest = () => {
  const navigate = useNavigate();

  const fetchfoodwasterequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/foodWasteRequests');
      return response.data;
    } catch (error) {
      console.error('Error fetching FoodwasteRequest:', error);
      throw new Error('Failed to fetch FoodwasteRequest');
    }
  };

  
  const handleUpdate = (request) => {
    // Implement update logic here
    navigate(`/update/foodwasterequests/${request._id}`, { state: { request } });
  };

  const handleDelete = async (foodwasterequest) => {
    navigate(`/delete/foodwasterequests/${foodwasterequest._id}`, { state: { foodwasterequest } });
  };

  return {
    fetchfoodwasterequest,
    handleUpdate,
    handleDelete,
  };
};

export default FViewRequest;
