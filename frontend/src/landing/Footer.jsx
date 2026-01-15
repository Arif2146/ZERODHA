import Logo from "../assets/logo.svg";
function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={Logo} width="50%" alt="Logo" />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <a href="https://twitter.com/zerodhaonline">
            <img src="https://zerodha.com/static/images/x-twitter.svg" alt="" />
          </a>
          <a href="https://facebook.com/zerodha.social">
            <i class="icon-facebook-official"></i>
          </a>
          <a href="https://instagram.com/zerodhaonline/">
            <i class="icon-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/zerodha">
            <i class="icon-linkedin"></i>
          </a>

          <a href="https://www.youtube.com/@zerodhaonline">
            <img
              class="youtube-logo"
              src="https://zerodha.com/static/images/youtube.svg"
              alt=""
            />
          </a>

          <a href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
            <img
              class="whatsapp-logo"
              src="https://zerodha.com/static/images/whatsapp-logo.svg"
              alt=""
              width="20px"
            />
          </a>

          <a href="https://t.me/zerodhain">
            <i class="icon-telegram"></i>
          </a>
        </div>
        <div className="col">
          <h5>Account</h5>
          <a href=" ">Open demat account</a>
          <br />
          <a href=" ">Minor demat account</a>
          <br />
          <a href=" ">NRI demat account</a>
          <br />
          <a href=" ">Commodity</a>
          <br />
          <a href=" ">Dematerialisation</a>
          <br />
          <a href=" ">Fund transfer</a>
          <br />
          <a href=" ">MTF</a>
          <br />
          <a href=" ">Referral program</a>
          <br />
        </div>
        <h5>Support</h5>
        <a href=" ">Contact us </a>
        <br />
        <a href=" ">Support portal </a>
        <br />
        <a href=" ">How to file a complaint? </a>
        <br />
        <a href=" ">Status of your complaints </a>
        <br />
        <a href=" ">Bulletin </a>
        <br />
        <a href=" ">Circular </a>
        <br />
        <a href=" ">Z-Connect blog </a>
        <br />
        <a href=" ">Downloads </a>
        <br />
      </div>
      <div className="col">
        <h5>Company</h5>
        <a href=" ">About</a>
        <br />
        <a href=" ">Philosophy</a>
        <br />
        <a href=" ">Press & media</a>
        <br />
        <a href=" ">Careers</a>
        <br />
        <a href=" ">Zerodha Cares (CSR)</a>
        <br />
        <a href=" ">Zerodha.tech</a>
        <br />
        <a href=" ">Open source</a>
        <br />
      </div>
      <div className="col">
        <h5>Quick Links</h5>
        <a href=" ">Upcoming IPOs</a>
        <br />
        <a href=" ">Brokerage charges</a>
        <br />
        <a href=" ">Market holidays</a>
        <br />
        <a href=" ">Economic calendar</a>
        <br />
        <a href=" ">Calculators</a>
        <br />
        <a href=" ">Markets</a>
        <br />
        <a href=" ">Sectors</a>
        <br />
      </div>
    </div>
  );
}

export default Footer;
