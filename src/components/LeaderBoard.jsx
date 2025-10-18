import '../assets/leaderBoard.css';


const LeaderBoard = ({display,setDisplay})=>{
    const handleClose = ()=>{
        setDisplay(!display);
    }
    return(
        <div className="leader-board" style={{display: display?"flex":"none"}}>
            <i onClick={handleClose} class="fa-solid fa-xmark close"></i>
            <div className="text">
                <span>Course Name</span>
                <h3>Leader Board</h3>
            </div>
            <div className="message">
                <p>عظيم يا صديقي اداءك في الكورس دا افضل من 60% من باقي الطلبة. كمل عايز اشوف اسمك في الليدر بوردهنا</p>
                <span>💪</span>
            </div>
            <div className="board-list">
                <div className="element"></div>
                <div className="element"></div>
                <div className="element"></div>
                <div className="element"></div>
                <div className="element"></div>
            </div>
        </div>
    )
};

export default LeaderBoard;