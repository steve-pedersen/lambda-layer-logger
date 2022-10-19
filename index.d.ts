import log from 'lambda-log';
declare const createLogger: (metadata: any) => typeof log;
export default createLogger;
