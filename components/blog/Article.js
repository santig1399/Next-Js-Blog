import Markdown from "markdown-to-jsx";

import {
  Title,
  Caption,
  ImageContainer,
  Img,
  Text,
  UList,
  OList,
} from "./Article.elements";

const Article = ({ post }) => {
  return (
    <>
      <Title>{post.title}</Title>
      <Caption>{post.published_at.split("T")[0]}</Caption>
      {post.postData.map((p) =>
        p.__component === "post.image" ? (
          <ImageContainer>
            <Img key={p._id} src={p.image.url} alt="" />
            <Caption>{p.caption}</Caption>
          </ImageContainer>
        ) : p.__component === "post.paragraph" ? (
          <Markdown
            key={p._id}
            options={{
              overrides: {
                img: {
                  component: Img,
                },
                p: {
                  component: Text,
                },
                ul: {
                  component: UList,
                },
                ol: {
                  component: OList,
                },
              },
            }}
          >
            {p.text}
          </Markdown>
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default Article;
