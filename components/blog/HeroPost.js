import Link from "next/link";
import {
  PostDescription,
  PostTitle,
  StarredDescription,
  StarredImage,
  StarredPost,
  Img,
  Caption,
  Wrapper,
} from "./Blog.elements";

const HeroPost = ({ post }) => {
  return (
    <Link href={`/blog/${post.url}`}>
      <StarredPost>
        <StarredImage>
          <Img
            src={post.posterImage.formats.medium.url}
            alt={post.posterImage.name}
          />
        </StarredImage>
        <StarredDescription>
          <Wrapper>
            <PostTitle>{post.title}</PostTitle>
            <Caption>{post.published_at.split("T")[0]}</Caption>
          </Wrapper>
          <Wrapper>
            <PostDescription>{post.description}</PostDescription>
          </Wrapper>
        </StarredDescription>
      </StarredPost>
    </Link>
  );
};

export default HeroPost;
