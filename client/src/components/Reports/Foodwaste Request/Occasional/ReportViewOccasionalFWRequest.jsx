import React, { useState, useEffect } from 'react';
import ReportFViewOccasionalFWRequest from './ReportFViewOccasionalFWRequest';
import 'tailwindcss/tailwind.css';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';
import OccasionFWPrintView from './OccasionalFWPrintView';

const ReportViewOccasionalFWRequest = () => {
  const [occasionalFWRequests, setOccasionalFWRequests] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [printViewData, setPrintViewData] = useState(null); // State to manage print view data
  
  const { fetchOccasionalRequest } = ReportFViewOccasionalFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOccasionalRequest();
        setOccasionalFWRequests(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchOccasionalRequest]);

  // Filter occasionalFWRequests based on search query
  const filteredRequests = occasionalFWRequests.filter(request =>
    request.requesterName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total approximate quantity
  const totalApproxQuantity = filteredRequests.reduce((total, request) => total + request.approxQuantity, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle view button click
  const handleViewClick = (data) => {
    setPrintViewData(data);
  };

  // Function to close print view
  const handleClosePrintView = () => {
    setPrintViewData(null);
  };

  return (
    <>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">Occasional FW Request</Typography>
        <Typography variant='h6' color='green' className="text-center">Total Requests: {filteredRequests.length}</Typography>
        <Typography variant='h6' color='green' className="text-center mb-3">Total Approximate Quantity: {totalApproxQuantity} Kgs</Typography>
        <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>Back</Button>
        <div className="flex items-center justify-center mb-3">
          <Typography className="form-label font-bold mt-2 mr-2">Search Requester:</Typography>
          <input 
            type="text" 
            placeholder="Search by requester name" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="form-control w-50 mb-2 mt-2"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Request ID</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Requester Name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Mobile No</th>
              <th className="py-2 px-4">approxQuantity</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(occasionalFWRequest => (
              <tr key={occasionalFWRequest._id}>
                <td className="py-2 px-4">{occasionalFWRequest.requestId}</td>
                <td className="py-2 px-4">{occasionalFWRequest.description}</td>
                <td className="py-2 px-4">{occasionalFWRequest.requesterName}</td>
                <td className="py-2 px-4">{occasionalFWRequest.date}</td>
                <td className="py-2 px-4">{occasionalFWRequest.address}</td>
                <td className="py-2 px-4">{occasionalFWRequest.mobileNo}</td>
                <td className="py-2 px-4">{occasionalFWRequest.approxQuantity}</td>
                <td className="py-2 px-4">
                  <div className="flex">
                    <Button
                      color="green"
                      onClick={() => handleViewClick(occasionalFWRequest)}
                    >
                      View
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
      {printViewData && <OccasionFWPrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
};

export default ReportViewOccasionalFWRequest;
