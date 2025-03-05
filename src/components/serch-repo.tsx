import { Button, HStack, Input } from '@chakra-ui/react';

export const SearchRepo = () => {
  return (
    <HStack w="100%">
      <Input
        placeholder="Enter repo URL"
        letterSpacing={1}
        border="1px solid black"
      />
      <Button
        bg="transparent"
        border="1px solid black"
        color="black"
        letterSpacing={1}
        _hover={{ bg: 'gray.200' }}
        _focus={{ boxShadow: 'outline' }}
        _active={{ bg: 'gray.300', transform: 'scale(0.95)' }}
      >
        Load Issues
      </Button>
    </HStack>
  );
};
