import React from 'react';

export default function Stats() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Why Choose Us</h1>
                    <h2 className='fs-4'> Your success is our benchmark.</h2>
                    <p className='text-muted'>We grow when you do — our mission is to deliver tools and insights that help you succeed in every market condition.</p>
                    
                    <h2 className='fs-4'> Simplifying investing for every Indian — one trade at a time.</h2>
                    <p className='text-muted'>From first-time investors to seasoned traders, we make the stock market accessible, understandable, and easy to navigate.</p>
                    
                    <h2 className='fs-4'>Award-winning customer support. 24x7 reliability.</h2>
                    <p className='text-muted'>Our expert support team is always just a call or click away — ensuring smooth, secure trading around the clock.</p>
                    
                    
                    

                </div>
                <div className='col-6 p-5'>
                    <img src="media\images\ecosystem.png" alt="Ecosystem Image" style={{width:'80%'}}/>
                    <div className="text-center d-flex gap-3">
                       <a href='' style={{textDecoration:'none'}}>Explore our products 
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                       </a>

                       <a href='' className='ms-5' style={{textDecoration:'none'}}>Learn more
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                       </a>
                    </div>
                  
                </div>
            </div>

        </div>
     );
}