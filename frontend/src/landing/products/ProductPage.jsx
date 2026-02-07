import Hero from "./Hero";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import Universe from "./Universe";
import Kite from "../../assets/kite.png";
import Coin from "../../assets/coin.png";
import Versity from "../../assets/varsity.png";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSec
        imageURL={Kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore="/app-store"
      />
      <RightSec/>
       <LeftSec
        imageURL={Coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore="/app-store"
      />
      <RightSec/>
       <LeftSec
        imageURL={Versity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore="/app-store"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
