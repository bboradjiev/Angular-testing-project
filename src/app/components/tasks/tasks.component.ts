import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  deleteTask(id) {
    this.taskService.deleteTaskService(id).subscribe(() => {
      this.taskService.getTasks().subscribe((data) => (this.tasks = data));
    });
  }
  toggleTask(task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskService(task).subscribe();
  }
}
