import { useState } from 'react';
import axios from 'axios';

const useDeleteFoodWasteSlurry = () => {
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/foodwasteslurries/${id}`);
      setDeleteMessage('Record deleted successfully');
    } catch (error) {
      console.error('Error deleting food waste slurry:', error);
      setDeleteMessage('Failed to delete record');
    }
  };

  return { handleDelete, deleteMessage };
};

export default useDeleteFoodWasteSlurry;
