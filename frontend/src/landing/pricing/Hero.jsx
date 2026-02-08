import intradayTrades from "../../assets/intradayTrades.svg";
import pricing0 from "../../assets/pricing0.svg";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src={pricing0} alt="Pricing 0" />
          <h3 className="text-center mb-4">Free equity delivery</h3>
          <h5 className="text-muted text-center">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h5>
        </div>
        <div className="col-4 p-5">
          <img src={intradayTrades} alt="Intraday Trades" />
          <h3 className="text-center mb-4">Intraday and F&O trades</h3>
          <h5 className="text-muted text-center">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h5>
        </div>
        <div className="col-4 p-5">
          <img src={pricing0} alt="Pricing 0" />
          <h3 className="text-center mb-4">Free direct MF</h3>
          <h5 className="text-muted text-center">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
