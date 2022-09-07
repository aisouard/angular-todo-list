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

  describe('empty form', () => {
    let button: HTMLButtonElement;
    let input: HTMLInputElement;

    beforeEach(() => {
      button = compiled.querySelector('[data-qa="create-task-button"]')!;
      input = compiled.querySelector('[data-qa="new-task-name"]')!;
      expect(input).toBeTruthy();
    });

    it('renders a button', () => {
      expect(button).toBeTruthy();
      expect(button.disabled).toBeTrue();
    });

    it('renders an input box', () => {
      expect(input).toBeTruthy();
    });
  });

  describe('clicking the Create button', () => {
    let button: HTMLButtonElement;
    let input: HTMLInputElement;

    beforeEach(() => {
      button = compiled.querySelector('[data-qa="create-task-button"]')!;
      input = compiled.querySelector('[data-qa="new-task-name"]')!;

      input.value = 'A very simple task';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      button.click();
      fixture.detectChanges();
    });

    it('clears the input contents', () => {
      input = compiled.querySelector('[data-qa="new-task-name"]')!;
      expect(input.value).toEqual('');
    });

    it('disables the button', () => {
      button = compiled.querySelector('[data-qa="create-task-button"]')!;
      expect(button.disabled).toBeTrue();
    });

    it('emits the `create` event with the task\'s name', () => {
      expect(createSpy).toHaveBeenCalledOnceWith('A very simple task');
    });
  });
});
