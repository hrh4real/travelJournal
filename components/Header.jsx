import React from "react";
import globe from "./globe.png"

export default function Header() {
    return (
        <>
            <header className="heading">
                <nav className="nav-bar">
                    <div className="profile-section">
                        <div className="profile-icon">👤</div>
                    

                        <div className="profile-dropdown">
                            <div className="dropdown-item">My profile</div>
                            <div className="dropdown-item">Setting</div>
                            <div className="dropdown-item">Logout</div>
                        </div>
                    </div>

                    <div className="center-content">
                        <img src={globe} alt="header globe" className="globe" />
                        <h1>Travel Journal</h1>
                    </div>

                    <div className="menu-section">
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <div className="menu-dropdown">
                            <div className="dropdown-item">Home</div>
                            <div className="dropdown-item">Destinations</div>
                            <div className="dropdown-item">About</div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}