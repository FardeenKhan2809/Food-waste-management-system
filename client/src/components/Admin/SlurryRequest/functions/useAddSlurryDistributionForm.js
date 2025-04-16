import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddSlurryDistributionForm = (id) => {
  const [slurryRequest, setSlurryRequest] = useState({
    farmerName: '',
    mobileNo: '',
    address: '',
    date: '',
    quantity: '',
    submissionDate: new Date().toISOString(), 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlurryRequest((prevRequest) => ({
      ...prevRequest,
      [name]: name === 'quantity' ? parseInt(value) : value,
    }));
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlurryRequestData = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:5000/api/slurryRequests/${id}`);
          const datePart = response.data.date ? response.data.date.split('T')[0] : '';
          setSlurryRequest({
            farmerName: response.data.farmerName || '',
            mobileNo: response.data.mobileNo || '',
            address: response.data.address || '',
            date: datePart,
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching slurry request:', error);
        if (error.response && error.response.status === 404) {
          setError('Slurry request not found');
        } else {
          setError('Error fetching data');
        }
        setLoading(false);
      }
    };

    fetchSlurryRequestData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`http://localhost:5000/api/slurrydistributions`, slurryRequest);
      const { message } = response.data;
      window.alert(message);
      setSlurryRequest({
        farmerName: '',
        mobileNo: '',
        address: '',
        date: '',
        quantity: '',
        submissionDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error adding slurry distribution:', error);
      setError('Failed to add slurry distribution');
      if (error.response && error.response.data.message) {
        window.alert(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { slurryRequest, loading, error, handleChange, handleSubmit };
};

export default useAddSlurryDistributionForm;
