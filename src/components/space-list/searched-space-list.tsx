import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';
import tw from 'twin.macro';
import { useGetSearchedSpaceList } from '@/hooks/queries/use-get-searched-space-list';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import SearchIcon from '@/assets/icons/search.svg?react';
import { Input } from '@/components/common/input/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebounceInput } from '@/hooks/use-debounce-input';
import { LoadingSpinner } from '../common/loading-spinner/loading-spinner';
import { useUserAppName } from '@/store/auth/use-user-store';
import { useGetRandomSpaceList } from '@/hooks/queries/use-get-random-space-list';
import { openModal } from '@/store/use-modal-store';

const searchFormSchema = z.object({
  keyword: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s+/g, ' '))
    .optional(),
});

export const SearchedSpaceList = () => {
  const userAppName = useUserAppName();
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      keyword: '',
    },
    mode: 'onChange',
  });

  const searchKeyword = form.watch('keyword');
  const debounedKeyword = useDebounceInput(searchKeyword, 500);

  const {
    data: searchedSpaceListData,
    isPending: isSearchSpacesPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetSearchedSpaceList(debounedKeyword, 10);

  const searchedSpaceList = searchedSpaceListData?.pages.flatMap(
    (page) => page.teamDocumentOutlines
  );

  const { targetRef } = useIntersectionObserver<HTMLDivElement>({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: fetchNextPage,
    threshold: 0,
  });

  const { data: randomSpaceList } = useGetRandomSpaceList();

  const spaceListClickHandler = (spaceId: number, spaceTitle: string) => {
    console.log(spaceId);
    openModal({
      type: 'confirm',
      id: 'space-join-request',
      props: {
        title: '스페이스 참여 요청',
        description: `${spaceTitle}에 참여 요청을 보내시겠습니까?`,
        confirmButtonBgColor: 'black',
        // 스페이스 참여 요청 api 호출
        onConfirm: () => {},
      },
    });
  };

  const renderSpaceListContent = () => {
    if (!debounedKeyword) {
      return randomSpaceList?.map((space) => (
        <SpaceListItem
          key={space.id}
          onClick={() => spaceListClickHandler(space.id, space.title)}
        >
          <SpaceContentWrapper>
            <ImageTitleWrapper>
              <SpaceImage
                src={space.image ? space.image : DefulatSpaceProfile}
                alt="space profile"
              />
              <SpaceTitle>{space.title}</SpaceTitle>
            </ImageTitleWrapper>
            <SpaceDescriptionWithXl>{space.description}</SpaceDescriptionWithXl>
            <SpaceParticipants>
              {space.currentPeople} / {space.maxPeople}
            </SpaceParticipants>
          </SpaceContentWrapper>
          <SpaceDescriptionWithMd>{space.description}</SpaceDescriptionWithMd>
        </SpaceListItem>
      ));
    }
    if (debounedKeyword && isSearchSpacesPending) {
      return (
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      );
    }

    if (debounedKeyword && searchedSpaceList?.length === 0) {
      return <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>;
    }

    return searchedSpaceList?.map((space) => (
      <SpaceListItem
        key={space.id}
        onClick={() => spaceListClickHandler(space.id, space.title)}
      >
        <SpaceContentWrapper>
          <ImageTitleWrapper>
            <SpaceImage
              src={space.image ? space.image : DefulatSpaceProfile}
              alt="space profile"
            />
            <SpaceTitle>{space.title}</SpaceTitle>
          </ImageTitleWrapper>
          <SpaceDescriptionWithXl>{space.description}</SpaceDescriptionWithXl>
          <SpaceParticipants>
            {space.currentPeople} / {space.maxPeople}
          </SpaceParticipants>
        </SpaceContentWrapper>
        <SpaceDescriptionWithMd>{space.description}</SpaceDescriptionWithMd>
      </SpaceListItem>
    ));
  };

  return (
    <SearchedSpaceContent>
      <SearchedSpaceHeader>
        <TitleAndIconWrapper>
          <SearchIcon className="size-7" />
          <SearchedSpaceTitle>스페이스 탐색</SearchedSpaceTitle>
        </TitleAndIconWrapper>
        <InputWrapper>
          <Form {...form}>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        borderType="outline"
                        placeholder="검색어를 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </InputWrapper>
      </SearchedSpaceHeader>
      <SpaceList>
        {debounedKeyword ? (
          <div>
            <SearchResultKeyword>{`"${debounedKeyword}"`}</SearchResultKeyword>
            <SearchResultText> 검색결과</SearchResultText>
          </div>
        ) : (
          <div>
            <SearchResultKeyword>{`${userAppName}`}</SearchResultKeyword>
            <SearchResultText>님에게 추천하는 스페이스입니다!</SearchResultText>
          </div>
        )}
        {renderSpaceListContent()}
        {isFetchingNextPage && (
          <LoadingSpinnerWrapper>
            <LoadingSpinner />
          </LoadingSpinnerWrapper>
        )}
        <LoadMoreTrigger ref={targetRef} />
      </SpaceList>
    </SearchedSpaceContent>
  );
};

const SearchedSpaceContent = tw.div`flex w-full flex-col items-start gap-6 p-5 md:gap-3`;
const SearchedSpaceHeader = tw.div`flex w-full items-center justify-between md:(flex-col items-start gap-2) lg:(sticky top-0 z-10 bg-pureWhite) xl:(sticky top-0 z-10 bg-pureWhite)`;
const TitleAndIconWrapper = tw.div`flex items-center gap-2 min-w-[10rem]`;
const SearchedSpaceTitle = tw.span`pt-0 text-B20 text-title md:text-B16`;
const InputWrapper = tw.div`md:w-full lg:(w-full max-w-[24rem]) xl:w-96`;
const SearchResultKeyword = tw.span`text-title text-M16 md:text-M12`;
const SearchResultText = tw.span`text-M16 text-text md:text-M12`;

const SpaceList = tw.ul`flex w-full flex-col items-start gap-5 md:gap-2`;
const SpaceListItem = tw.li`flex w-full cursor-pointer flex-col items-center gap-2 xl:flex-row`;
const SpaceContentWrapper = tw.div`flex w-full justify-between`;
const ImageTitleWrapper = tw.div`flex items-center gap-2 min-w-[18rem] md:min-w-[14rem]`;
const SpaceImage = tw.img`h-8 w-8 md:(h-6 w-6)`;
const SpaceTitle = tw.span`text-M14 text-text md:text-M12`;
const SpaceParticipants = tw.span`flex items-center text-B16 text-textWeak md:text-B12`;
const SpaceDescriptionWithXl = tw.span`hidden items-center text-M16 text-textWeak xl:flex`;
const SpaceDescriptionWithMd = tw.span`flex w-full items-start text-M16 text-textWeak md:text-M12 xl:hidden`;
const LoadMoreTrigger = tw.div`h-2`;
const LoadingSpinnerWrapper = tw.div`flex h-full w-full items-center justify-center`;
const NoResultsMessage = tw.div`flex w-full items-center justify-center text-M16 text-textWeak`;
