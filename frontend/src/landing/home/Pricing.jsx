
function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3">Unbeatable Pricing</h1>
                    <p>
                        Experience premium trading features without the premium price tag. Our transparent and competitive pricing ensures you get the best value for your investment.
                    </p>
                    <a href=' ' style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className="mb-3">$0</h1>
                            <p>Commission on Equity</p>
                        </div>
                        <div className="col p-3 border"><h1 className="mb-3">$20</h1>
                            <p>Commission on Equity</p></div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Pricing