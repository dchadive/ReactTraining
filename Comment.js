import { useState } from 'react';

function Comment({comment, index}) {
  
    return (
      <div>Number of Comments: {index + 1}  <br/>
      Added comment - {comment}</div>
    );
  }
  
  export default Comment;
  