import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const details = useLoaderData();

  const params = useParams();
  const { postID } = params;

  console.log(postID);

  const { id, title, body } = details;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="rounded-lg border-2 p-4 border-orange-500 w-full text-center">
      <p>
        <small> id:{id}</small>
      </p>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
