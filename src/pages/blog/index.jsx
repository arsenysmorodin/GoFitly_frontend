import React from "react";

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import PostCard from "../../widgets/PostCard";

function Blog() {
  const [posts] = React.useState([
    {
      id: 1,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 2,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 3,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 4,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 5,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 6,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
    {
      id: 7,
      label: "Lorem Ipsum",
      description: "Lorem Ipsum doloren sit amen",
    },
  ]);

  return (
    <Container maxW="container.xl" p="4">
      <Heading mb="10">Blog</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {posts.map((post) => (
          <PostCard
            label={post.label}
            description={post.description}
            key={post.id}
          ></PostCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Blog;
