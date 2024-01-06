import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const details = useLoaderData();
  //   console.log(details);
  const { id, title, body } = details;
  return (
    <div className="rounded-lg border-2 p-4 border-orange-500 w-full">
      <p>
        <small> id:{id}</small>
      </p>
      <h3>Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
