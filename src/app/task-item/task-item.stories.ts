import { Story, Meta } from '@storybook/angular/types-6-0';
import { TaskItemComponent } from './task-item.component';

export default {
  title: 'Tasks/Item',
  component: TaskItemComponent,
} as Meta;

const Template: Story<TaskItemComponent> = (args: TaskItemComponent) => ({
  props: args,
});

export const Incomplete = Template.bind({});
Incomplete.args = {
  task: {
    name: 'Incomplete task',
    done: false,
  },
};

export const Done = Template.bind({});
Done.args = {
  task: {
    name: 'Done task',
    done: true,
  },
};
