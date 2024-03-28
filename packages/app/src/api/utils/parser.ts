import { Response } from './parser.type';

export const Parser = {
  response(responseData: Response<any>) {
    return responseData.response;
  },
};
