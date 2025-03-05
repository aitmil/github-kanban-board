import { useForm } from 'react-hook-form';
import { Button, HStack, Input } from '@chakra-ui/react';

import { Field } from './ui/field';
import { validateUrl } from '@/utils/repo-url';

interface SearchRepoProps {
  onSubmit: (repoUrl: string) => void;
}

interface FormValues {
  repoUrl: string;
}

export const SearchRepo = ({ onSubmit }: SearchRepoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      repoUrl: '',
    },
  });

  const validateRepoUrl = (value: string) => {
    if (!value) return 'This field is required';
    if (!validateUrl(value))
      return 'Please enter a valid GitHub repository URL';
    return true;
  };

  return (
    <HStack w="100%" mb={4}>
      <Field
        required
        invalid={!!errors.repoUrl}
        errorText={errors.repoUrl?.message || ''}
      >
        <Input
          {...register('repoUrl', {
            validate: validateRepoUrl,
          })}
          placeholder="Enter repo URL"
          border="1px solid"
          borderColor={
            errors.repoUrl ? 'red.400' : isValid ? 'green.400' : 'black'
          }
        />
      </Field>
      <Button
        bg="transparent"
        border="1px solid black"
        color="black"
        disabled={!isValid}
        _hover={{ bg: 'gray.200' }}
        _focus={{ boxShadow: 'outline' }}
        _active={{ bg: 'gray.300', transform: 'scale(0.95)' }}
        onClick={handleSubmit(data => onSubmit(data.repoUrl))}
      >
        Load Issues
      </Button>
    </HStack>
  );
};
