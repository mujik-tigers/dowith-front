import { AlertModal } from '@/components/common/modal/alert-modal/alert-modal';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'components/common/modal/AlertModal',
  component: AlertModal,
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

const Template: StoryFn<React.ComponentProps<typeof AlertModal>> = (args) => (
  <AlertModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '로그인이 필요한 서비스 입니다.',
  description: '확인을 누르면 로그인 화면으로 이동합니다.',
  confirmButtonBgColor: 'red',
  onConfirm: () => alert('onClick!'),
  onClose: () => alert('onClose!'),
};
