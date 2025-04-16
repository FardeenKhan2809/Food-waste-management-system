import axios from 'axios';

const ReportFSchedule = () => {

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getroutees');
      return response.data;
    } catch (error) {
      console.error('Error fetching routes:', error);
      throw new Error('Failed to fetch routes');
    }
  };


  return {
    fetchRoutes,
  };
};

export default ReportFSchedule;
