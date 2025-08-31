import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <h1 className='mb-4'>404 Not Found</h1>
            <h3>We couldn’t find the page you were looking for. visit <Link to="/">Zerodha’s home page</Link></h3>
        </div>
    </div>
     );
}

export default NotFound;