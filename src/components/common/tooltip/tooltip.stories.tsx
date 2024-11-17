import { Tooltip } from '@/components/common/tooltip/tooltip';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'components/common/Tooltip',
  component: Tooltip,
  argTypes: {
    triggerStyle: {
      control: 'select',
      options: ['rounded'],
    },
    contentStyle: {
      control: 'select',
      options: ['default'],
    },
    contentTextStyle: {
      control: 'select',
      options: ['default'],
    },
    tooltipLocation: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delayDuration: {
      control: 'number',
    },
    sideOffset: {
      control: 'number',
    },
    onTooltipClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Tooltip>> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  trigger: <button>tooltip</button>,
  content: 'This is a tooltip',
  triggerStyle: 'rounded',
  contentStyle: 'default',
  contentTextStyle: 'default',
  tooltipLocation: 'top',
  delayDuration: 300,
  sideOffset: 10,
  onTooltipClick: () => alert('clicked'),
};
