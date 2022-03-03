export interface ILogger {
    log: (message: string, param?: any) => void;
    debug: (message: string, param?: any) => void;
    info: (message: string, param?: any) => void;
    trace: (message: string, param?: any) => void;
    warn: (message: string, param?: any) => void;
    error: (message: string, param?: any) => void;
}
export declare const logger: ILogger;
export declare const setLogger: (overwriteLogger: Partial<ILogger>) => void;
//# sourceMappingURL=Logger.d.ts.map