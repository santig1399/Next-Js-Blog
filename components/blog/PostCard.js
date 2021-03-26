import Link from "next/link";
import {
  Card,
  CardBody,
  CardHead,
  Img,
  PostDescription,
  PostTitle,
  Caption,
} from "./Blog.elements";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.url}`}>
      <Card key={`${post._id}_card`}>
        <CardHead key={`${post._id}_head`}>
          <Img
            src={post.posterImage.formats.medium.url}
            alt={post.posterImage.name}
          />
        </CardHead>
        <CardBody key={`${post._id}body`}>
          <PostTitle>{post.title}</PostTitle>
          <Caption>{post.published_at.split("T")[0]}</Caption>
          <PostDescription>{post.description}</PostDescription>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PostCard;
