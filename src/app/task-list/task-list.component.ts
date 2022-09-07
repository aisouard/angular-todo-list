import {
  Component,
  Input,
} from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input()
  prefix = '';

  @Input()
  tasks: Task[] = [];
}
