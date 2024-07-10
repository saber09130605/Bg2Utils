export enum BG2Code {
    SUCCESS="SUCCESS",
    NO_DOCUMENT="NO_DOCUMENT",
    COPY_ERROR="COPY_ERROR"
  }
  export const BG2CodeMessage : { [key in BG2Code]: string }= {
    [BG2Code.SUCCESS]: "成功",
    [BG2Code.NO_DOCUMENT]:"没有document",
    [BG2Code.COPY_ERROR]:"复制失败"
  }
  export interface BG2Response<T> {
    code: BG2Code;
    message?: string;
    data?: T;
  }