import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDeleteSlurryDistribution = (id) => {
  const [formData, setFormData] = useState({
    farmerName: '',
    mobileNo: '',
    address: '',
    date: '',
    quantity: '',
    submissionDate: new Date(),
  });
  const [loading, setLoading] = useState(true); 

  const fetchSlurryDistribution = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/viewslurrydistributions/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching slurry distribution:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteslurrydistributions/${id}`);
      setFormData({
        farmerName: '',
        mobileNo: '',
        address: '',
        date: '',
        quantity: '',
        submissionDate: new Date(),
      });
    } catch (error) {
      console.error('Error deleting slurry distribution:', error);
    }
  };

  useEffect(() => {
    fetchSlurryDistribution();
  }, [id]);

  return { formData, handleDelete, loading };
};


export default useDeleteSlurryDistribution;
