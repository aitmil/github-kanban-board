import { HStack } from '@chakra-ui/react';

import { useAppSelector } from '@/redux/hooks';
import { IssueList } from './issue-list';

export const KanbanBoard = () => {
  const { todo, inProgress, done } = useAppSelector(state => state.issues);

  return (
    <HStack as="ul" w="100%" justify="space-between">
      <IssueList title="ToDo" issues={todo} />
      <IssueList title="In Progress" issues={inProgress} />
      <IssueList title="Done" issues={done} />
    </HStack>
  );
};
