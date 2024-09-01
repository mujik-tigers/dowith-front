// handlers/getSpacesHandler.js
import { API_URL } from '@/constants/api';
import { createError } from '@/mocks/db/Error';
import { Spaces, JoinedSpaces } from '@/mocks/db/Spaces';
import { getRandomBoolean } from '@/mocks/utils/random';
import { http, HttpResponse } from 'msw';

export const getJoinedSpacesHandler = http.get(
  `${API_URL}/members/teams`,
  () => {
    const userJoinedSpaces = Spaces.filter((space) =>
      JoinedSpaces.some((joinedSpaceId) => joinedSpaceId === space.id)
    );

    if (getRandomBoolean()) {
      return HttpResponse.json(createError('알 수 없는 에러가 발생했습니다'), {
        status: 500,
      });
    }

    return HttpResponse.json(userJoinedSpaces, { status: 200 });
  }
);
