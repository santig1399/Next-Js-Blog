import { useRouter } from "next/router";
import Article from "../../components/blog/Article";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Article />
    </>
  );
};

export default Article;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demos`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { url: post.url },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/demos/${params.url}`
  );
  const post = await res.json();
  return { props: { post } };
}
