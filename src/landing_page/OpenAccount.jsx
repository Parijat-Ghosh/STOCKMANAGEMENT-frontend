import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OpenAccount() {
    const navigate = useNavigate();
    return ( 
        <div className='container p-5 mb-5'>
            <div className ='row text-center'>
                <h1 className='mt-5'>Open an Account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="d-flex justify-content-center mt-3">
                  <button type="button" className="btn btn-primary px-4 fs-4" onClick={() => navigate('/signup')} >Sign up</button>
                </div>
            </div>
        </div>
     );
}