import './MyBlog.css';

import Post from './Post';
import { useState } from 'react';

function MyBlog() {
    const [postTitle, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const handleClick = () => {
        setCount(count + 1 );
        setPosts([...posts, postTitle]);
      };
      const handleChange = (event) => {
        setTitle(event.target.value);
      };
      const addedPosts = posts.map((post, index) => {
        return <Post title={post} index={index} />
      });
    return (
        <div>
            <div className="blog">
                <b>Create Post</b><br/>
                Title <br/>
                <input type='text' value={postTitle} onChange={handleChange}></input>
                <button onClick={handleClick}>Submit</button>
                <div>Number of Posts: {count}</div>
            </div>
            <div>
            <div className='post-list'>{addedPosts}</div>
            </div>
        </div>
    )
}

export default MyBlog;