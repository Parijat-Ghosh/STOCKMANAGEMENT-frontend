import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
            <li>
              Exchange transaction charges: ₹325 per crore for NSE equity
              delivery; varies by segment and exchange.
            </li>
            <li>SEBI turnover fees: ₹10 per crore of turnover.</li>
            <li>GST: 18% on brokerage + transaction charges.</li>
            <li>
              Stamp duty: 0.015% or ₹1500/Cr on buy-side of equity delivery,
              varies by state.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted">
            <li>Equity Delivery: ₹0 (free).</li>
            <li>
              Equity Intraday: ₹20 or 0.03% per executed order (whichever is
              lower).
            </li>
            <li>Equity Futures: ₹20 or 0.03% per executed order.</li>
            <li>Currency Options: ₹20 per executed order.</li>
            <li>
              DP (Depository Participant) charges: ₹13.5 per scrip per day on
              sell orders.
            </li>
            <li>Account Maintenance Charges (AMC): ₹300 per year.</li>
            <li>
              Payment Gateway Charges: ₹9 + GST per fund transfer via net
              banking.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
