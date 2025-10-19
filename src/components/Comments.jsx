import '../assets/comments.css'
import icon1 from '../assets/first_comment.webp';
import icon2 from '../assets/secound-comment.webp';
import icon3 from '../assets/third-comment.webp';
const Comments = ({setRef})=>{

    return(
        <div className='main' ref={setRef}>
            <h2>Comments</h2>
            <div className="comments-list">
                <div className="comment">
                    <div className="img">
                        <img src={icon1} alt="img" />
                    </div>
                    <div className="text">
                        <span className='name'>Student Name Goes Here</span>
                        <span className='date'>Oct 10, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut velit ad 
                            delectus deleniti aliquid, itaque quas eveniet quibusdam molestias
                            perferendis error qui ea quaerat molestiae suscipit
                            accusantium quidem dolore.</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="img">
                        <img src={icon2} alt="img" />
                    </div>
                    <div className="text">
                        <span className='name'>Student Name Goes Here</span>
                        <span className='date'>Oct 15, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut velit ad 
                            delectus deleniti aliquid, itaque quas eveniet quibusdam molestias
                            perferendis error qui ea quaerat molestiae suscipit
                            accusantium quidem dolore.</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="img">
                        <img src={icon3} alt="img" />
                    </div>
                    <div className="text">
                        <span className='name'>Student Name Goes Here</span>
                        <span className='date'>Oct 19, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut velit ad 
                            delectus deleniti aliquid, itaque quas eveniet quibusdam molestias
                            perferendis error qui ea quaerat molestiae suscipit
                            accusantium quidem dolore.</p>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <textarea name="textarea" id="#">Write a comment</textarea>
                <button className='comment-btn'>Submit Review<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
};

export default Comments;