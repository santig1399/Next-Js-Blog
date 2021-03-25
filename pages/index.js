import Head from "next/head";
import HeroPost from "../components/blog/HeroPost";
import PostCard from "../components/blog/PostCard";
import { Row } from "../components/layout/Layout.elements";

const Home = ({ posts }) => {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <div>
      <Head>
        <title>Next Blog</title>
      </Head>
      <Row col={1}>
        <HeroPost post={heroPost} />
      </Row>
      <Row col={2}>
        {morePosts.map((post) => (
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

export default Home;
