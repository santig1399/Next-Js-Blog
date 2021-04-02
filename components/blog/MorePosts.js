import React from "react";
import { Row } from "../layout/Layout.elements";
import PostCard from "./PostCard";

const MorePosts = ({ posts }) => {
  return (
    <Row col={2}>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </Row>
  );
};

export default MorePosts;
