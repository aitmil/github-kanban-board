import { Box, Heading, VStack } from '@chakra-ui/react';
import { IssueCard } from './issue-card';

export const ToDo = () => {
  return (
    <Box as="li" w="32%">
      <Heading
        as="h2"
        fontFamily="Comic Sans MS"
        fontWeight="bold"
        fontSize="2xl"
        mb={3}
        textAlign="center"
      >
        ToDo
      </Heading>
      <VStack
        as="ul"
        w={'100%'}
        h="70vh"
        p={4}
        bg="gray.300"
        border="1px solid black"
        borderRadius="10px"
        overflowY="auto"
      >
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </VStack>
    </Box>
  );
};
