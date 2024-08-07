import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <div className="h-dvh bg-gray100 p-4">
      <Outlet />
    </div>
  );
};
