import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import Apps from "./Apps";
import { GeneralProvider } from './GeneralContext';
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
// import NewOrder from "./NewOrder";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // navigate('/login');
    }
  });
  
  return (
    <div className="dashboard-container">
      {user && (
        <>
          <Navigation />
          <GeneralProvider>
            <WatchList />
          </GeneralProvider>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              {/* <Route path="/new-order" element={<NewOrder />} /> */}
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;