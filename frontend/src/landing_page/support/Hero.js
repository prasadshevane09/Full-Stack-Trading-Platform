import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "#fff" }}>
          Track Tickets
        </a>
      </div>

      <div className=" row HeroSupp mb-5">
        <div className="col-7">
          <h3 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            id="supportInput"
            placeholder="Eg. how do I activate F&O, why is my order is get rejected..."
          />
          <br />
          <div className="mb-5" style={{ lineHeight: "2.5" }}>
            <a className="fs-6 mb-5" href="">
              Track account opening
            </a>
            <a className="fs-6" href="">
              Track segment activation
            </a>
            <a className="fs-6" href="">
              Intraday margins{" "}
            </a>
            <a className="fs-6" href="">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h2 className="mb-4 fs-4 mt-4">Featured</h2>
          <ol style={{ fontSize: ".9rem" }}>
            <li className="mb-3">
              <a href="">Rights Entitlements listing in February 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
