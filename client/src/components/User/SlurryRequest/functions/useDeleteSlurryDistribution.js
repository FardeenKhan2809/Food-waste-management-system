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
  const [loading, setLoading] = useState(true); // Added state for loading indicator

  const fetchSlurryDistribution = async () => {
    setLoading(true); // Show loading indicator while fetching
    try {
      const response = await axios.get(`http://localhost:5000/api/viewslurrydistributions/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching slurry distribution:', error);
    } finally {
      setLoading(false); // Hide loading indicator after fetching
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteslurrydistributions/${id}`);
      // Reset form data after successful deletion
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
      // Handle deletion error (e.g., display error message)
    }
  };

  useEffect(() => {
    fetchSlurryDistribution();
  }, [id]); // Fetch data only when id changes

  return { formData, handleDelete, loading };
};


export default useDeleteSlurryDistribution;
