import "./utils/module-alias";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { ForecastController } from "./controllers/forecastController";
import { Application } from "express";

class SetupServer extends Server {

    constructor(private port = 3000) {
        super();
    }

    public initialize(): void {
        this.setupExpress();
        this.setupControllers();

        const user = {
            name: 'Pedro Martins',
            age: 18,
            occupation: 'Software Developer',
        }

        if (user.occupation === 'Software Engineer') {
            console.log('You are the best!');
        } else {
            console.log("Keep Working... You're almost there")
        }
    }

    private setupExpress(): void {
        // Middlewares da aplicação
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const forecastController = new ForecastController();
        this.addControllers([forecastController]);
    }

    public getApp(): Application {
        return this.app;
    }

}

export { SetupServer };