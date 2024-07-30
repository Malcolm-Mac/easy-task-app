export type Tasks = {
  id: string;
  user_id: string;
  title: string;
  summary: string;
  due_date: string;
};

export type NewTaskData = {
  title: string;
  summary: string;
  due_date: string;
};
