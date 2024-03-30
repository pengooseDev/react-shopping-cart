import { apiInstance } from '../instance';
import { ENDPOINTS } from './list.constant';
import { Parser } from '../utils/parser';

export const list = {
  async getProducts() {
    const { data } = await apiInstance.get(ENDPOINTS.GET_PRODUCTS);

    return Parser.response(data);
  },
};
