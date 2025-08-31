import React, { useState, useEffect } from "react";
const Summary = () => {
  const [user, setUser] = useState(null);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await fetch("http://localhost:3002/allHoldings");
        const data = await response.json();
        setHoldings(data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    fetchHoldings();
  }, []);

  // Calculate summary values
  const totalInvestment = holdings.reduce((sum, h) => sum + (h.avg * h.qty), 0);
  const currentValue = holdings.reduce((sum, h) => sum + (h.price * h.qty), 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment ? ((pnl / totalInvestment) * 100).toFixed(2) : "0.00";

  return (
    <div>
      {user && (
        <div className="username">
          <h3>Welcome, {user.name}</h3>
        </div>
      )}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>10000</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Margins used <span>3500</span>{" "}
            </p>
            <p>
              Opening balance <span>4500</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              +745{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Current Value <span>9745</span>{" "}
            </p>
            <p>
              Investment <span>9000</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
