export interface LogOptionsInterface {
	name: string;
	colors?: boolean;
	level?: number;

	disableName?: true;
	disableTimestamp?: true;
	disableLogLevel?: true;
}

export const DefaultLogOptionsConfiguration: LogOptionsInterface = {
	name: 'Logger',
	colors: true,
	level: 10,
};
