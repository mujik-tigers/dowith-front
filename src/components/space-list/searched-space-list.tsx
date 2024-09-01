import DefulatSpaceProfile from '@/assets/icons/default-space-profile.svg';

export const SearchedSpaceList: React.FC<{
  spaceData: TSearchedSpaceData[];
}> = ({ spaceData }) => {
  return (
    <ul className="flex w-full flex-col items-start gap-4 md:gap-2">
      {spaceData.map((space) => (
        <li
          className={`flex w-full items-center md:flex-col lg:flex-col lg:gap-2`}
          key={space.id}
        >
          <div className="flex w-full justify-between">
            <div className="flex min-w-72 items-center gap-2 md:min-w-56">
              <img
                src={space.image ? space.image : DefulatSpaceProfile}
                alt="space profile"
                className="size-8 md:size-6"
              />
              <span className={`text-M14 text-text md:text-M12`}>
                {space.title}
              </span>
            </div>
            {/* 1280px 이상에서 화면에서 나타나는 요소 */}
            <span className="text-M16 text-textWeak md:hidden md:text-M12 lg:hidden">
              {space.description}
            </span>
            <span className="text-B16 text-textWeak md:text-B12">
              {space.currentPeople} / {space.maxPeople}
            </span>
          </div>
          {/* 1280px 미만에서 화면에서 나타나는 요소 */}
          <span className="hidden w-full items-start text-M16 text-textWeak md:flex md:text-M12 lg:flex">
            {space.description}
          </span>
        </li>
      ))}
    </ul>
  );
};
