import React, { useState, useEffect } from 'react';

function RouteSelect() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await fetch('http://localhost:5000/api/routes/current');
        const data = await response.json();
        setRoutes(data.routeNames);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    }

    fetchRoutes();
  }, []);

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  return (
    <div>
      <label htmlFor="routeSelect">Select Route:</label>
      <select id="routeSelect" value={selectedRoute} onChange={handleRouteChange}>
        <option value="">Select a route</option>
        {routes.map((route, index) => (
          <option key={index} value={route}>{route}</option>
        ))}
      </select>
      {selectedRoute && <p>Selected Route: {selectedRoute}</p>}
    </div>
  );
  
routes;
 
}

export default RouteSelect;