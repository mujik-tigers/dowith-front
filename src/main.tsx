import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { worker } from './mocks/browser';

const enableMocking = async () => {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  return worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
