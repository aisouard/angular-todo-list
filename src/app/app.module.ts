import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { tasksReducer } from './task/task.reducer';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
