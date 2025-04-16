import React, { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FScheduleMain from '../functions/FMainSchedule';
import SchedulePrintView from './SchedulePrintView';

function ScheduleMain() {
  const { schedule, error } = FScheduleMain();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [printViewData, setPrintViewData] = useState(null);

  const filteredSchedule = schedule.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleViewPrint = (data) => {
    setPrintViewData(data);
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <Typography variant='h1' className="text-center">Schedule</Typography>
        <div className="flex items-center justify-center mb-3">
          <Typography className="form-label font-bold mt-2 mr-2">Search:</Typography>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control w-50 mb-2 mt-2"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Request ID</th>
              <th className="px-4 py-2">Route Name</th>
              <th className="px-4 py-2">Organisation Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Requester Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Approx Quantity</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredSchedule.map(schedule => (
              <tr key={schedule._id}>
                <td className="border px-4 py-2">{schedule.requestId}</td>
                <td className="border px-4 py-2">{schedule.routeName}</td>
                <td className="border px-4 py-2">{schedule.organisationName}-</td>
                <td className="border px-4 py-2">{schedule.description}-</td>
                <td className="border px-4 py-2">{schedule.requesterName}</td>
                <td className="border px-4 py-2">{schedule.date}</td>
                <td className="border px-4 py-2">{schedule.email}</td>
                <td className="border px-4 py-2">{schedule.mobileNo}</td>
                <td className="border px-4 py-2">{schedule.approxQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
        <Button color="green" size='lg' className="mb-2 me-2" onClick={() => handleViewPrint(schedule)}>View</Button>
        <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>Back</Button>
        </div>
      </div>
      {printViewData && <SchedulePrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
}

export default ScheduleMain;
