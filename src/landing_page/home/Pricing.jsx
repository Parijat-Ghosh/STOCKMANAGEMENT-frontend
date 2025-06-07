import React from 'react';

export default function Pricing() {
    return ( 
        <div className='container mt-3 p-3'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'> Transparent & Zero Hidden Fees</h1>
                    <p>Enjoy competitive pricing with zero hidden charges — what you see is what you pay, always.</p>
                    <a href=''  style={{textDecoration:'none'}}>See Pricing
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>

                <div className='col-2'></div>

                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-2'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>

                        <div className='col border p-2'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}