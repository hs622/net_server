import chalk from "chalk";

const getTimeStamp = (): string => {
	return new Date().toISOString();
}

// const info = (namespace: string, message: string, object?: any) => {
// 	if(object) console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
// 	else console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
// };
// const warn = (namespace: string, message: string, object?: any) => {
// 	if(object) console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
// 	else console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
// };
// const error = (namespace: string, message: string, object?: any) => {
// 	if(object) console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
// 	else console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
// };
// const debug = (namespace: string, message: string, object?: any) => {
// 	if(object) console.log(`[${getTimeStamp()}] [DEDUG] [${namespace}] ${message}`, object);
// 	else console.log(`[${getTimeStamp()}] [DEDUG] [${namespace}] ${message}`);
// };

export default class Logging {

	public static info = (namespace: string, message: string, object?: any) => {
		if(object) console.log(chalk.blue(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`), object);
		else console.log(chalk.blue(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`));
	};
	public static warn = (namespace: string, message: string, object?: any) => {
		if(object) console.log(chalk.yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`), object);
		else console.log(chalk.yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`));
	};
	public static error = (namespace: string, message: string, object?: any) => {
		if(object) console.log(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`), object);
		else console.log(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
	};
	public static debug = (namespace: string, message: string, object?: any) => {
		if(object) console.log(chalk.cyan(`[${getTimeStamp()}] [DEDUG] [${namespace}] ${message}`), object);
		else console.log(chalk.cyan(`[${getTimeStamp()}] [DEDUG] [${namespace}] ${message}`));
	};
}