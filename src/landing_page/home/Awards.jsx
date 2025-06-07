import React from 'react';

export default function Awards() {
    return ( 
        <div className='container mt-8'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="Hero image" className='mb-5'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>India’s fastest-growing stockbroking platform.</h1>
                    <p className='mb-5'>Trusted by millions of investors nationwide, Empowering over 5 million users to invest smarter with billions in daily trading volume investing in: </p>
                    
                    <div className='row mb-3'>
                        <div className='col-6'>
                        <ul>
                          <li><p>Futures and Options</p></li>
                          <li><p>Commodity derevatives</p></li>
                          <li><p>Currency derevatives</p></li>
                        </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                              <li><p>Stocks & IPOs</p></li>
                              <li><p>Direct mutual funds</p></li>
                              <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" alt="Press Logo" className='mb-5' style={{width:"90%"}}/>
                    

                </div>
            </div>
        </div>
     );
}
