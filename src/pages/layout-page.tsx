import { Outlet } from 'react-router-dom';
import { ModalManager } from '@/components/common/modal/modal-manager';

export const LayoutPage = () => {
  return (
    <div className="h-dvh p-4 md:p-0">
      <Outlet />
      <ModalManager />
    </div>
  );
};
