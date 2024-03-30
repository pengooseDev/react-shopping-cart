import axios from 'axios';

const INSTANCE_TYPE = {
  API: 'api',
  MOCK: 'mock',
} as const;

type InstanceType = (typeof INSTANCE_TYPE)[keyof typeof INSTANCE_TYPE];

export class Axios {
  public static MOCK_BASE_URL = 'http://localhost:5173';

  private static BASE_URL = 'http://localhost:3003';

  public static getInstance(type: InstanceType) {
    switch (type) {
      case INSTANCE_TYPE.MOCK: {
        return axios.create({ baseURL: Axios.MOCK_BASE_URL });
      }

      default: {
        return axios.create({ baseURL: Axios.BASE_URL });
      }
    }
  }
}

export const apiInstance = Axios.getInstance(INSTANCE_TYPE.MOCK);
