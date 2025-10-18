import '../assets/courseMaterials.css';


const CourseMaterials = ()=>{
    return(
        <div className='material'>
            <h2>Course Materials</h2>
            <div className="details">
                <div className="left">
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-clock"></i><span>Duration:</span></div>
                        <span className='value'>3 weeks</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-book"></i><span>Lessons:</span></div>
                        <span className='value'>8</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-regular fa-user"></i><span>Enrolled:</span></div>
                        <span className='value'>65 students</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-globe"></i><span>Language:</span></div>
                        <span className='value'>English</span>
                    </div>
                </div>
                <div className="right">
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-clock"></i><span>Duration:</span></div>
                        <span className='value'>3 weeks</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-book"></i><span>Lessons:</span></div>
                        <span className='value'>8</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-regular fa-user"></i><span>Enrolled:</span></div>
                        <span className='value'>65 students</span>
                    </div>
                    <div className="block">
                        <div className="key"><i class="fa-solid fa-globe"></i><span>Language:</span></div>
                        <span className='value'>English</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseMaterials;