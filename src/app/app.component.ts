import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIncompleteTasks } from './task/task.selectors';
import { create } from './task/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-list';

  incompleteTasks$ = this.store.select(selectIncompleteTasks);

  constructor(private store: Store) {}

  createTask(name: string) {
    this.store.dispatch(create({ name }));
  }
}
