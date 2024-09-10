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
            <SpaceDescriptionWithLg>{space.description}</SpaceDescriptionWithLg>
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
const SpaceListItem = tw.li`flex w-full items-center md:flex-col lg:flex-col lg:gap-2`;
const SpaceContentWrapper = tw.div`flex w-full justify-between`;
const ImageTitleWrapper = tw.div`flex min-w-72 items-center gap-2 md:min-w-56`;
const SpaceImage = tw.img`size-8 md:size-6`;
const SpaceTitle = tw.span`text-M14 text-text md:text-M12`;
const SpaceParticipants = tw.span`text-B16 text-textWeak md:text-B12`;
const SpaceDescriptionWithLg = tw.span`text-M16 text-textWeak md:hidden md:text-M12 lg:hidden`;
const SpaceDescriptionWithMd = tw.span`hidden w-full items-start text-M16 text-textWeak md:flex md:text-M12 lg:flex`;
