import React from 'react'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

//How post would be shown on home page
const PostsExcerpt = ({post}) => {
  return (
    <article>
            <h3>{post.title}</h3>
            <p className='excerpt'>{post.body.substring(0,75)}...</p>
            <p className="postCredit">
              <Link to={`post/${post.id}`}>View Post </Link> &nbsp;
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post = {post}/>
        </article>
  )
}

export default PostsExcerpt
