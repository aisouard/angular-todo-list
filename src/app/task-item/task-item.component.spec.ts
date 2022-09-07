import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import { Task } from '../task/task.model';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
  });

  describe('with a task', () => {
    beforeEach(() => {
      component.task = new Task('Simple task');
      fixture.detectChanges();
    });

    it('renders the task\'s name', () => {
      const element = fixture.nativeElement as HTMLElement;
      expect(element.innerText).toEqual('Simple task');
    });
  });
});
