import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { tasksReducer } from './task/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
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
