import { Input as TextInput } from '@/components/ui/input';
import React, { forwardRef } from 'react';

const INPUT_TYPE_CLASSES = {
  outline:
    'rounded-lg bg-transparent text-M14 text-text placeholder:text-textWeak focus:bg-white focus:text-text focus:outline-line focus-visible:outline',
  ghost: '',
} as const;

/** TODO
 *  - borderType ghost 스타일 추가 해야함 (todo 작성할 떄 사용할 input)
 *  - 투명하게 할지 밑줄 있는 input으로 할지 고민중
 */

export const Input = forwardRef<
  HTMLInputElement,
  {
    borderType: 'outline' | 'ghost';
    placeholder?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconAnimation?: TAnimationType;
  }
>(
  (
    {
      placeholder = '',
      borderType,
      icon,
      disabled = false,
      iconAnimation = 'none',
      ...props
    },
    ref
  ) => {
    return (
      <TextInput
        type="text"
        placeholder={placeholder}
        className={`${INPUT_TYPE_CLASSES[borderType]}`}
        disabled={disabled}
        icon={icon}
        iconAnimation={iconAnimation}
        autoComplete="off"
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
