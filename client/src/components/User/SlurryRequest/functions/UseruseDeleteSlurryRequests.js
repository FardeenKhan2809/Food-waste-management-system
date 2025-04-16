import { useState } from 'react';
import axios from 'axios';

const UseruseDeleteSlurryRequests = () => {
  const [deleteMessage, setDeleteMessage] = useState('');
  const [slurry, setSlurry] = useState(null);

  const fetchSlurry = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/slurryRequests/${id}`);
      setSlurry(response.data);
    } catch (error) {
      console.error('Error fetching slurry request:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/slurryRequests/${id}`);
      setDeleteMessage('Record deleted successfully');
      window.alert('Record deleted successfully');
    } catch (error) {
      console.error('Error deleting slurry request:', error);
      setDeleteMessage('Failed to delete record');
      window.alert('Failed to delete record');
    }
  };

  return { fetchSlurry, handleDelete, deleteMessage, slurry };
};

export default UseruseDeleteSlurryRequests;
