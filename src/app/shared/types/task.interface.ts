export interface TaskInterface {
  id: number;
  categoryId: number;
  name: string;
  deadlineDate: Date;
  createdDate: Date;
  status: string;
  priority: string;
}
