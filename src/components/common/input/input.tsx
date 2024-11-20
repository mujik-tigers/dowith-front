import { Input as TextInput } from '@/components/ui/input';
import React, { forwardRef } from 'react';

const INPUT_TYPE_CLASSES = {
  outline:
    'rounded-lg bg-transparent text-M14 text-text placeholder:text-textWeak focus:bg-white focus:text-text focus:outline-line focus-visible:outline',
  ghost:
    'rounded-lg bg-transparent text-M14 text-text placeholder:text-textWeak focus:bg-white focus:text-text focus:outline-none focus-visible:outline-none border-none',
} as const;

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
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

// 고스트 추가
