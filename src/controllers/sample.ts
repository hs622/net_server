import { Request, Response, NextFunction } from "express";
import Logging from "../config/Logging";

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
	Logging.info(NAMESPACE, `Sample health check route called.`);

	return res.status(200).json({
		message: 'pong'
	});
};

export default { sampleHealthCheck };