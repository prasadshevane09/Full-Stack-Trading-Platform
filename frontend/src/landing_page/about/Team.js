import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4 mt-5">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
      >
        <div className="col-6 p-4 text-center">
          <img
            src="media/images/pic prasad.jpg"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-3 mb-4">Prasad Shevane</h4>
          <p>Founder, CEO</p>
        </div>

        <div className="col-6 p-3">
          <p>
            Prasad bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="" style={{color:"#387ed1"}}>Homepage / TradingQnA / Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
