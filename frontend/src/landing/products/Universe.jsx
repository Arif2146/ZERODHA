import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import streakLogo from "../../assets/streakLogo.png";
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import sensibullLogo from "../../assets/sensibullLogo.svg";
import goldenpiLogo from "../../assets/goldenpiLogo.png";
import dittoLogo from "../../assets/dittoLogo.png";


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
       <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
         <div className="col-4 p-3">
            <img src={zerodhaFundhouse} width={250} alt="Zerodha Fundhouse"/>
         </div>
         <div className="col-4 p-3">
            <img src={smallcaseLogo} width={250} alt="Smallcase Logo"/>
         </div>
         <div className="col-4 p-3">
            <img src={goldenpiLogo} width={250} alt="GoldenPi Logo"/>
         </div>
         <div className="col-4 p-3 mt-4">
            <img src={dittoLogo} width={250} alt="Ditto Logo"/>
         </div>
         <div className="col-4 p-3 mt-4">
            <img src={streakLogo} width={250} alt="Streak Logo"/>
         </div>
         <div className="col-4 p-3 mt-4">
            <img src={sensibullLogo} width={250} alt="Sensibull Logo"/>
         </div>
         <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
