import React from "react";
import {Link} from "react-router-dom";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest for your future</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/signup">
            <button type="button" className="btn btn-primary px-4 fs-5">
              Primary
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
