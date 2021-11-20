import { throws } from 'assert';
import { DefaultLogOptionsConfiguration, LogOptionsInterface } from '../constants/LogOptions';
import { DefaultLogger } from '../logger/DefaultLogger';
import { Logger } from '../logger/Logger';
/**
 * @deprecated(@since v1.0.0)
 */
export class LoggerFactory {
	private defaultOptions: LogOptionsInterface;
	private static INSTANCE: LoggerFactory;
	private constructor(customOptions?: LogOptionsInterface) {
		this.defaultOptions = DefaultLogOptionsConfiguration;

		this.init(customOptions);
	}
	private init(customOptions?: LogOptionsInterface) {
		if (customOptions == null) return;
		for (const key in customOptions) {
			if (key in this.defaultOptions) {
				this.defaultOptions[key] = customOptions[key];
			}
		}
	}
	public static getInstance(options?: LogOptionsInterface) {
		if (this.INSTANCE == null) this.INSTANCE = new LoggerFactory(options);
		return this.INSTANCE;
	}
	public getLogger(name: string) {
		const options = { ...this.defaultOptions, name: this.defaultOptions.name + '-' + name };
		return new DefaultLogger(options);
	}
}
