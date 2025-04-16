import { useState, useEffect } from 'react'; // This line is added: Importing useEffect for fetching user data
import Axios from 'axios';

const FOMember = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        mobileNo: '',
        username: '',
        password: '',
        dateOfBirth: '',
        BeVolunteer: '', // New field for Date of Birth
        securityQuestion: '',
        answer: '',
    });

    const [loading, setLoading] = useState(true); // This line is added: State for tracking loading status
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); // This line is added: State for storing error messages

    const [userData, setUserData] = useState(null); // This line is added: State for storing fetched user data
    const [id, setId] = useState(''); // This line is added: State for storing ID after successful form submission

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/api/user', { withCredentials: true });
                const userDetails = response.data;

                // Check if the user is in the Farmer category
                if (userDetails.category === 'Member') {
                setFormData({
                    name: response.data.name || '',
                    address: response.data.address || '',
                    email: response.data.email || '',
                    mobileNo: response.data.mobileNo || '',
                    username: response.data.username || '',
                    dateOfBirth: response.data.dateOfBirth || '',
                    BeVolunteer: response.data.BeVolunteer || '',
                    securityQuestion: response.data.securityQuestion || '',
                    answer: response.data.answer || '',
                });
            }
                else {
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
                const response = await Axios.post('http://localhost:5000/api/member-table', formData);
                alert(response.data.message);
                setId(response.data.id);
                setFormData({
                    name: '',
                    address: '',
                    email: '',
                    mobileNo: '',
                    username: '',
                    password: '',
                    dateOfBirth: '',
                    BeVolunteer: '', // New field for Date of Birth
                    securityQuestion: '',
                    answer: '',
                });
                window.history.back(); // Storing the ID after successful submission
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Registration failed. Please try again.');
            }
        
    };

    return { formData, error, handleInputChange, handleSubmit, id,loading,successMessage }; // This line is added: Returning the state and handlers
};

export default FOMember;
