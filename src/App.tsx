import { useEffect, useState } from 'react';
import { Box, Container, Spinner, VStack, Flex } from '@chakra-ui/react';

import { Header } from './components/header';
import { KanbanBoard } from './components/kanban-board';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { toaster, Toaster } from './components/ui/toaster';
import { loadIssues } from './redux/issues/operations';

function App() {
  const [repoUrl, setRepoUrl] = useState<string>('');
  const { status, error } = useAppSelector(state => state.issues);
  const dispatch = useAppDispatch();

  const handleSubmit = (url: string) => {
    setRepoUrl(url);
    if (url) {
      dispatch(loadIssues(url));
    }
  };

  useEffect(() => {
    if (status === 'failed' && error) {
      toaster.create({
        title: 'Failed to load issues',
        description: 'Something went wrong. Please try again later.',
        type: 'error',
      });
    }

    if (status === 'success') {
      toaster.create({
        title: 'Issues loaded',
        description: 'Issues loaded successfully.',
        type: 'success',
      });
    }
  }, [status, error]);

  return (
    <VStack
      fontFamily="Comic Sans MS"
      letterSpacing={1}
      w="100vw"
      h="100vh"
      bg="gray.100"
    >
      <Container maxW={{ base: '100%', sm: '90%', lg: '80%', xl: '70%' }}>
        <Header repoUrl={repoUrl} onSubmit={handleSubmit}></Header>
        <Box as="main" w="100%" pb={10}>
          {status === 'loading' ? (
            <Flex justify="center" align="center">
              <Spinner size="xl" />
            </Flex>
          ) : (
            <KanbanBoard />
          )}
        </Box>
      </Container>
      <Toaster />
    </VStack>
  );
}

export default App;
