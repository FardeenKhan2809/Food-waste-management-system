import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const useUpdateSlurryDistribution = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    farmerName: '',
    mobileNo: '',
    address: '',
    date: '',
    quantity: '',
    submissionDate: formattedDate,
  });
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/updateslurrydistributions/${id}`, formData);
      window.alert('Slurry distribution updated successfully!');
    } catch (error) {
      console.error('Error updating slurry distribution:', error);
      window.alert('Failed to update slurry distribution.');
    }
  };

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

  useEffect(() => {
    fetchSlurryDistribution();
  }, [id]); 

  return { formData, handleChange, handleSubmit, loading, navigate };
};

export default useUpdateSlurryDistribution;