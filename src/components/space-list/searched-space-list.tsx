import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';
import tw from 'twin.macro';

export const SearchedSpaceList: React.FC<{
  spaceData: TSearchedSpaceData[];
}> = ({ spaceData }) => {
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
            {/* 1280px 이상에서 화면에서 나타나는 요소 */}
            <SpaceDescriptionWithXl>{space.description}</SpaceDescriptionWithXl>
            <SpaceParticipants>
              {space.currentPeople} / {space.maxPeople}
            </SpaceParticipants>
          </SpaceContentWrapper>
          {/* 1280px 미만에서 화면에서 나타나는 요소 */}
          <SpaceDescriptionWithMd>{space.description}</SpaceDescriptionWithMd>
        </SpaceListItem>
      ))}
    </SpaceList>
  );
};

const SpaceList = tw.ul`flex w-full flex-col items-start gap-4 md:gap-2`;
const SpaceListItem = tw.li`flex w-full flex-col items-center gap-2 xl:flex-row`;
const SpaceContentWrapper = tw.div`flex w-full justify-between`;
const ImageTitleWrapper = tw.div`flex items-center gap-2 min-w-[18rem] md:min-w-[14rem]`;
const SpaceImage = tw.img`h-8 w-8 md:(h-6 w-6)`;
const SpaceTitle = tw.span`text-M14 text-text md:text-M12`;
const SpaceParticipants = tw.span`text-B16 text-textWeak md:text-B12`;
const SpaceDescriptionWithXl = tw.span`hidden text-M16 text-textWeak xl:flex`;
const SpaceDescriptionWithMd = tw.span`flex w-full items-start text-M16 text-textWeak md:text-M12 xl:hidden`;
