export enum Code {
    SUCCESS="SUCCESS",
    NO_DOCUMENT="NO_DOCUMENT",
    COPY_ERROR="COPY_ERROR"
  }
  export const CodeMessage : { [key in Code]: string }= {
    [Code.SUCCESS]: "成功",
    [Code.NO_DOCUMENT]:"没有document",
    [Code.COPY_ERROR]:"复制失败"
  }
  export interface Response<T> {
    code: Code;
    message?: string;
    data?: T;
  }