import { useState } from 'react';
import '../assets/topicsCard.css';


const TopicsCard = ({text})=>{
    const [ lessons, setLessons ] = useState(true);
    const handleClick = ()=>{
        setLessons(!lessons);
    }
    return(
        <div className="topics-card">
            <div className="head">
                <div className="info">
                    <h3>Week 1-4</h3>
                    <p>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
                </div>
                <i class={`fa-solid ${lessons ? 'fa-minus' : 'fa-plus'}`} style={{cursor:"pointer"}} onClick={handleClick}></i>
            </div>
            {lessons && <div className="lessons">
                <div className="lesson">
                <div className="title"><i class="fa-regular fa-file"></i>Introduction</div>
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="lesson">
                    <div className="title"><i class="fa-regular fa-file"></i>Course Overview</div>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div className="lesson">
                    <div className="title"><i class="fa-regular fa-file"></i>{text}</div>
                    <div className="cards">
                        <div className="questions">0 QUESTION</div>
                        <div className="min">10 MINUTES</div>
                    </div>
                </div>
                <div className="lesson">
                    <div className="title"><i class="fa-regular fa-file"></i>Course Exercise / Reference Files</div>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div className="lesson">
                    <div className="title"><i class="fa-regular fa-file"></i>Code Editors Installation (optional if you have one)</div>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div className="lesson">
                    <div className="title"><i class="fa-regular fa-file"></i>Embedding PHP in HTML</div>
                    <i class="fa-solid fa-lock"></i>
                </div>
            </div>}
        </div>
    )
};


export default TopicsCard;