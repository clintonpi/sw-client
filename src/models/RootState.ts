import { PayloadWithRoot } from '.';

export interface RootState {
  isLoading: boolean;
  payload: PayloadWithRoot | null;
  error: Error | null
}
