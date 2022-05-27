import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../images/Logo.png';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <img 
            className="logo" 
            src={ Logo } 
            alt="logo"
            onClick={() => navigate("/")}
            />
                <nav className="nav-bar">
                    <h3 
                    className="nav-links"
                    onClick={() => navigate("/stats")}>Stats</h3>
                    <h3 
                    className="nav-links"
                    onClick={() => navigate("/maps")}>Maps</h3>
                    <h3 
                    className="nav-links"
                    onClick={() => navigate("/upcoming")}>Upcoming</h3>
                    <h3 
                    className="nav-links"
                    onClick={() => navigate("/videos")}>Videos</h3>
                    <div className="download">
                    <a 
                    className="anchor-header"
                    href= "https://www.epicgames.com/fortnite/pt-BR/download?sessionInvalidated=true"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        Download
                    </a>
                    </div>
                </nav>
        </div>
    )
}