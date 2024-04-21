import "reflect-metadata"
import { DataSource } from "typeorm"
import { App } from "./entities/App";
import { Contact } from "./entities/Contact";
import { Leaveapprovals } from "./entities/Leaveapprovals";
import { Organization } from "./entities/Organization";
import { Plazeradmin } from "./entities/Plazeradmin";
import { Plazeruser } from "./entities/Plazeruser";
import { RequestLeave } from "./entities/RequestLeave";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "Levia",
    synchronize: true,
    logging: true,
    entities: [App,Contact,Leaveapprovals,Organization,Plazeradmin,Plazeruser,RequestLeave],
    migrations: [],
    subscribers: [],
})
