type TJoinedSpaceData = {
  id: number;
  title: string;
  image: string | null;
  currentPeople: number;
  maxPeople: number;
};

type TSearchedSpaceData = {
  description: string;
} & TJoinedSpaceData;
