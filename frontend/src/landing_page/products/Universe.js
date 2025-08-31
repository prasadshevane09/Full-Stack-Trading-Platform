import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5" style={{padding:"80px 0 0 0", margin:"80px"}}>
        <h1>The Zerodha Universe</h1>
        <p className="mt-4 fs-5">Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 mt-5">
            <img style={{width:"60%"}} className="p-3"  src="media/images/zerodhafundhouse.png"/>
            <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>

        <div className="col-4 p-4 mt-5">
            <img style={{width:"60%"}} className="p-3" src="media/images/sensibullLogo.svg"/>
            <p className="text-small text-muted">Option trading platform that lets you create stratergies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>

        <div className="col-4 p-3 mt-5 mb-1">
            <img style={{width:"50%"}}  className="p-3" src="media/images/tijoriLogo.svg"/>
            <p className="text-small text-muted">Investing research paltform that offers detailed insights on stocks, sectors, supply chains, and more</p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img style={{width:"50%"}}  className="p-3" src="media/images/streakLogo.png"/>
            <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest stratergies without coding.</p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img className="p-3" src="media/images/smallcaseLogo.png"/>
            <p className="text-small text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-4 mt-5">
            <img style={{width:"40%"}} className="p-3" src="media/images/dittoLogo.png"/>
            <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
      </div>
      <div className="text-center">
      <a href="/Signup"><button className='p-2 btn btn-primary fs-5' style={{width:"18%",color:"white", margin: "0 auto"}}>Signup for free</button></a>
      </div>
    </div>
  );
}

export default Universe;
