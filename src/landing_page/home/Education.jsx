import React from 'react';

export default function Education() {
    return ( 
                <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="Hero image" className='mb-5'/>
                </div>

         

                <div className='col-6'>
                    <h1 className='mb-5 fs-2'> Free and Open Market Education</h1>
                    <p > Empower users with accessible, unbiased educational resources to promote informed and independent stock market participation.</p>
                    <a href=''  style={{textDecoration:'none'}}>Versity
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                    
                    <p className='mt-5'> Provide transparent, easy-to-understand market education to help users make confident and self-reliant investment decisions.</p>
                    <a href=''  style={{textDecoration:'none'}}>TradingQ&A
                        <i class="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>

        </div>
     );
}