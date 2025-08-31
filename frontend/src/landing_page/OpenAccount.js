import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mb-4'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a href="/Signup"><button className='p-2 btn btn-primary fs-5' style={{width:"18%",color:"white", margin: "0 auto"}}>Signup for free</button></a>
            </div>
        </div>
     );
}

export default OpenAccount;