import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    let name = localStorage.getItem("name");
    let date = new Date().getTime();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-uppercase text-warning text-center" to="/home"><strong className="ms-auto">Currency Exchange Rate 
                    </strong>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
