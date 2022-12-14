import {
  Component,
  Input,
} from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  id = 0;

  @Input()
  prefix = '';

  @Input()
  task!: Task;
}
