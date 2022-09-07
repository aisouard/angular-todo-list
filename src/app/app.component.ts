import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { create } from './task/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-list';

  constructor(private store: Store) {}

  createTask(name: string) {
    this.store.dispatch(create({ name }));
  }
}
