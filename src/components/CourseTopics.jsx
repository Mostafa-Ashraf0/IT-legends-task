import '../assets/courseTopics.css';
import TopicsCard from './TopicsCard';

const CourseTopics = ({setRef})=>{
    return(
        <div className="courseTopics" ref={setRef}>
            <div className="heading">
                <h3>Topics for This Course</h3>
                <div className="progress">
                    <span className='all'>
                        <span className='completed'>
                            <div className="you">
                            <span>You</span>
                            </div>
                            <span className='percent'>63%</span>
                        </span>
                    </span>
                </div>
            </div>
            <TopicsCard text= "Course Overview"/>
            <TopicsCard text = "Return Values From Functions"/>
            <TopicsCard text = "Course Overview"/>
        </div>
    )
};

export default CourseTopics;