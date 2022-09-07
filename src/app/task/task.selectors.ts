import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TasksState } from './task.reducer';

export const selectTasks = createFeatureSelector<TasksState>('tasks');

export const selectIncompleteTasks = createSelector(
  selectTasks,
  (tasks) => tasks.filter((task) => !task.done),
);
