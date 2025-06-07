function Universe({
    
}) {  
    return ( 
        <div className="container mt-5 mb-4 p-5">
            <div className="row text-center mt-5 mb-5">
                <h1>Stock Management Tools</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5 mb-5 p-3 text-center">
                <diV className="col-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Universe" style={{width:"40%"}} />
                    <p className="text-muted mt-3">Simplifying investments for every Indian.</p>
                </diV>
                <diV className="col-4 p-3 mb-2">
                    <img src="media/images/sen.jpg" alt="Zerodha Universe" style={{width:"40%"}} />
                    <p className="text-muted mt-2">Options trading made truly simple.</p>
                </diV>
                <diV className="col-4 p-3 mt-2">
                    <img src="media/images/smallcaseLogo.png" alt="Zerodha Universe" style={{width:"40%"}}/>
                    <p className="text-muted mt-3">Invest in ideas, not stocks.</p>
                </diV>
                <diV className="col-4 p-3">
                    <img src="media/images/streakLogo.png" alt="Zerodha Universe" style={{width:"40%"}}/>
                    <p className="text-muted mt-3">Automate strategies without coding skills.</p>
                </diV>
                <diV className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" alt="Zerodha Universe"style={{width:"40%"}} className="mt-2"  />
                    <p className="text-muted mt-3">Structured data, instantly made accessible.</p>
                </diV>
                <diV className="col-4 p-3">
                    <img src="media/images/dittoLogo.png" alt="Zerodha Universe" style={{width:"40%"}}/>
                    <p className="text-muted mt-3">Insurance advice you can trust.</p>
                </diV>
            </div>
            
        </div>
     );
}

export default Universe;