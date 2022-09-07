import { Story, Meta } from '@storybook/angular/types-6-0';
import { TaskFormComponent } from './task-form.component';

export default {
  title: 'Tasks/Form',
  component: TaskFormComponent,
} as Meta;

const Template: Story<TaskFormComponent> = (args: TaskFormComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
