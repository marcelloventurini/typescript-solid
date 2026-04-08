import { Client } from '../entities/client.entity.js';

export interface ClientRepository {
  addClient(client: Client): void;
  listClients(): Client[] | Promise<Client[]>;
}
