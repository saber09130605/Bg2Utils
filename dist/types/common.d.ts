export declare enum Code {
    SUCCESS = "SUCCESS",
    NO_DOCUMENT = "NO_DOCUMENT",
    COPY_ERROR = "COPY_ERROR"
}
export declare const CodeMessage: {
    [key in Code]: string;
};
export interface Response<T> {
    code: Code;
    message?: string;
    data?: T;
}
