import PostCard from "../components/blog/PostCard";
import { Row } from "../components/Layout/Layout.elements";

const blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog page</h1>
      <Row col="2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Row>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demos`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default blog;
