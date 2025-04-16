import { useState, useEffect } from 'react'; // This line is added: Importing useEffect for fetching user data
import Axios from 'axios';

const FRegularFWRequest = () => {
    const [formData, setFormData] = useState({
        organisationName: '',
        requesterName: '',
        date: '',
        address: '',
        email: '',
        mobileNo: '',
        approxQuantity: '',
    });
    const [requestId, setRequestId] = useState('');
    const [loading, setLoading] = useState(true); // This line is added: State for tracking loading status
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); // This line is added: State for storing error messages

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/api/user', { withCredentials: true });
                const userDetails = response.data;

                // Check if the user is in the Farmer category
                if (userDetails.category === 'Hotel'|| userDetails.category === 'Hostel') {
                    // Pre-fill form data based on fetched user data
                    setFormData({
                        organisationName: userDetails.organisationName || '',
                        requesterName: userDetails.name || '',
                        date: new Date().toISOString().slice(0, 10), // Default to today's date
                        address: userDetails.address || '',
                        email: userDetails.email || '',
                        mobileNo: userDetails.mobileNo || '',
                        approxQuantity: '', // Initialize approxQuantity as empty
                    });
                    
                  } else {
                    setError('User category not suitable for this request');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to fetch user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage(null);
        try {
            const response = await Axios.post('http://localhost:5000/api/regular-fw', formData);
            alert(response.data.message);
            setRequestId(response.data.requestId);
            // Reset form data after successful submission
            setFormData({
                organisationName: '',
                requesterName: '',
                date: '',
                address: '',
                email: '',
                mobileNo: '',
                approxQuantity: '',
            });
            window.history.back();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Registration failed. Please try again.');
        }
        setLoading(false);
    };
    
    

    // Return form data and handlers
    return { formData, requestId, handleInputChange, handleSubmit, loading, error ,successMessage}; // This line is added: Returning loading and error states
};

export default FRegularFWRequest;
