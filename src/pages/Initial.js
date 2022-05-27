import React from "react";
import Header from "../components/Header";
import NewsCard from '../components/NewsCard';
import character3 from '../images/character3.png';
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
        </div>
    )
}