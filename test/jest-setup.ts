import { SetupServer } from "@src/server";
import supertest from "supertest";

// Antes de todos os tests, Inicializar o meu server
beforeAll(async () => {

    const server = new SetupServer();
    await server.initialize();
    global.testRequest = supertest(server.getApp());

});