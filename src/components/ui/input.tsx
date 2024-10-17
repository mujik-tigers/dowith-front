import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconAnimation: TAnimationType;
}

const getInputAnimaionStyles = (
  iconAnimation: TAnimationType,
  isFocused: boolean
) => {
  switch (iconAnimation) {
    case 'rotate':
      return { rotate: isFocused ? 90 : 0 };
    case 'none':
    default:
      return {};
  }
};

/**
 * 삭제 사항 :
 * - 일관된 UI 디자인을 위해 포커스 시 나타나는 기본 outline과 ring 스타일을 제거
 * - 제거된 클래스 :
 *   - focus-visible:ring-2
 *   - focus-visible:ring-ring
 *   - focus-visible:ring-offset-2
 *  참고 : https://github.com/shadcn-ui/ui/issues/769
 *
 * 추가 사항 :
 *  - icon 관련 추가
 *  참고 https://github.com/shadcn-ui/ui/discussions/1552
 */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconAnimation, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const animationStyle = getInputAnimaionStyles(iconAnimation, isFocused);

    return (
      <div className={cn('relative', className)}>
        {icon && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 ml-3 flex items-center justify-center"
            animate={animationStyle}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background p-3 text-sm ring-offset-background transition-colors duration-300 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-9',
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
