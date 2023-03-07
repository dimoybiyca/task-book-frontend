import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';
import { TaskInputInterface } from 'src/app/shared/types/task-input.interface';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { GetTaskResponseInterface } from 'src/app/tasks/types/get-task-response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasksByCategory(categoryId: number): Observable<TaskInterface[]> {
    const url = environment.apiUrl + `/categories/${categoryId}/tasks`;

    return this.http.get(url).pipe(map(this.getTasks));
  }

  createTask(task: TaskInputInterface): Observable<TaskInterface> {
    const url = environment.apiUrl + '/tasks';

    return this.http.post(url, task).pipe(map(this.getTask));
  }

  updateTask(task: TaskInterface): Observable<TaskInterface> {
    const url = environment.apiUrl + '/tasks';

    return this.http.put(url, task).pipe(map(this.getTask));
  }

  deleteTask(taskId: number): Observable<{}> {
    const url = environment.apiUrl + '/tasks/' + taskId;

    return this.http.delete(url);
    //.pipe(map(() => taskId));
  }

  private getTask(taskInterface: GetTaskResponseInterface): TaskInterface {
    return taskInterface.task;
  }

  private getTasks(tasksInterface: GetTasksResponseInterface): TaskInterface[] {
    return tasksInterface.tasks;
  }
}
