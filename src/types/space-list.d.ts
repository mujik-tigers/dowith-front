type TJoinedSpaceData = {
  id: number;
  title: string;
  image: string | null;
  currentPeople: number;
  maxPeople: number;
};

type TSearchedSpaceListResponseData = {
  hasMore: boolean;
  lastUnixTimestamp: number;
  lastTieBreakerId: string;
  teamOutlineList: Array<
    {
      description: string;
    } & TJoinedSpaceData
  >;
};

type TSearchedSpacelistResponse = TApiResponse<TSearchedSpaceListResponseData>;
