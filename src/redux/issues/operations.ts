import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';

import { extractRepoDetails } from '@/utils/repo-url';
import { CategorizedIssues, Issue, IssuesAction } from '@/interfaces/issues';
import { RepoDetails } from '@/interfaces/repo-url';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos',
});

export const fetchRepoDetails = createAsyncThunk<
  { stars: number },
  RepoDetails,
  { rejectValue: string }
>('repo/fetchDetails', async ({ owner, repo }, thunkAPI) => {
  try {
    const response = await axiosInstance.get<{
      stargazers_count: number;
    }>(`/${owner}/${repo}`);

    const { stargazers_count } = response.data;

    return { stars: stargazers_count };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
});

export const fetchIssues = createAsyncThunk<
  CategorizedIssues,
  RepoDetails,
  { rejectValue: string }
>('issues/fetchAll', async ({ owner, repo }, thunkAPI) => {
  try {
    const response = await axiosInstance.get<Issue[]>(
      `/${owner}/${repo}/issues?per_page=100`
    );

    const issues = response.data;

    const categorizedIssues: CategorizedIssues = {
      todo: issues.filter(
        (issue: Issue) => issue.state === 'open' && !issue.assignee
      ),
      inProgress: issues.filter(
        (issue: Issue) => issue.state === 'open' && issue.assignee
      ),
      done: issues.filter((issue: Issue) => issue.state === 'closed'),
    };

    return categorizedIssues;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
});

export const loadIssues = createAsyncThunk<
  IssuesAction,
  string,
  { rejectValue: string }
>('issues/loadIssues', async (repoUrl: string, thunkAPI) => {
  const repoDetails = extractRepoDetails(repoUrl);
  if (!repoDetails) {
    return thunkAPI.rejectWithValue('Invalid repository URL');
  }

  try {
    const issuesAction = await thunkAPI.dispatch(
      fetchIssues({ owner: repoDetails.owner, repo: repoDetails.repo })
    );
    const issues = unwrapResult(issuesAction);

    const starsAction = await thunkAPI.dispatch(
      fetchRepoDetails({ owner: repoDetails.owner, repo: repoDetails.repo })
    );
    const stars = unwrapResult(starsAction);

    return { issues, stars: stars.stars };
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to load issues');
    } else {
      return thunkAPI.rejectWithValue('Failed to load issues');
    }
  }
});
