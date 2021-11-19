import { LogColors } from './constants/LogColors';
import { DefaultLogger } from './logger/DefaultLogger';

const logger = new DefaultLogger({ name: 'HelloWorld', level: 10 });

logger.debug('Hello');
logger.info('Hello');
logger.http('Hello');
logger.warn('Hello');
logger.error('Hello');
