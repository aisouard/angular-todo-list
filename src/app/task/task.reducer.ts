import {
  createReducer,
  on,
} from '@ngrx/store';
import { create } from './task.actions';
import { Task } from './task.model';

export type TasksState = Array<Task>;
export const initialState: TasksState = [];

export const tasksReducer = createReducer(
  initialState,
  on(create, (state, { name }): TasksState => [...state, new Task(name)]),
);
