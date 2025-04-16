import axios from 'axios';

const ReportFViewOccasionalFWRequest = () => {

  const fetchOccasionalRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getOccasional-fw');
      return response.data;
    } catch (error) {
      console.error('Error fetching Occasional:', error);
      throw new Error('Failed to fetch Occasional');
    }
  };

  
  return {
    fetchOccasionalRequest,
  };
};

export default ReportFViewOccasionalFWRequest;
