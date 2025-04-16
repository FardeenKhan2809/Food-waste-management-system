import axios from 'axios';
import { useState,useEffect } from 'react';

const FSchedule = () => {
    const [formData, setFormData] = useState({
        requestId: '',
        organisationName: '',
        description: '',
        requesterName: '',
        date: '',
        mobileNo: '',
        email: '',
        address: '',
        approxQuantity: '',
        routeName: '',
        status:'',
       
    });


   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchRegularRequest = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Regular/schedule-datewise');
            return response.data;
        } catch (error) {
            console.error('Error fetching Regular:', error);
            throw new Error('Failed to fetch Regular');
        }
    };

    const fetchOccasionalRequest = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Occasional/schedule-datewise');
            return response.data;
        } catch (error) {
            console.error('Error fetching Occasional:', error);
            throw new Error('Failed to fetch Occasional');
        }
    };

    const fetchCombinedRequests = async () => {
        try {
            const regularResponse = await fetchRegularRequest();
            const occasionalResponse = await fetchOccasionalRequest();
            const combinedRequests = [...regularResponse, ...occasionalResponse];
            return combinedRequests;
        } catch (error) {
            console.error('Error fetching combined requests:', error);
            throw new Error('Failed to fetch combined requests');
        }
    };

    

    return {
        handleInputChange,
        fetchCombinedRequests,
        
    };
};

export default FSchedule;
