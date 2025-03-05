import { Heading, Text, Box } from '@chakra-ui/react';

export const IssueCard = () => {
  return (
    <Box
      as="li"
      w="100%"
      bg="gray.200"
      p={3}
      border="1px solid black"
      borderRadius="20px"
    >
      <Heading
        as="h3"
        fontFamily="Comic Sans MS"
        fontSize={16}
        letterSpacing={1}
      >
        Some issue title
      </Heading>
      <Text>Some issue description</Text>
    </Box>
  );
};
