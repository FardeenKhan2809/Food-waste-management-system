import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewBiogas from '../functions/FViewBiogas';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

const ViewBiogas = () => {
  const [biogases, setBiogases] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [error, setError] = useState(null);
  const { fetchBiogas, handleUpdate, handleDelete } = FViewBiogas();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBiogas();
        setBiogases(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchBiogas]);

  // Function to handle changes in the search input value
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4 pt-4">
        <Typography variant="h3" className="text-center mb-4">
          Bio-Gas Plant
        </Typography>
        <div className="flex justify-center mb-3">
          <Link to="/adminbiogasform">
            <Button color="green" className="mr-2">
              Add New
            </Button>
          </Link>
          <Link to="/admin">
            <Button color="light-blue">Back</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-3">
          <Typography className="form-label font-bold mt-2 mr-2">
            Search Biogas:
          </Typography>
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleSearchChange}
            className="form-control w-50 mb-2 mt-2"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Slurry Limit</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {biogases.map((biogas) => (
              biogas.biogasName.toLowerCase().includes(searchName.toLowerCase()) && (
                <tr key={biogas._id}>
                  <td className="border px-4 py-2">{biogas.biogasId}</td>
                  <td className="border px-4 py-2">{biogas.biogasName}</td>
                  <td className="border px-4 py-2">{biogas.biogasEmail}</td>
                  <td className="border px-4 py-2">{biogas.biogasMobileNo}</td>
                  <td className="border px-4 py-2">{biogas.biogasAddress}</td>
                  <td className="border px-4 py-2">{biogas.biogasSlurryLimit}</td>
                  <td className="border px-4 py-2">
                    <div className="flex justify-center">
                      <Button
                        className="mr-2"
                        color="green"
                        size="sm"
                        onClick={() => handleUpdate(biogas)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="blue"
                        size="sm"
                        onClick={() => handleDelete(biogas)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ViewBiogas;
