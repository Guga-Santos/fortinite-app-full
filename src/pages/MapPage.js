import React from "react";
import Header from "../components/Header";
import Maps from '../components/Maps';
import bus from '../images/bus.png';

export default function MapPage() {
    return (
        <div>
            <Header />
            <img className="bus-img" src={ bus } alt="bus silhouette" />
            <Maps />
        </div>
    )
}