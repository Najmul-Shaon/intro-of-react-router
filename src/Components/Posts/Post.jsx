import PropTypes from "prop-types";
import { useNavigate} from "react-router-dom";
// import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const navigate = useNavigate();

  //   console.log(post);
  const { id, title, body } = post;
  const handlePostDetails = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="border-2 p-4 border-orange-500 rounded-lg">
      <p>
        <small> id:{id}</small>
      </p>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      {/* <Link to={`/posts/${id}`}>Post Details</Link> */}
      <button onClick={handlePostDetails}>Post Details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
