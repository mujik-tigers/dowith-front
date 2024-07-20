import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <div className="h-full p-4">
      <Outlet />
    </div>
  );
};
