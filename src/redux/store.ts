import { configureStore } from '@reduxjs/toolkit';

import { issuesSlice } from './issues/slice';

export const store = configureStore({
  reducer: { issues: issuesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
