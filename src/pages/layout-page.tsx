import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <div className="h-dvh p-4">
      <Outlet />
    </div>
  );
};
