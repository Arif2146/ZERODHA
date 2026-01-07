import homeHero from "../../assets/homeHero.png"

function Hero() {
    return (
        <div className="container">
            <div className="row">
                <img src={homeHero} alt="homeHero"/>
            </div>
        </div>
    );
}

export default Hero