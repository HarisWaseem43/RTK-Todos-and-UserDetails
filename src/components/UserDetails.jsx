import { useGetAllPostsQuery } from "../Services/UserAPI";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const { data, error, isLoading } = useGetAllPostsQuery([]);
  console.log(data);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (isLoading) {
    return <h3>Loading....</h3>;
  }
  return (
    <>
      <Link to="/">Go Back</Link>
      <div>
        {data.slice(0, 15).map((post) => (
          <div key={post.id}>
            <h2>
              {post.id} - {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
