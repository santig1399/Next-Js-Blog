import Head from "next/head";
import { useRouter } from "next/router";
import Article from "../../components/blog/Article";
import MorePosts from "../../components/blog/MorePosts";
import DefaultErrorPage from "next/error";
import { Separator } from "../../components/blog/Blog.elements";

const Post = ({ post, morePosts }) => {
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
        <Separator>More Stories</Separator>
        <MorePosts posts={morePosts} />
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
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/demos/${params.url}`
    // );
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demos`);
    const data = await res.json();
    const post = data.filter((d) => {
      return d.url === params.url;
    });
    const morePosts = data.filter((d) => {
      return d.url != params.url;
    });

    return {
      props: { post: post[0], morePosts: morePosts.splice(2) },
    };
  } catch (error) {
    return { props: {} };
  }
}
