import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h4 className="">Brokerage calculator</h4>
          </a>
          <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}} className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of
              &#8377;50 + GST per order.
            </li>
            <li>Digital constract notes will be sent via e-mail.</li>
            <li>
              Pyisical copies of constract notes, if required, shall be charged
              &#8377;20 per constract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or &#8377;100 per executed order
              for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or &#8377;200 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              changed &#8377;40 per executed order instead of &#8377;20 per
              executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
