import React, { useState, useEffect } from 'react';
import ReportFViewRegularFWRequest from './ReportFViewRegularFWRequest';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';
import RegularFWPrintView from './RegularFWRequestPrintView';

const ReportAdminViewRegularFWRequest = () => {
  const [regularFWRequests, setRegularFWRequests] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRegularRequest } = ReportFViewRegularFWRequest();
  const [searchQuery, setSearchQuery] = useState('');
  const [printViewData, setPrintViewData] = useState(null); // State to manage print view data

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRegularRequest();
        setRegularFWRequests(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRegularRequest]);

  // Filter regularFWRequests based on search query
  const filteredRequests = regularFWRequests.filter(request =>
    request.organisationName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Calculate total approximate quantity
  const totalApproxQuantity = filteredRequests.reduce((total, request) => total + request.approxQuantity, 0);

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
        <Typography variant='h3' className="text-center mb-3">Regular FW Request Table</Typography>
        <Typography variant='h6' color='green'>Total Requests received: {filteredRequests.length}</Typography>
        <Typography variant='h6' color='green' className='mb-2'>Total Food Waste Collected: {totalApproxQuantity} Kgs</Typography>
        <Button color="light-blue" size="lg" className='mb-4 me-2 ' onClick={() => window.history.back()}>Back</Button>
        <div className="flex items-center justify-center mb-3">
        <Typography className="form-label font-bold mt-2 mr-2">Search Transporter:</Typography>
          <input 
            type="text" 
            placeholder="Search by organization name" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="form-control w-50 mb-2"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <table className="table-auto border-collapse border border-black">
          <thead className="bg-gray-800 text-white text-center">
            <tr>
              <th className="px-4 py-2">Request ID</th>
              <th className="px-4 py-2">Organisation Name</th>
              <th className="px-4 py-2">Requester Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">approxQuantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(regularFWRequest => (
              <tr key={regularFWRequest._id}>
                <td className="border px-4 py-2">{regularFWRequest.requestId}</td>
                <td className="border px-4 py-2">{regularFWRequest.organisationName}</td>
                <td className="border px-4 py-2">{regularFWRequest.requesterName}</td>
                <td className="border px-4 py-2">{regularFWRequest.date}</td>
                <td className="border px-4 py-2">{regularFWRequest.address}</td>
                <td className="border px-4 py-2">{regularFWRequest.mobileNo}</td>
                <td className="border px-4 py-2">{regularFWRequest.approxQuantity}</td>
                <td className="border px-4 py-2">
                  <div className="d-flex">
                    <Button
                      color="green"
                      onClick={() => handleViewClick(regularFWRequest)}
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
      <Footer />
      {printViewData && <RegularFWPrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
};

export default ReportAdminViewRegularFWRequest;
