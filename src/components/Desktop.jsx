import '../assets/desktop.css';
import Header from "./Header";
import Hero from "./Hero";
import CourseMaterials from "./CourseMaterials";
import Comments from "./Comments";
import CourseTopics from './CourseTopics';
const Desktop = ()=>{
    return(
        <div className='desktop'>
            <Header/>
            <div className="main-cont">
                <div className="left-side">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/XHXbjhY1_qE?start=21"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                <Hero/>
                <CourseMaterials/>
                <Comments/>
            </div>
            <div className="right-side">
                <CourseTopics/>
            </div>
            </div>
        </div>
    )
}


export default Desktop;