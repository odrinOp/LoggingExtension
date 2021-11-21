import { Logger, LogOptions } from '..';
import { DefaultLogOptionsConfiguration } from '../constants/LogOptions';
import { mergeLogOptions } from '../functions/mergeObjects';
import { DefaultLogger } from '../logger/DefaultLogger';
export class InititializationLoggerFactory {
	private static CONTEXT: LogOptions = DefaultLogOptionsConfiguration;
	public static setContext(context: LogOptions): void {
		if (context == null) return;
		this.CONTEXT = mergeLogOptions(this.CONTEXT, context);
	}
	public static getLogger(name: string, options?: LogOptions): Logger {
		let customContext = options == null ? this.CONTEXT : mergeLogOptions(this.CONTEXT, options);
		return new DefaultLogger({ ...customContext, name: customContext.name + '-' + name });
	}
}
