import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';

export const SpaceDefaultList: React.FC<{
  spaceData: {
    id: number;
    title: string;
    image: string | null;
  }[];
}> = ({ spaceData }) => {
  return (
    <ul className="flex w-full flex-col items-start gap-4 md:gap-2">
      {spaceData.map((space) => (
        <li
          className="flex h-8 w-full cursor-pointer items-center justify-between"
          key={space.id}
        >
          <div className="flex w-full justify-between">
            <div className="flex min-w-72 items-center gap-2">
              <img
                src={space.image ? space.image : DefulatSpaceProfile}
                alt="space profile"
                className="size-8 md:size-6"
              />
              <span className={`text-M14 text-text md:text-M12`}>
                {space.title}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
