import { API_URL } from '@/constants/api';
import { createError } from '@/mocks/db/Error';
import { Spaces, WaitingSpaces } from '@/mocks/db/Spaces';
import { getRandomBoolean } from '@/mocks/utils/random';
import { http, HttpResponse } from 'msw';

export const getWaitingSpacesHandler = http.get(
  `${API_URL}/members/waiting`,
  () => {
    const userWaitingSpaces = Spaces.filter((space) =>
      WaitingSpaces.some((waitingSpaceId) => waitingSpaceId === space.id)
    ).map(({ id, title, image }) => ({
      id,
      title,
      image,
    }));

    if (getRandomBoolean()) {
      return HttpResponse.json(createError('알 수 없는 에러가 발생했습니다'), {
        status: 500,
      });
    }

    return HttpResponse.json(
      {
        data: {
          teamOutlines: userWaitingSpaces,
        },
      },
      { status: 200 }
    );
  }
);
