import './BlogPost.css'

function BlogPost({title, author, content,date}) {
  return <>
  
  <div className='blogFlex'>
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{content}</p>
    <p>{date}</p>

  </div>
  
  
  
  </>;
}
export default BlogPost;
