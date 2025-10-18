import '../assets/header.css';

const Header = ()=>{
    return(
        <div className="header">
            <div className="upper">
                <span>Home</span>
                <i class="fa-solid fa-angle-right"></i>
                <span>Courses</span>
                <i class="fa-solid fa-angle-right"></i>
                <span>Course Details</span>
            </div>
            <h1>Starting SEO as your Home</h1>
        </div>
    )
};

export default Header;