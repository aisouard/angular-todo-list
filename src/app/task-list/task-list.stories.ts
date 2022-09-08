import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TaskListComponent } from './task-list.component';
import { TaskItemComponent } from '../task-item/task-item.component';

export default {
  title: 'Tasks/List',
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskItemComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TaskListComponent> = (args: TaskListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { name: 'New task', done: false },
    { name: 'Completed!', done: true },
  ],
};
