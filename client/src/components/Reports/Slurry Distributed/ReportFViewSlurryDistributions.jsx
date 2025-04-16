import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReportuseFViewSlurryDistributions from './ReportuseFViewSlurryDistributions';
import { Button, Typography } from '@material-tailwind/react';
import Footer from '../../Footer/Footer';
import SlurryDistributionPrintView from './SlurryDistributionPrintView';

function ReportFViewSlurryDistributions() {
  const { slurryDistributions, error } = ReportuseFViewSlurryDistributions();
  const navigate = useNavigate();
  const [printViewData, setPrintViewData] = React.useState(null);

  const handleViewPrint = (data) => {
    setPrintViewData(data);
  };
  
  const totalQuantity = slurryDistributions.reduce((total, distribution) => total + distribution.quantity, 0);

  return (
    <>
      <div className="container mt-4 pt-4">
        <Typography variant="h3" className="text-center mb-2">Slurry Distributions</Typography>
        <Typography variant="h5" color='green' className="text-center mb-2">Total Slurry Distributed: {totalQuantity}Kgs</Typography>
        <Link to="/adminviewstock">
          <Button color="green" className="mr-2 mb-3">
           View Remaining Slurry
          </Button>
        </Link>
        <Button color="light-blue" size="lg" className="mb-3" onClick={() => window.history.back()}>Back</Button>
        {error && <Typography color="red" className="text-danger">{error}</Typography>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className='px-4 py-2'>Farmer Name</th>
              <th className='px-4 py-2'>Phone Number</th>
              <th className='px-4 py-2'>Address</th>
              <th className='px-4 py-2'>Slurry Request Date</th>
              <th className='px-4 py-2'>Quantity</th>
              <th className='px-4 py-2'>Submission Date</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {slurryDistributions.map(distribution => (
              <tr key={distribution._id}>
                <td className='border px-4 py-2'>{distribution.farmerName}</td>
                <td className='border px-4 py-2'>{distribution.mobileNo}</td>
                <td className='border px-4 py-2'>{distribution.address}</td>
                <td className='border px-4 py-2'>{new Date(distribution.date).toLocaleDateString()}</td>
                <td className='border px-4 py-2'>{distribution.quantity}</td>
                <td className='border px-4 py-2'>{new Date(distribution.submissionDate).toLocaleDateString()}</td>
                <td className='border px-4 py-2'>
                  <div className="flex justify-center">
                    <Button color="green" onClick={() => handleViewPrint(distribution)}>View</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      {printViewData && <SlurryDistributionPrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
}

export default ReportFViewSlurryDistributions;
