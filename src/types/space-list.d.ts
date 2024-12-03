type TJoinedSpaceData = {
  id: number;
  title: string;
  image: string | null;
  currentPeople: number;
  maxPeople: number;
};

type TJoinedSpaceResponseData = {
  data: {
    teamOutlines: Array<TJoinedSpaceData>;
  };
};

type TJoinedSpaceResponseData = {
  data: {
    teamOutlines: Array<TJoinedSpaceData>;
  };
};

type TSearchedSpaceData = {
  description: string;
} & TJoinedSpaceData;

type TSearchedSpaceListResponseData = {
  hasMore: boolean;
  lastUnixTimestamp: number;
  lastTieBreakerId: number;
  teamDocumentOutlines: Array<TSearchedSpaceData>;
};

type TSearchedSpacelistResponse = TApiResponse<TSearchedSpaceListResponseData>;

type TRandomSpaceData = {
  description: string;
} & TJoinedSpaceData;

type TRandomSpaceResponseData = {
  data: {
    randomTeamOutlines: Array<TRandomSpaceData>;
  };
};

type TWaitingSpaceData = {
  requestId: number;
  title: string;
  image: string | null;
};

type TWaitingSpaceResponseData = {
  data: {
    pendingRequestTeamInfos: Array<TWaitingSpaceData>;
  };
};
