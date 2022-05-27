import { useContext, useState } from "react";
import FortniteContext from "../context/FortniteContext";
import './NewsCard.css';

export default function NewsCard() {
    const context = useContext(FortniteContext);
    const { news } = context;

    const [index, setIndex] = useState(0);

    const handleClick = ({target}) => {
        if(target.id === 'Prev') {
            setIndex(index === '24' || index === 24 ? 0 : +index + 1)
        }
        if(target.id === 'Next') {
            setIndex(index === 0 ? 24 : +index - 1)
        }
    }

    return (
        <div className="news-container">
            <button
            type="button"
            id="Prev"
            className="prev-btn"
            onClick={ (e) => handleClick(e)}
            >Previews</button>
            <span className="prev-btn-shadow"/>
            <div className="news-card">
                {/* <h3>{news && news[index]?.title}</h3> */}
                <img src={news && news[index]?.image} alt="" />
                <p className="card-description">{news && news[index]?.body}</p>
                <span className="card-description-shadow"/>
            </div>
             <button
            type="button"
            className="next-btn"
            id="Next"
            onClick={ (e) => handleClick(e)}
            >Next</button>
            <span className="next-btn-shadow" />
        </div>
    )

}