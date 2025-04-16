import axios from 'axios';

const ReportFViewRegularFWRequest = () => {

  const fetchRegularRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getFWRegular');
      return response.data;
    } catch (error) {
      console.error('Error fetching Regular:', error);
      throw new Error('Failed to fetch Regular');
    }
  };


  return {
    fetchRegularRequest,
  };
};

export default ReportFViewRegularFWRequest;
