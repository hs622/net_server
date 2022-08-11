import mongoose from "mongoose";
import Logging from "../config/Logging";

const NAMESPACE = "Database";
export default class Database {
  private dbURL: string;

  constructor(url: string) {
    this.dbURL = url;
  }

  public connect = async (): Promise<boolean> => {
    try {
      await mongoose.connect(this.dbURL);
      Logging.info(NAMESPACE, `${mongoose.connection.host}`);
      return true;
    } catch (err: any) {
      Logging.error(NAMESPACE, `${err.message}`);
      throw new Error(err);
    }
  };
}
