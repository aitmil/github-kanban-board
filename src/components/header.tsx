import { useAppSelector } from '@/redux/hooks';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { BsFillStarFill } from 'react-icons/bs';

import { SearchRepo } from './search-repo';
import { createOwnerProfileUrl, extractRepoDetails } from '@/utils/repo-url';
import { formatNumber } from '@/utils/format';

interface HeaderProps {
  repoUrl: string;
  onSubmit: (url: string) => void;
}

export const Header = ({ repoUrl, onSubmit }: HeaderProps) => {
  const { stars, status } = useAppSelector(state => state.issues);
  const repoDetails = extractRepoDetails(repoUrl);
  const ownerProfileUrl = createOwnerProfileUrl(repoUrl);

  return (
    <Box as="header" w="100%" py={10}>
      <Heading as="h1" hidden />
      <SearchRepo onSubmit={onSubmit} />
      {repoDetails && (
        <Flex align="center" gap={8}>
          <Box as="nav">
            <Link
              href={ownerProfileUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              outline="none"
              color="blue.600"
              textTransform="capitalize"
            >
              {repoDetails.owner}
            </Link>
            <Box as="span" color="blue.600" px={2}>
              &gt;
            </Box>
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              outline="none"
              color="blue.600"
              textTransform="capitalize"
            >
              {repoDetails.repo}
            </Link>
          </Box>
          {status !== 'loading' && status !== 'failed' && (
            <Flex align="center" gap={2}>
              <BsFillStarFill color="orange" />
              <Box as="span">{formatNumber(stars)} stars</Box>
            </Flex>
          )}
        </Flex>
      )}
    </Box>
  );
};
