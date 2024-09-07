import FileIcon from '@/assets/icons/file.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import { Input } from '@/components/common/input/input';
import { Tooltip } from '@/components/common/tooltip/tooltip';
import { JoinedSpaceList } from '@/components/space-list/joined-space-list';
import { useGetJoinedSpaceList } from '@/hooks/queries/use-get-joined-space-list';

// import { SearchedSpaceList } from '@/components/space-list/searched-space-list';

export const HomePage = () => {
  const { data: joinedSpaceList = [] } = useGetJoinedSpaceList();

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex items-center justify-between">header</div>
      <div>홈</div>
      <div className="flex w-full border-2 border-solid border-orange-100 md:flex-col">
        <div className="flex grow flex-col items-start gap-5 border-2 border-solid border-emerald-100 p-5 md:gap-3 lg:max-w-[500px] xl:max-w-[500px]">
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <HomeIcon className="size-7 md:size-6" />
                <span className="pt-1 text-B20 text-title md:text-B16">
                  참여중인 스페이스
                </span>
                {/* 전체 5개 중에 현재 참여중인 스페이스의 길이(개수) 표시 */}
                <span className="pt-1">(2/5)</span>
              </div>
              <button className="relative flex size-10 items-center justify-center rounded-md border border-line p-2 md:size-8">
                <FileIcon className="size-7" />
                <div className="absolute left-7 top-[-10px] flex size-5 items-center justify-center rounded-full border border-line bg-white p-1 md:size-4">
                  {/* 참여 대기중 목록의 길이(개수) 표시 */}
                  <span className="text-B12 text-red">1</span>
                </div>
              </button>
            </div>
            <span className="inline-block truncate text-M14 text-textWeak md:text-M10">
              스페이스를 클릭하면 해당 스페이스 홈으로 이동합니다.
            </span>
          </div>
          <JoinedSpaceList spaceData={joinedSpaceList} />
        </div>
        <div className="flex grow flex-col items-start justify-between">
          <div className="flex w-full flex-col items-start gap-5 border-2 border-solid border-red p-5 md:gap-3">
            <div className="flex w-full items-center justify-between md:flex-col md:items-start md:gap-2">
              <div className="flex min-w-40 items-center gap-2">
                <SearchIcon className="size-7 md:size-6" />
                <span className="pt-0 text-B20 text-title md:text-B16">
                  스페이스 탐색
                </span>
              </div>
              <div className="md:w-full lg:w-full lg:max-w-96 xl:w-96">
                <Input
                  borderType="outline"
                  placeholder="검색어를 입력해주세요."
                />
              </div>
            </div>
            {/* <SearchedSpaceList /> */}
          </div>
        </div>
        <div className="fixed bottom-5 right-4 flex w-full items-center justify-end gap-2">
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
        </div>
      </div>
    </div>
  );
};
