import React, { useContext } from "react";
import FortniteContext from "../context/FortniteContext";
import Loading from "./Loading";

export default function Table() {
    const context = useContext(FortniteContext);
    const { loading, usersDataOne, usersDataTwo } = context;

    return (
        loading ? <Loading /> :
        <div className="table-container">
            <div className="stats-box-one">
                <div className="top-border-box-one">
                    <div className="top-border-box-one-right">
                    </div>
                </div>
                <h1>OVERALL</h1>
            <h2 className="username">{usersDataOne?.name}</h2>
            <div className="overall-stats">
                <h4>Account Level</h4>
                <h4>Season Level</h4>
            </div>
            <div className="overall-infos">
                <h3>{usersDataOne?.accountLevelHistory?.length <= 1
                        ? '0' : usersDataOne?.accountLevelHistory?.map((obj) => obj.level)
                        .reduce((a, b) => a + b)}</h3>
                        <h3>{usersDataOne?.account?.level}</h3>
            </div>
            </div>

            <div className="matches-stats-container">
                <div className="matches-stats-solo">
                    <div className="matches-stats-solo-right" />
                    <h1 className="category-title">SOLO </h1>
                </div>
                    <div className="solo-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="solo-infos">
                        <h3>{usersDataOne?.global_stats?.solo?.matchesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.solo?.placetop1}</h3>
                        <h3>{usersDataOne?.global_stats?.solo?.minutesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.solo?.kills}</h3>
                        <h3>{usersDataOne?.global_stats?.solo?.kd}</h3>
                    </div>
                <div className="matches-stats-duo">
                    <div className="matches-stats-duo-right" />
                    <h1 className="category-title">DUO </h1>
                </div>
                <div className="duo-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="duo-infos">
                        <h3>{usersDataOne?.global_stats?.duo?.matchesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.duo?.placetop1}</h3>
                        <h3>{usersDataOne?.global_stats?.duo?.minutesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.duo?.kills}</h3>
                        <h3>{usersDataOne?.global_stats?.duo?.kd}</h3>
                    </div>
                <div className="matches-stats-trio">
                    <div className="matches-stats-trio-right" />
                    <h1 className="category-title">SQUAD</h1>
                </div>
                <div className="squad-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="squad-infos">
                        <h3>{usersDataOne?.global_stats?.squad?.matchesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.squad?.placetop1}</h3>
                        <h3>{usersDataOne?.global_stats?.squad?.minutesplayed}</h3>
                        <h3>{usersDataOne?.global_stats?.squad?.kills}</h3>
                        <h3>{usersDataOne?.global_stats?.squad?.kd}</h3>
                    </div>
            </div>
            {/*  */}
            <div className="stats-box-two">
                <div className="top-border-box-two">
                    <div className="top-border-box-two-right">
                    </div>
                </div>
                <h1>OVERALL</h1>
            <h2 className="username">{usersDataTwo?.name}</h2>
            <div className="overall-stats">
                <h4>Account Level</h4>
                <h4>Season Level</h4>
            </div>
            <div className="overall-infos">
                <h3>{usersDataTwo?.accountLevelHistory?.length <= 1
                        ? '0' : usersDataTwo?.accountLevelHistory?.map((obj) => obj.level)
                        .reduce((a, b) => a + b)}</h3>
                        <h3>{usersDataTwo?.account?.level}</h3>
            </div>
            </div>

            <div className="matches-stats-container-two">
                <div className="matches-stats-solo">
                    <div className="matches-stats-solo-right" />
                    <h1 className="category-title">SOLO </h1>
                </div>
                    <div className="solo-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="solo-infos">
                        <h3>{usersDataTwo?.global_stats?.solo?.matchesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.solo?.placetop1}</h3>
                        <h3>{usersDataTwo?.global_stats?.solo?.minutesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.solo?.kills}</h3>
                        <h3>{usersDataTwo?.global_stats?.solo?.kd}</h3>
                    </div>
                <div className="matches-stats-duo">
                    <div className="matches-stats-duo-right" />
                    <h1 className="category-title">DUO </h1>
                </div>
                <div className="duo-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="duo-infos">
                        <h3>{usersDataTwo?.global_stats?.duo?.matchesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.duo?.placetop1}</h3>
                        <h3>{usersDataTwo?.global_stats?.duo?.minutesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.duo?.kills}</h3>
                        <h3>{usersDataTwo?.global_stats?.duo?.kd}</h3>
                    </div>
                <div className="matches-stats-trio">
                    <div className="matches-stats-trio-right" />
                    <h1 className="category-title">SQUAD</h1>
                </div>
                <div className="squad-stats">
                        <h4>MATCHES</h4>
                        <h4>WINS</h4>
                        <h4>MINUTES PLAYED</h4>
                        <h4>KILLS</h4>
                        <h4>kILLS PER GAME</h4>
                    </div>
                    <div className="squad-infos">
                        <h3>{usersDataTwo?.global_stats?.squad?.matchesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.squad?.placetop1}</h3>
                        <h3>{usersDataTwo?.global_stats?.squad?.minutesplayed}</h3>
                        <h3>{usersDataTwo?.global_stats?.squad?.kills}</h3>
                        <h3>{usersDataTwo?.global_stats?.squad?.kd}</h3>
                    </div>
            </div>
        </div>
        
    )
}