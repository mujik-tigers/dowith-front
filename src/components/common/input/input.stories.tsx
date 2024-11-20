import { Input } from '@/components/common/input/input';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'components/common/Input',
  component: Input,
  argTypes: {
    borderType: {
      control: 'select',
      options: ['outline', 'ghost'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  borderType: 'outline',
  placeholder: 'Input',
  disabled: false,
};
