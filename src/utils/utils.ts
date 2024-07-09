import { Code,Response,CodeMessage } from '../types/common';

export function buildResponse<T>(code:Code,data?:T):Response<T> {
  return {
    code,
    message: CodeMessage[code],
    data
  }
}