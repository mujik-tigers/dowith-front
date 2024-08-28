import {
  Tooltip as TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
  TooltipPortal,
} from '@/components/ui/tooltip';
import React from 'react';

const TRIGGER_STYLE_CLASSES = {
  rounded:
    'flex size-14 items-center justify-center rounded-full border border-line hover:bg-white',
} as const;

const CONTENT_SHAPE_CLASSES = {
  default: `bg-black border rounded relative py-2 px-4`,
} as const;

const CONTENT_TEXT_STYLE_CLASSES = {
  default: 'text-M16 text-white',
} as const;

export const Tooltip: React.FC<{
  trigger: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
  sideOffset?: number;
  tooltipLocation: 'top' | 'bottom' | 'left' | 'right';
  contentStyle: keyof typeof CONTENT_SHAPE_CLASSES;
  contentTextStyle: keyof typeof CONTENT_TEXT_STYLE_CLASSES;
  triggerStyle: keyof typeof TRIGGER_STYLE_CLASSES;
}> = ({
  trigger,
  content,
  delayDuration,
  sideOffset,
  triggerStyle,
  contentStyle,
  contentTextStyle,
  tooltipLocation,
}) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={delayDuration}>
        <TooltipTrigger className={`${TRIGGER_STYLE_CLASSES[triggerStyle]}`}>
          {trigger}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            side={tooltipLocation}
            sideOffset={sideOffset}
            className={`${CONTENT_SHAPE_CLASSES[contentStyle]}`}
          >
            <span className={`${CONTENT_TEXT_STYLE_CLASSES[contentTextStyle]}`}>
              {content}
            </span>
            <TooltipArrow className="size-2.5 fill-black" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};
