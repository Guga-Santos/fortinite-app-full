import React, { useEffect, useState } from "react";
import getPassRewards from "../services/getPassRewards";
import "./VideoCard.css";

export default function VideoCard() {
    const [index, setIndex] = useState(20);
    const [video, setvideo] = useState();
    const [temporada, setTemporada] = useState();

    useEffect(() => {
        const fetchPassRewards = async () => {
          const passRewards = await getPassRewards(index);
          console.log("Recompensas do passe :", passRewards)
          setvideo(passRewards?.videos[1].url ?? passRewards?.videos[0].url)
          setTemporada(passRewards?.displayInfo.chapterSeason)
         } 
         fetchPassRewards();
       }, [index])

       const handleClick = ({target}) => {
        if(target.id === 'Prev') {
            setIndex(index === 2 || index === '2' ? 2 : index - 1)
        }
        if(target.id === 'Next') {
            setIndex(index === '20' || index === 20 ? 20 : index + 1)
        }
    }

       return (
           <div className="video-container">
               <button
               className="prev-video-btn"
            type="button"
            id="Prev"
            onClick={ (e) => handleClick(e)}
            >Preview</button>
            <span className="prev-video-btn-shadow" />
            <div className="frame-container">
                <h1>VIDEOS</h1>
                <h3 className="season-description">{temporada && temporada}</h3>
                <span className="season-description-shadow " />
               <iframe src={video && video} title="vídeo da temporada" controls ></iframe>
            </div>
               <button
            className="next-video-btn"
            type="button"
            id="Next"
            onClick={ (e) => handleClick(e)}
            >Next</button>
            <span className="next-video-btn-shadow" />

           </div>
       )

    }