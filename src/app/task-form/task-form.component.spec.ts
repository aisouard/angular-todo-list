import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let compiled: HTMLElement;
  let createSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();

    createSpy = jasmine.createSpy('create');

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    component.create.emit = createSpy;

    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicking the Create button', () => {
    beforeEach(() => {
      const button: HTMLButtonElement = compiled.querySelector('[data-qa="create-task-button"]')!;
      const input: HTMLInputElement = compiled.querySelector('[data-qa="new-task-name"]')!;
      expect(button).toBeTruthy();
      expect(input).toBeTruthy();

      input.value = 'A very simple task';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      button.click();
    });

    it('clears the input contents', () => {
      const input: HTMLInputElement = compiled.querySelector('[data-qa="new-task-name"]')!;
      expect(input.value).toEqual('');
    });

    it('emits the `create` event with the task\'s name', () => {
      expect(createSpy).toHaveBeenCalledOnceWith('A very simple task');
    });
  });
});
