import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <div className="h-dvh p-4 md:p-0">
      <Outlet />
    </div>
  );
};
