import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output()
  create = new EventEmitter<string>();

  taskName = new FormControl('');

  handleSubmit() {
    this.create.emit(this.taskName.value!);
    this.taskName.reset();
  }
}
