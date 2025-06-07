function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center">Our Motto</h1>
      </div>
      <div className="row p-5 mb-5 mt-2">
        <div className="col-5 text-center">
          <img
            src="media/images/icon.png"
            alt="Hero image"
            className="mb-5"
            style={{ width: "60%" }}
          />
          <p className="fs-6 fw-bold" style={{color:"rgb(0, 0, 0)"}}>Secure today, grow tomorrow — invest with confidence.</p>

        </div>
        <div className="col-7 text-center">
          <p className="fs-5 teampage-text fw-bold ">
            At Stock Management, our motto is simple: “Invest with clarity, grow
            with confidence.” We believe that every investor deserves
            transparent tools, honest guidance, and seamless access to the
            markets—no jargon, no hidden fees, just straightforward investing.
          </p>
          <br />
          <p className="fs-5 teampage-text fw-bold">
            Our mission is to break down barriers in finance by combining smart
            technology with a user-first mindset. Whether you're a beginner or a
            seasoned trader, we’re here to help you make informed decisions and
            build lasting wealth—one trade at a time.
          </p>
          <br />
          <p className="fs-5 teampage-text fw-bold ">
            Connect on &nbsp;
            <a href="" style={{textDecoration:'none'}}>Homepage</a> / 
            <a href="" style={{textDecoration:'none'}}>TradingQnA</a> /
            <a href="" style={{textDecoration:'none'}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
