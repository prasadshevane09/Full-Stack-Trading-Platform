import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mb-4'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <a href="/Signup"><button className='p-2 btn btn-primary fs-5' style={{width:"18%",color:"white", margin: "0 auto"}}>Signup for free</button></a>
            </div>
        </div>
     );
}

export default Hero;