import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';

export const JoinedSpaceList: React.FC<{ spaceData: TJoinedSpaceData[] }> = ({
  spaceData,
}) => {
  return (
    <ul className="flex w-full flex-col items-start gap-4 md:gap-2">
      {spaceData.map((space) => (
        <li
          className="flex h-8 w-full cursor-pointer items-center justify-between"
          key={space.id}
        >
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <img
                src={space.image ? space.image : DefulatSpaceProfile}
                alt="space profile"
                className="size-8 md:size-6"
              />
              <span className={`text-M14 text-text md:text-M12`}>
                {space.title}
              </span>
            </div>
            <span className="text-B16 text-textWeak md:text-B12">
              {space.currentPeople} / {space.maxPeople}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
