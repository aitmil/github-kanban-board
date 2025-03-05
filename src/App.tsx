import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { SearchRepo } from './components/serch-repo';
import { KanbanBoard } from './components/kanban-board';

function App() {
  return (
    <VStack
      fontFamily="Comic Sans MS"
      letterSpacing={1}
      w="100vw"
      h="100vh"
      bg="gray.100"
    >
      <Container maxW={{ base: '100%', sm: '90%', lg: '80%', xl: '70%' }}>
        <Box as="header" w="100%" py={10}>
          <Heading as="h1" hidden />
          <SearchRepo />
        </Box>
        <Box as="main" w="100%" pb={10}>
          <KanbanBoard />
        </Box>
      </Container>
    </VStack>
  );
}

export default App;
