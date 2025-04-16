import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../AdminNavbar';
import Footer from '../../Footer/Footer';

const FoodWasteSlurryForm = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        quantity: '',
    });

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];

        try {
            const response = await axios.post(`http://localhost:5000/api/${type}`, { quantity: formData.quantity, date: currentDate });

            if (response.data.message === `${type} data updated successfully`) {
                alert(`${type === 'foodWaste' ? 'Food waste' : 'Slurry'} data updated successfully!`);
            } else {
                alert(`${type === 'foodWaste' ? 'Food waste' : 'Slurry'} data added successfully!`);
            }

            setFormData({ quantity: '' }); 
        } catch (error) {
            console.error('Error adding data:', error);
            alert(`Failed to add ${type === 'foodWaste' ? 'food waste' : 'slurry'} data. Please try again.`);
        }
    };

    return (
        <>
        <AdminNavbar/>
        <div className="container mt-5 border border-gray-400 rounded p-4 pl-6 pr-6">
            <div className="row">
                <div className="col-md-6">
                    <Typography variant='h3' className="text-center mb-4">Add Food Waste</Typography>
                    <form onSubmit={(e) => handleSubmit(e, 'foodWaste')} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-bold">Type:</label>
                            <input type="text" className="form-control mt-1" value="Food Waste" readOnly />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Quantity:</label>
                            <input type="number" className="form-control mt-1" value={formData.quantity} onChange={(e) => setFormData({ quantity: e.target.value })} />
                        </div>
                        <Button type="submit" color="green"  className="w-full mt-4">Submit Food Waste</Button>
                    </form>
                </div>
                <div className="col-md-6">
                    <Typography variant='h3' className="text-center mb-4">Add Slurry</Typography>
                    <form onSubmit={(e) => handleSubmit(e, 'slurry')} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-bold">Type:</label>
                            <input type="text" className="form-control mt-1" value="Slurry" readOnly />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Quantity:</label>
                            <input type="number" className="form-control mt-1" value={formData.quantity} onChange={(e) => setFormData({ quantity: e.target.value })} />
                        </div>
                        <Button type="submit" color="green"  className="w-full mt-4">Submit Slurry</Button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-6">
            <Button color="light-blue" size="lg" className="mb-2" onClick={() => window.history.back()}>Back</Button>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default FoodWasteSlurryForm;
