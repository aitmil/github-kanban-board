import { Box, Heading, VStack } from '@chakra-ui/react';

import { IssueCard } from './issue-card';
import { Issue } from '@/interfaces/issues';

interface IssueListProps {
  title: string;
  issues: Issue[];
}

export const IssueList = ({ title, issues }: IssueListProps) => {
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
        {title}
      </Heading>
      <Box
        w={'100%'}
        h="70vh"
        py={4}
        bg="gray.300"
        border="1px solid black"
        borderRadius="10px"
      >
        <VStack as="ul" px={4} h="full" overflowY="auto">
          {issues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
