import axios from 'axios';

export class Axios {
  private static BASE_URL = 'http://localhost:5173';

  public static getInstance(baseURL = this.BASE_URL) {
    return axios.create({ baseURL });
  }
}

export const apiInstance = {
  mock: Axios.getInstance(),
};
