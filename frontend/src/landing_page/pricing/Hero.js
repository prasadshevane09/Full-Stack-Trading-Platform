import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5" style={{padding:"70px 0 80px 0"}}>
        <h1>Charges</h1>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes</h3>
      </div>

      <div className="row text-center m-5">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-2">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
