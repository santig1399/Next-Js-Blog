import Link from "next/link";
import {
  Card,
  CardBody,
  CardHead,
  Img,
  PostDescription,
  PostTitle,
  ReadButton,
} from "./blog.elements";

const PostCard = ({ post }) => {
  return (
    <Card>
      <CardHead>
        <Img
          src={post.posterImage.formats.medium.url}
          alt={post.posterImage.name}
        />
      </CardHead>
      <CardBody>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription>{post.description}</PostDescription>
      </CardBody>
      <Link href={`/blog/${post.url}`}>
        <ReadButton>Read More</ReadButton>
      </Link>
    </Card>
  );
};

export default PostCard;
