import { ConfirmModal } from '@/components/common/modal/confirm-modal/confirm-modal';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'components/common/modal/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    confirmButtonBgColor: {
      control: 'select',
      options: ['red', 'black'],
    },
    onConfirm: { action: 'clicked' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof ConfirmModal>> = (args) => (
  <ConfirmModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '스페이스 참여 요청',
  description: '스페이스에 참여 요청을 보내시겠습니까?',
  confirmButtonBgColor: 'black',
  onConfirm: () => alert('onClick!'),
  onClose: () => alert('onClose!'),
};
