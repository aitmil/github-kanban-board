import { HStack } from '@chakra-ui/react';
import { ToDo } from './to-do';
import { InProgress } from './in-progress';
import { Done } from './done';

export const KanbanBoard = () => {
  return (
    <HStack as="ul" w="100%" justify="space-between">
      <ToDo />
      <InProgress />
      <Done />
    </HStack>
  );
};
