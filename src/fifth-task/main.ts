import { ClientController } from './controller/client.controller.js';
import { Client } from './entities/client.entity.js';
import { PostgresRepository } from './repositories/postgres.repository.js';

const clientController = new ClientController(new PostgresRepository());

const client1 = new Client(1, 'João', 'joao@example.com');
const client2 = new Client(2, 'Maria', 'maria@example.com');

clientController.addClient(client1);
clientController.addClient(client2);

console.log(clientController.listClients());
