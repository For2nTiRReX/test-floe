import { createApi } from 'unsplash-js';

export const {
  REACT_APP_API_ACCESS_KEY
} = process.env;

const unsplash = createApi({
  accessKey: REACT_APP_API_ACCESS_KEY,
});

class UnsplashService {
  searchRequest = async (params = {
    query: '',
    page: 1,
    perPage: 12,
  }) => {
    try {
      const response = await unsplash.search.getUsers(params);

      return response;
    } catch (error) {
      // TODO: Provide error logic
    }
  };
}

export default new UnsplashService();
