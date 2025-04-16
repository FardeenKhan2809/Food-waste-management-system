import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserFViewDonation = () => {
  const navigate = useNavigate();

  const fetchDonation = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donation');
      return response.data;
    } catch (error) {
      console.error('Error fetching Donation:', error);
      throw new Error('Failed to fetch Donation');
    }
  };

  
  const handleUpdate = (donation) => {
    // Implement update logic here
    navigate(`/update/Donation/${donation._id}`, { state: { donation } });
  };


  return {
    fetchDonation,
    handleUpdate,
  };
};

export default UserFViewDonation;
