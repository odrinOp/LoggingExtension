export interface Logger {
	info: (message: any) => void;
	warn: (message: any) => void;
	error: (message: any) => void;
	debug: (message: any) => void;
	http: (message: any) => void;
}
