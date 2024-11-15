import { useState, useRef, forwardRef, ForwardedRef } from 'react';
import tw from 'twin.macro';
import FileImage from '@/assets/images/file-image.svg';
import CloseIcon from '@/assets/icons/close-icon.svg?react';

const mergeRefs =
  <T,>(...refs: ForwardedRef<T>[]) =>
  (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };

export const ImageInput = forwardRef<
  HTMLInputElement,
  {
    onChange: (file: File | null) => void;
  }
>(({ onChange }, ref) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewSrc(reader.result as string);
      reader.readAsDataURL(file);

      if (onChange) onChange(file);
    }
  };

  const handleFileRemove = () => {
    setPreviewSrc(null);
    if (onChange) onChange(null);
  };

  return (
    <Wrapper>
      <InputButton type="button" onClick={handleFileUploadButtonClick}>
        <InputImage src={FileImage} alt="file" />
        <InputDescription>파일 선택</InputDescription>
      </InputButton>
      {previewSrc && (
        <div className="relative">
          <ImagePreivew src={previewSrc} alt="preview" />
          <CloseIcon
            className="bg-black rounded-xl cursor-pointer absolute top-1 right-1"
            onClick={handleFileRemove}
          />
        </div>
      )}
      <HiddenInput
        ref={mergeRefs(fileInputRef, ref)}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </Wrapper>
  );
});

const Wrapper = tw.div`flex gap-3`;

const InputButton = tw.button`flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-md border border-gray-300`;
const InputImage = tw.img`h-6 w-6`;
const InputDescription = tw.span`text-M12 text-textWeak`;
const ImagePreivew = tw.img`h-20 w-20 rounded-md border border-gray-300 object-cover`;

const HiddenInput = tw.input`hidden`;
