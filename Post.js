import './Post.css';
import Comment from "./Comment";
import { useState } from 'react';

function Post({title, index}) {
    
    const [count, setCount] = useState(0);
    const [commentVal, setCommentVal] = useState('');
    const [comments, setComments] = useState([]);
    const handleClick = () => {
        setCount(count + 1 );
        setComments([...comments, commentVal]);
      };
      const handleChange = (event) => {
        setCommentVal(event.target.value);
      };
      const addedComments = comments.map((comment, count) => {
        return <Comment comment={comment} index={count} />
      });
    return (

      <div className='post'>
        {title}<br/>
        {addedComments.length > 0 ? 
          <div>Number of Comments: {addedComments.length} </div>
          :
          <div>No Comments Yet</div> 
          }  
        <br/>
        <div className='comment-list'>{addedComments}</div>
        Comment<br/>
        <input type='text' value={commentVal} onChange={handleChange}></input><br/>
        <button onClick={handleClick}>Submit</button>
      </div>
    )

};

export default Post;
