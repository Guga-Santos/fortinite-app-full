import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import UserSearchInputs from '../components/UserSearchInputs';
import "./Stats.css";

export default function Stats() {

    return (
        <div className="stats-container">
            <Header />
            <UserSearchInputs />
            <Table />
        </div>
    )
}