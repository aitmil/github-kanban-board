import { RepoDetails } from '@/interfaces/repo-url';

export const validateUrl = (url: string) => {
  const githubRepoRegex = /^https:\/\/github\.com\/[^/]+\/[^/]+$/;
  return githubRepoRegex.test(url);
};

export const extractRepoDetails = (repoUrl: string): RepoDetails | null => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = repoUrl.match(regex);
  if (match) {
    return { owner: match[1], repo: match[2] };
  }
  return null;
};

export const createOwnerProfileUrl = (repoUrl: string): string | null => {
  const repoDetails = extractRepoDetails(repoUrl);
  if (repoDetails) {
    return `https://github.com/${repoDetails.owner}`;
  }
  return null;
};
