import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output()
  create = new EventEmitter<string>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    this.create.emit(this.form.get('name')?.value!);
    this.form.reset();
  }
}
