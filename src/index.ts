import log from 'lambda-log';

const createLogger = (metadata: any) => {
  log.options.meta = metadata;
  
  return log;
};

export default createLogger;