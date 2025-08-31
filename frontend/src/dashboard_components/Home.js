import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="home-container">
      {/* TopBar shows navigation and user info */}
      <TopBar />
      
      {/* Dashboard shows the main content */}
      <Dashboard />
    </div>
  );
};

export default Home;
