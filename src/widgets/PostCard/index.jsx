import { Box, Heading, Text } from "@chakra-ui/react";

import { ReactPropTypes } from "react";

function PostCard({ label, description }) {
  return (
    <Box borderRadius="xl" bg="tomato" height="280px">
      <Box p="2">
        <Heading>{label}</Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}

PostCard.propTypes = {
  label: ReactPropTypes.string.isRequired,
  description: ReactPropTypes.string.isRequired,
};

export default PostCard;
