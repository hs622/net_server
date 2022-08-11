import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || ``;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ``;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@0347-pak-khi.g4pnnau.mongodb.net/net_db`;

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT
};

const MONGO = {
	url: MONGO_URL
}

const config = {
	mongo: MONGO,
	server: SERVER
}

export default config;