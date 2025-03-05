import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IssuesAction, IssuesState } from '@/interfaces/issues';
import { loadIssues } from './operations';

const initialState: IssuesState = {
  todo: [],
  inProgress: [],
  done: [],
  stars: 0,
  status: 'idle',
  error: null,
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadIssues.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        loadIssues.fulfilled,
        (state, action: PayloadAction<IssuesAction>) => {
          state.status = 'success';
          state.todo = action.payload.issues.todo;
          state.inProgress = action.payload.issues.inProgress;
          state.done = action.payload.issues.done;
          state.stars = action.payload.stars;
          console.log('state:', action.payload);
        }
      )
      .addCase(
        loadIssues.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.status = 'failed';
          state.error = action.payload as string;
        }
      );
  },
});

export default issuesSlice.reducer;
