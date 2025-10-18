import Header from "./Header";
import Hero from "./Hero";
import CourseMaterials from "./CourseMaterials";
import Comments from "./Comments";
import CourseTopics from './CourseTopics';
import '../assets/mobile.css';
import { useRef } from "react";
const Mobile = ()=>{
    const commentRef = useRef(null);
    const courseTopics = useRef(null);
    return(
        <div className="mobile">
            <Header/>
            <div className="main-mob">
                <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/XHXbjhY1_qE?start=21"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
            <Hero comment = {commentRef} material = {courseTopics}/>
            <CourseMaterials/>
            <CourseTopics setRef = {courseTopics}/>
            <Comments setRef = {commentRef}/>
            </div>
        </div>
    )
};

export default Mobile;