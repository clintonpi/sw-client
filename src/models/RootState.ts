import { Root } from '.';

export interface RootState {
  isLoading: boolean;
  payload: Root | null;
  error: Error | null
}
