import Head from "next/head";
import { useRouter } from "next/router";
import Article from "../../components/blog/Article";
import DefaultErrorPage from "next/error";

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <DefaultErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Next BLog | {post.title}</title>
        </Head>
        <Article post={post} />
      </>
    );
  }
};

export default Post;

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demos`);
    const posts = await res.json();
    const paths = posts.map((post) => ({
      params: { url: post.url },
    }));
    return { paths, fallback: true };
  } catch (error) {
    return {};
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/demos/${params.url}`
    );
    const post = await res.json();
    return { props: { post } };
  } catch (error) {
    return { props: {} };
  }
}
