import React from "react";
import Header from "../components/Header";
import NewsCard from '../components/NewsCard';
import character3 from '../images/character3.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import "./Initial.css";

export default function Initial() {
    return(
        <div className="landing-page-container">
            <Header />
            <img className="character" src={ character3 } alt="character" />
            {/* <h1 className="news-word">News:</h1> */}
            <div className="char-background">
                <NewsCard />
            </div> 
            <div className="char-background-border" />
                <div className="social-container">
                <a  className="anchor-footer"
                    href= "https://www.instagram.com/guga_marahu/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <img src={instagram} alt=" instagram icon" />
                </a>
                <a  className="anchor-footer"
                    href= "https://www.linkedin.com/in/gugasantos/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <img src={linkedin} alt=" linkedin icon" />
                    </a>
                    <a  className="anchor-footer"
                    href= "https://github.com/Guga-Santos"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <img src={github} alt=" github icon" />
                    </a>
                </div>
                <div className="copyright-infos">
                    <h5> This app is NOT official and NOT endorsed by Epic Games in any way.
                    All names, resources and generally any Fortnite related content belongs to Epic Games.</h5>   
                    <h5>It's just a personal study of API requests and a solution to compare mine and my friends game statistics.</h5>
                </div>

        </div>
    )
}