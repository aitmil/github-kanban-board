export interface Issue {
  id: number;
  number: number;
  title: string;
  user: {
    type: string;
  };
  state: 'open' | 'closed';
  assignee: { login: string } | null;
  comments: number;
  created_at: string;
}

export interface CategorizedIssues {
  todo: Issue[];
  inProgress: Issue[];
  done: Issue[];
}

export interface IssuesState {
  todo: Issue[];
  inProgress: Issue[];
  done: Issue[];
  stars: number;
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: string | null;
}

export interface IssuesAction {
  issues: CategorizedIssues;
  stars: number;
}
