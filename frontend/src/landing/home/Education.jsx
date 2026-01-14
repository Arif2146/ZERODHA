import Educate from '../../assets/education.svg';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
            <div className="col-6 ">
                    <img src={Educate} style={{width:"80%"}} alt="Education Illustration" className="img-fluid" />
                </div>
                <div className="col-6 ">
                    <h1 className="mb-3 fs-2">Free and Open market Educaion</h1>
                    <p>
                        Unlock your trading potential with our comprehensive educational resources. From beginner guides to advanced strategies, we provide everything you need to succeed in the markets.
                    </p>
                    <a href=' ' style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                    <p className="mt-5">
                        Access a wealth of knowledge through our free articles, video tutorials, and webinars. Stay informed with the latest market insights and trends to make smarter trading decisions.   
                    </p>
                    <a href=' ' style={{textDecoration:"none"}}>trading Q&A<i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                     
            </div>    
        </div>
    );
}

export default Education