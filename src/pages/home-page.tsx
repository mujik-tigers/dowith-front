import FileIcon from '@/assets/icons/file.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import { Input } from '@/components/common/input/input';
import { Tooltip } from '@/components/common/tooltip/tooltip';
import { JoinedSpaceList } from '@/components/space-list/joined-space-list';
import { useGetJoinedSpaceList } from '@/hooks/queries/use-get-joined-space-list';
import { MAX_SPACES_PER_USER } from '@/constants/space';
import tw from 'twin.macro';
import Logo from '@/assets/images/img_log_small.png';
import { Header } from '@/components/common/header/Header';
import { HeaderM } from '@/components/common/header/HeaderM';
import { useUserCode, useUserAppName } from '@/store/auth/use-user-store';
import Avatar from 'boring-avatars';
import { useMediaQuery } from '@/hooks/use-media-query';
import { MOBILE_MEDIAQUERY } from '@/constants/media-query';

export const HomePage = () => {
  const userCode = useUserCode();
  const userAppName = useUserAppName();
  const { data: joinedSpaceList = [] } = useGetJoinedSpaceList();
  const isMobile = useMediaQuery(MOBILE_MEDIAQUERY);

  return (
    <div className="flex w-full flex-col items-start">
      {!isMobile && userCode && userAppName && (
        <Header userCode={userCode!} userAppName={userAppName!} />
      )}
      {isMobile && userCode && (
        <HeaderM>
          <HeaderM.Left>
            <img src={Logo} alt="do-with 로고" />
          </HeaderM.Left>
          <HeaderM.Center>
            <HeaderTitle>dowith</HeaderTitle>
          </HeaderM.Center>
          <HeaderM.Right>
            <Avatar name={userCode!} variant="beam" size={40} />
          </HeaderM.Right>
        </HeaderM>
      )}
      <ContentWrapper>
        <JoinedSpaceSection>
          <JoinedSpaceSectionHeader>
            <TitleAndWaitButtonWrapper>
              <JoinedSpaceTitleWrapper>
                <HomeIcon className="size-7 md:size-6" />
                <JoinedSpaceTitle>참여중인 스페이스</JoinedSpaceTitle>
                <JoinedSpaceCount>
                  {joinedSpaceList.length} / {MAX_SPACES_PER_USER}
                </JoinedSpaceCount>
              </JoinedSpaceTitleWrapper>
              <WaitingSpaceDropdownButton>
                <FileIcon className="size-7 md:size-6" />
                <WaitingSpaceCountWrapper>
                  {/* 참여 대기중 목록의 길이(개수) 표시 */}
                  <WaitingSpaceCount>1</WaitingSpaceCount>
                </WaitingSpaceCountWrapper>
              </WaitingSpaceDropdownButton>
            </TitleAndWaitButtonWrapper>
            {joinedSpaceList.length > 0 && (
              <JoinedSpaceDescription>
                스페이스를 클릭하면 해당 스페이스 홈으로 이동합니다.
              </JoinedSpaceDescription>
            )}
          </JoinedSpaceSectionHeader>
          <JoinedSpaceList spaceData={joinedSpaceList} />
        </JoinedSpaceSection>
        <SearchedSpaceSection>
          <SearchedSpaceContent>
            <SearchedSpaceHeader>
              <TitleAndIconWrapper>
                <SearchIcon className="size-7" />
                <SearchedSpaceTitle>스페이스 탐색</SearchedSpaceTitle>
              </TitleAndIconWrapper>
              <InputWrapper>
                <Input
                  borderType="outline"
                  placeholder="검색어를 입력해주세요."
                />
              </InputWrapper>
            </SearchedSpaceHeader>
            {/* <SearchedSpaceList /> */}
          </SearchedSpaceContent>
        </SearchedSpaceSection>
        <TooltipWrapper>
          <Tooltip
            triggerStyle="rounded"
            contentStyle="default"
            contentTextStyle="default"
            delayDuration={0}
            sideOffset={8}
            trigger={<PlusIcon />}
            content="새 스페이스 개설하기"
            tooltipLocation="left"
          />
        </TooltipWrapper>
      </ContentWrapper>
    </div>
  );
};

const ContentWrapper = tw.div`flex w-full md:flex-col`;

const HeaderTitle = tw.p`text-XB24 tracking-tighter`;
const JoinedSpaceSection = tw.div`flex grow flex-col items-start gap-5 p-5 md:gap-3 lg:max-w-[500px] xl:max-w-[500px]`;
const JoinedSpaceSectionHeader = tw.div`flex w-full flex-col items-start gap-2`;
const TitleAndWaitButtonWrapper = tw.div`flex w-full items-center justify-between`;
const JoinedSpaceTitleWrapper = tw.div`flex items-center gap-2`;
const JoinedSpaceTitle = tw.span`pt-1 text-B20 text-title md:text-B16`;
const JoinedSpaceCount = tw.span`pt-1`;
const WaitingSpaceDropdownButton = tw.button`relative flex h-10 w-10 items-center justify-center rounded-md border border-line p-2 md:(h-8 w-8)`;
const WaitingSpaceCountWrapper = tw.div`absolute left-7 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white p-1 top-[-10px] md:(left-5 h-4 w-4 top-[-8px])`;
const WaitingSpaceCount = tw.span`text-B12 text-red md:text-M10`;
const JoinedSpaceDescription = tw.span`inline-block truncate text-M14 text-textWeak md:text-M10`;

const SearchedSpaceSection = tw.div`flex grow flex-col items-start justify-between`;
const SearchedSpaceContent = tw.div`flex w-full flex-col items-start gap-5 p-5 md:gap-3`;
const SearchedSpaceHeader = tw.div`flex w-full items-center justify-between md:(flex-col items-start gap-2)`;
const TitleAndIconWrapper = tw.div`flex items-center gap-2 min-w-[10rem]`;

const SearchedSpaceTitle = tw.span`pt-0 text-B20 text-title md:text-B16`;
const InputWrapper = tw.div`md:w-full lg:(w-full max-w-[24rem]) xl:w-96`;
const TooltipWrapper = tw.div`fixed bottom-5 right-4 flex w-full items-center justify-end gap-2`;
