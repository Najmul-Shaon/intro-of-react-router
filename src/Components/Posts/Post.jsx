import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
//   console.log(post);
  const { id, title, body } = post;
  return (
    <div className="border-2 p-4 border-orange-500 rounded-lg">
      <p>
        <small> id:{id}</small>
      </p>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Post Details</Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
