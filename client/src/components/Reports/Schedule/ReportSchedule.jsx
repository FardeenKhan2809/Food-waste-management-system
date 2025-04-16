import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import ReportFSchedule from './ReportFSchedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Typography } from '@material-tailwind/react';
import SchedulePrintView from './SchedulePrintView';

const ReportSchedule = () => {
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRoutes } = ReportFSchedule();
  const [printViewData, setPrintViewData] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRoutes();
        setRoutes(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRoutes]);

  const handleViewPrint = (data) => {
    setPrintViewData(data);
  };

  const handleFilter = () => {
    // Filter routes based on the selected date range
    const filteredRoutes = routes.filter(route => {
      const routeDate = new Date(route.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return routeDate >= start && routeDate <= end;
    });
    return filteredRoutes;
  };

  const filteredRoutes = startDate && endDate ? handleFilter() : routes;

  return (
    <>
      <div className="container mt-5 pt-5">
        <Typography variant='h3' className="text-center mb-3">Schedule</Typography>
        <div className="flex justify-center mb-3">
          <Button color="light-blue" size="lg" className="ml-2" onClick={() => window.history.back()}>Back</Button>
        </div>
        <div className="flex justify-center mb-3">
          <label className="me-2 font-bold">View Records From:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control me-2" style={{ width: '200px', height: '30px', fontSize: '14px' }} />
          <label className="me-2 font-bold">To:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control me-2" style={{ width: '200px', height: '30px', fontSize: '14px' }} />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <table className="table-auto w-full text-center">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Route ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Route Name</th>
              <th className="px-4 py-2">Route Landmark</th>
              <th className="px-4 py-2">Transporter ID</th>
              <th className="px-4 py-2">Driver Name</th>
              <th className="px-4 py-2">Volunteer ID</th>
              <th className="px-4 py-2">Volunteer Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoutes.map(route => (
              <tr key={route._id}>
                <td className="border px-4 py-2">{route.routeId}</td>
                <td className="border px-4 py-2">{route.date}</td>
                <td className="border px-4 py-2">{route.routeName}</td>
                <td className="border px-4 py-2">{route.routeLandmark}</td>
                <td className="border px-4 py-2">{route.transporterId}</td>
                <td className="border px-4 py-2">{route.transporterdriveName}</td>
                <td className="border px-4 py-2">{route.volunteerId}</td>
                <td className="border px-4 py-2">{route.volunteerName}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" className="me-2" onClick={() => handleViewPrint(route)}>View</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      {printViewData && <SchedulePrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
};

export default ReportSchedule;
