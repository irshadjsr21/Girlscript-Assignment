import http from './http';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const getTeam = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}/users`);
      if (res && res.data) {
        resolve(res.data);
      } else {
        throw new Error('No data');
      }
    } catch (error) {
      reject(error);
    }
  });
};
