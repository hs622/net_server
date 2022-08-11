import mongoose from "mongoose"
import Logging from "../config/Logging";

const NAMESPACE = 'Database'
export default class Database {


	constructor(url: string) {
		mongoose.connect(url);
	}

	public connect = ():string => {
		return mongoose.connection.on('connected', () => {}).host;
	}


	// Logging.info(NAMESPACE, `[${req.url}],  - [${res.statusCode}])
}