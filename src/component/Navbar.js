import React from 'react'
import {Link} from 'react-router-dom'
import Ring from '../image/ring.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light Na">
                <Link className="navbar-brand pl-2 font-main text-white" to="/">LOGO</Link>
                <button className="navbar-toggler m-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link font-main nav-border" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-main nav-border" to="/Categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-main nav-border" to="/MyTickets">My Tickets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-main nav-border" to="/Bookmarked">Bookmarked</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-main nav-border" to="/">Sponsors</Link>
                        </li>
                    </ul>
                    
                </div>
                <form className="form-inline d-none d-sm-none d-md-none d-lg-block my-2 my-lg-0">
                    <input className="form-control mr-sm-2 search-in-nav" type="search" placeholder="Search" />
                    <img src={Ring} width="15" alt="Ring"/>
                    <div className="user">
                        <h6 className="username">Ya</h6>
                    </div>
                </form>
            </nav>
        </div>
    )
}
