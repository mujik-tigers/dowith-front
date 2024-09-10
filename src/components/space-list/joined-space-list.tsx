import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';
import tw from 'twin.macro';

export const JoinedSpaceList: React.FC<{ spaceData: TJoinedSpaceData[] }> = ({
  spaceData,
}) => {
  return (
    <SpaceList>
      {spaceData.map((space) => (
        <SpaceListItem key={space.id}>
          <SpaceContentWrapper>
            <ImageTitleWrapper>
              <SpaceImage
                src={space.image ? space.image : DefulatSpaceProfile}
                alt="space profile"
              />
              <SpaceTitle>{space.title}</SpaceTitle>
            </ImageTitleWrapper>
            <SpaceParticipants>
              {space.currentPeople} / {space.maxPeople}
            </SpaceParticipants>
          </SpaceContentWrapper>
        </SpaceListItem>
      ))}
    </SpaceList>
  );
};

const SpaceList = tw.ul`flex w-full flex-col items-start gap-4 md:gap-2`;
const SpaceListItem = tw.li`flex h-8 w-full cursor-pointer items-center justify-between`;
const SpaceContentWrapper = tw.div`flex w-full justify-between`;
const ImageTitleWrapper = tw.div`flex items-center gap-2`;
const SpaceImage = tw.img`size-8 md:size-6`;
const SpaceTitle = tw.span`text-M14 text-text md:text-M12`;
const SpaceParticipants = tw.span`text-B16 text-textWeak md:text-B12`;
