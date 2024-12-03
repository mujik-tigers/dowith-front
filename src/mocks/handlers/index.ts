import { http, delay } from 'msw';
import { getJoinedSpacesHandler } from '@/mocks/handlers/spaces/get-joined-spaces-handler';
import { getWaitingSpacesHandler } from '@/mocks/handlers/spaces/get-waiting-spaces-handler';

export const handlers = [
  http.all('*', async () => {
    await delay(100);
    return;
  }),
  getJoinedSpacesHandler,
  getWaitingSpacesHandler,
];
