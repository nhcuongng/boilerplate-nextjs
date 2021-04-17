export type TStatus = 'DONE' | 'DOING';

export type TTodo = {
  id: string;
  title: string;
  description: string;
  status: TStatus;
};
