import tw, { styled } from 'twin.macro';
import FileIcon from '@/assets/icons/file.svg?react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import CloseIcon from '@/assets/icons/close-icon.svg?react';
import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';
import { Button } from '../common/button/button';
import { useState } from 'react';
import { useGetWaitingSpaceList } from '@/hooks/queries/use-get-waiting-space-list';
import { useDeleteWaitingSpace } from '@/hooks/queries/use-delete-waiting-space';
import { useQueryClient } from '@tanstack/react-query';

export const WaitingSpaceList = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data: waitingSpaceData = [] } = useGetWaitingSpaceList();
  const { mutate: deleteWaitingSpace } = useDeleteWaitingSpace();

  const handleDeleteWaitingSpace = (requestId: number) => {
    queryClient.setQueryData(
      ['waitingSpaceList'],
      (oldData: TWaitingSpaceData[]) => {
        return oldData.filter((space) => space.requestId !== requestId);
      }
    );
    deleteWaitingSpace(requestId, {
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ['waitingSpaceList'] });
      },
    });
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <WaitingSpaceDropdownButton>
          <FileIcon className="size-7 md:size-6" />
          <WaitingSpaceCountWrapper>
            <WaitingSpaceCount>{waitingSpaceData.length}</WaitingSpaceCount>
          </WaitingSpaceCountWrapper>
        </WaitingSpaceDropdownButton>
      </PopoverTrigger>
      <StyledPopoverContent align="end" sideOffset={0}>
        <WaitingSpaceWrapper>
          <WaitingSpaceListHeader>
            <WaitingSpaceListTitle>가입 대기 목록</WaitingSpaceListTitle>
            <CloseIcon
              className="size-5 md:size-4 cursor-pointer"
              onClick={() => {
                setIsPopoverOpen(false);
              }}
            />
          </WaitingSpaceListHeader>
          <SpaceList>
            {waitingSpaceData.map((space) => (
              <SpaceListItem key={space.requestId}>
                <SpaceContentWrapper>
                  <ImageTitleWrapper>
                    <SpaceImage
                      src={space.image ? space.image : DefulatSpaceProfile}
                      alt="space profile"
                    />
                    <SpaceTitle>{space.title}</SpaceTitle>
                  </ImageTitleWrapper>
                  <Button
                    bgColor="white"
                    size="fixedS"
                    onClick={() => handleDeleteWaitingSpace(space.requestId)}
                  >
                    <CancelButtonTitle>요청 취소</CancelButtonTitle>
                  </Button>
                </SpaceContentWrapper>
              </SpaceListItem>
            ))}
          </SpaceList>
        </WaitingSpaceWrapper>
      </StyledPopoverContent>
    </Popover>
  );
};

const StyledPopoverContent = styled(PopoverContent)`
  ${tw`bg-white px-4 py-5 [width:var(--joined-space-section-width)]`}
`;

const WaitingSpaceWrapper = tw.div`flex flex-col gap-4`;
const WaitingSpaceListHeader = tw.div`flex items-center justify-between`;
const WaitingSpaceListTitle = tw.span`text-B16`;
const WaitingSpaceDropdownButton = tw.button`relative flex h-10 w-10 items-center justify-center rounded-md border border-line p-2 md:(h-8 w-8)`;
const WaitingSpaceCountWrapper = tw.div`absolute left-7 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white p-1 top-[-10px] md:(left-5 h-4 w-4 top-[-8px])`;
const WaitingSpaceCount = tw.span`text-B12 text-red md:text-M10`;

const SpaceList = tw.ul`flex w-full flex-col items-start gap-4 md:gap-2`;
const SpaceListItem = tw.li`flex h-8 w-full items-center justify-between`;
const SpaceContentWrapper = tw.div`flex w-full justify-between`;
const ImageTitleWrapper = tw.div`flex items-center gap-2`;
const SpaceImage = tw.img`h-8 w-8 md:(h-6 w-6)`;
const SpaceTitle = tw.span`text-M14 text-text md:text-M12`;

const CancelButtonTitle = tw.span`text-M14 md:text-M12`;
