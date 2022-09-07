import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { Task } from '../task/task.model';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  describe('empty', () => {
    beforeEach(() => {
      component.tasks = [];
      fixture.detectChanges();
    });

    it('does not render any text', () => {
      const list = fixture.nativeElement as HTMLElement;
      expect(list.innerText).toEqual('');
    });
  });

  describe('with a task', () => {
    beforeEach(() => {
      component.tasks = [new Task('Hello world')];
      fixture.detectChanges();
    });

    it('renders the name of the task', () => {
      const list = fixture.nativeElement as HTMLElement;
      expect(list.innerText).toEqual('Hello world');
    });
  });
});
