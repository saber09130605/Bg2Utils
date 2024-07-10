import { BG2Code,BG2Response,BG2CodeMessage } from '../types/common';

export function buildResponse<T>(code:BG2Code,data?:T):BG2Response<T> {
  return {
    code,
    message: BG2CodeMessage[code],
    data
  }
}