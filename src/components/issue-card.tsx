import { Heading, Text, Box } from '@chakra-ui/react';

import { Issue } from '@/interfaces/issues';
import { calculateDaysFromDate } from '@/utils/issues';

export const IssueCard = ({ issue }: { issue: Issue }) => {
  const daysAgo = calculateDaysFromDate(issue.created_at);

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
        fontSize={18}
        letterSpacing={1}
        truncate
        _hover={{ whiteSpace: 'normal', overflow: 'visible' }}
      >
        {issue.title}
      </Heading>
      <Text color="gray.500">
        #{issue.number} opened{' '}
        {daysAgo === 0
          ? 'today'
          : daysAgo === 1
          ? '1 day ago'
          : `${daysAgo} days ago`}
      </Text>
      <Text color="gray.500">
        {issue.user.type} | Comments: {issue.comments}
      </Text>
    </Box>
  );
};
