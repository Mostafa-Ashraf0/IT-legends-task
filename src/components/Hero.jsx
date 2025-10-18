import { useState } from 'react';
import '../assets/hero.css';
import LeaderBoard from './LeaderBoard';

const Hero = ({comment, material})=>{
    const [display ,setDisplay] = useState(false);
    const handeClickComment = ()=>{
        comment.current.scrollIntoView({ behavior: "smooth" });
    }
    const handeClickMaterial = ()=>{
        material.current.scrollIntoView({ behavior: "smooth" });
    }
    const handleBoard = ()=>{
        setDisplay(!display);
    }
    return(
        <div className='hero'>
            <LeaderBoard display = {display} setDisplay = {setDisplay}/>
            <ul className="icons"> 
                <li onClick={handeClickMaterial}><i class="fa-solid fa-table-list"></i></li>
                <li onClick={handleBoard}><i class="fa-regular fa-circle-check"></i></li>
                <li onClick={handeClickComment}><i class="fa-solid fa-comments"></i></li>
                <li><i class="fa-solid fa-question"></i></li>
            </ul>
        </div>
    )
};

export default Hero;