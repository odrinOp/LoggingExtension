import { DefaultLogOptionsConfiguration, LogOptionsInterface } from '../constants/LogOptions';
import { LogNames } from '../constants/LogNames';
import { Logger } from './Logger';
import chalk, { Chalk } from 'chalk';
import { LogColors } from '../constants/LogColors';
import { LogLevels } from '../constants/LogLevels';

/**
 * {@link Logger} Implementation
 * {@todo verify log level}
 */
export class DefaultLogger implements Logger {
	private options: LogOptionsInterface;

	constructor(options?: LogOptionsInterface) {
		this.initilize(options);
	}
	initilize(options?: LogOptionsInterface) {
		this.options = DefaultLogOptionsConfiguration;
		this.mergeOptions(options);
	}

	private mergeOptions(options?: LogOptionsInterface) {
		if (options == null) return;
		for (const key in options) {
			if (key != null) this.options[key] = options[key];
		}
	}

	private createMessageInfo(level: string, message: string): LogMessageInfo {
		return {
			name: this.options.name,
			timestamp: this.getTimestampFormat(),
			level: level.toUpperCase(),
			message,
			chalk: this.options.colors === true ? chalk.hex(LogColors[level]) : null,
		};
	}

	private log(info: LogMessageInfo) {
		if (info.chalk != null) {
			this.printOnConsole(
				`${info.chalk.inverse(info.level)}${info.chalk(`\t${info.timestamp}\t[${info.name}]:${info.message}`)}`
			);
		} else {
			this.printOnConsole(`${info.level}\t${info.timestamp}\t${info.timestamp}\t[${info.name}]:${info.message}`);
		}
	}
	private isLevelNotAllowed(level: string): boolean {
		return LogLevels[level] > this.options.level;
	}

	private printOnConsole(message: any) {
		console.log(message);
	}

	getTimestampFormat(): string {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const seconds = date.getSeconds();

		return `${year}${month}${day}|${hour}${minute}${seconds}`;
	}

	info(message: any): void {
		if (this.isLevelNotAllowed(LogNames.info)) return;
		const info = this.createMessageInfo(LogNames.info, message);
		this.log(info);
	}
	warn(message: any): void {
		if (this.isLevelNotAllowed(LogNames.warn)) return;
		const info = this.createMessageInfo(LogNames.warn, message);
		this.log(info);
	}
	error(message: any): void {
		if (this.isLevelNotAllowed(LogNames.error)) return;
		const info = this.createMessageInfo(LogNames.error, message);
		this.log(info);
	}
	debug(message: any): void {
		if (this.isLevelNotAllowed(LogNames.debug)) return;
		const info = this.createMessageInfo(LogNames.debug, message);
		this.log(info);
	}
	http(message: any): void {
		if (this.isLevelNotAllowed(LogNames.http)) return;
		const info = this.createMessageInfo(LogNames.http, message);
		this.log(info);
	}
}

interface LogMessageInfo {
	name?: string;
	timestamp?: string;
	level?: string;
	message?: string;
	chalk?: Chalk;
}
