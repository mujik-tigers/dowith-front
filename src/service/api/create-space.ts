import { privateApi } from '../axios';

export const createSpace = async ({
  spaceData,
}: {
  spaceData: FormData;
}): Promise<TCreateSpaceResponseData> => {
  try {
    const response = await privateApi.post<TCreateSpaceResponse>(
      '/teams',
      spaceData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.data;
  } catch (error) {
    throw new Error('스페이스 생성에 실패하였습니다.');
  }
};
