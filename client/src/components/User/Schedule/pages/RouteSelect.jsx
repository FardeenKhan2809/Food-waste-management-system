import React, { useState, useEffect } from 'react';

function RouteSelect() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');

  // Fetch routes from the backend API
  useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await fetch('http://localhost:5000/api/routes/current'); // Assuming this is your backend route
        const data = await response.json();
        setRoutes(data.routeNames);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    }

    fetchRoutes();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Handler for when a route is selected
  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  return (
    <div>
      <label htmlFor="routeSelect">Select Route:</label>
      <select id="routeSelect" value={selectedRoute} onChange={handleRouteChange}>
        <option value="">Select a route</option>
        {/* Map over fetched routes to create <option> elements */}
        {routes.map((route, index) => (
          <option key={index} value={route}>{route}</option>
        ))}
      </select>
      {/* Display the selected route */}
      {selectedRoute && <p>Selected Route: {selectedRoute}</p>}
    </div>
  );
  
routes;
 
}

export default RouteSelect;