import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserFViewRoute = () => {
  const navigate = useNavigate();

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getroutees');
      return response.data;
    } catch (error) {
      console.error('Error fetching routes:', error);
      throw new Error('Failed to fetch routes');
    }
  };

  const handleUpdate = (route) => {
    // Implement update logic here
    navigate(`/update/routes/${route._id}`, { state: { route } });
  };

  return {
    fetchRoutes,
    handleUpdate,
  };
};

export default UserFViewRoute;
