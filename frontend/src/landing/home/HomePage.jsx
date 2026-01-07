import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAcc from "../OpenAcc";

function HomePage() {

    return (
       <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAcc />
        <Footer />
       </>
    );
}

export default HomePage