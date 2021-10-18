import { Root } from '.';

export interface PayloadWithRoot {
  count: number;
  next: string | null;
  previous: string | null;
  results: Root[];
}
