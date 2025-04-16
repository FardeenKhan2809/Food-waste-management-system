import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FAdminViewRegularFWRequest = () => {
  const navigate = useNavigate();

  const fetchRegularRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getFWRegular');
      return response.data;
    } catch (error) {
      console.error('Error fetching Regular:', error);
      throw new Error('Failed to fetch Regular');
    }
  };

  
  const handleUpdate = (RegularFWRequest) => {
    navigate(`/update/Regular/${RegularFWRequest._id}`, { state: { RegularFWRequest } });
  };

  const handleDelete = async (RegularFWRequest) => {
    navigate(`/delete/Regular/${RegularFWRequest._id}`, { state: { RegularFWRequest } });
  };

  return {
    fetchRegularRequest,
    handleUpdate,
    handleDelete,
  };
};

export default FAdminViewRegularFWRequest;
