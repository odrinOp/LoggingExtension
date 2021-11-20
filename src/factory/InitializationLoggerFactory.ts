import { Logger, LogOptions } from '..';
import { DefaultLogOptionsConfiguration } from '../constants/LogOptions';
import { DefaultLogger } from '../logger/DefaultLogger';

export class InititializationLoggerFactory {
	private static CONTEXT: LogOptions = DefaultLogOptionsConfiguration;
	public static setContext(context: LogOptions): void {
		if (context == null) return;
		for (const key in context) {
			if (key in this.CONTEXT) {
				this.CONTEXT[key] = context[key];
			}
		}
	}
	public static getLogger(name: string): Logger {
		return new DefaultLogger({ ...this.CONTEXT, name: this.CONTEXT + '-' + name });
	}
}
