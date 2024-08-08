import { Input } from '@/components/ui/input';

const inputTypeClasses = {
  outline:
    'rounded-lg bg-transparent text-M14 text-text placeholder:text-textWeak focus:bg-white focus:text-text focus:outline-line focus-visible:outline',
  ghost: '',
} as const;

/** TODO
 *  - borderType ghost 스타일 추가 해야함 (todo 작성할 떄 사용할 input)
 *  - 투명하게 할지 밑줄 있는 input으로 할지 고민중
 */

export const TextInput: React.FC<{
  borderType: 'outline' | 'ghost';
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAnimation?: TAnimationType;
}> = ({
  placeholder = '',
  borderType,
  icon,
  disabled = false,
  iconAnimation = 'none',
}) => {
  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        className={`${inputTypeClasses[borderType]}`}
        disabled={disabled}
        icon={icon}
        iconAnimation={iconAnimation}
      />
    </>
  );
};
