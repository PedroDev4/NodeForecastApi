import './utils/module-alias';
import { Server } from '@overnightjs/core';
// import bodyParser from "body-parser";
import { ForecastController } from './controllers/forecastController';
import express from 'express';

class SetupServer extends Server {
  constructor(private port = 3000) {
    super(); // Criando Server
  }

  public initialize(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    // Middlewares da aplicação
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]); // Metodo 'addControllers' da classe Server do OvernightJS
  }

  public getApp(): Express.Application {
    return this.app; // Retorno da App vem da classe Server do Overnightjs
  }
}

export { SetupServer };
