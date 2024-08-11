import { Button } from '@/components/common/button/button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'components/common/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['fixedS', 'fixedM', 'fixedL', 'flexibleM', 'flexibleL'],
    },
    bgColor: {
      control: 'select',
      options: ['red', 'yellow', 'white', 'black', 'blue'],
    },
    textColor: {
      control: 'select',
      options: ['text', 'textWeak', 'textActive', 'textWhite'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  size: 'fixedM',
  bgColor: 'yellow',
  textColor: 'textWhite',
  onClick: () => alert('onClick!'),
};
