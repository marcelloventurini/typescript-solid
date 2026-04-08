import { Client } from '../entities/client.entity.js';
import { ClientRepository } from '../repositories/client.repository.js';

export class ClientController {
  constructor(private repository: ClientRepository) {}

  addClient(client: Client) {
    this.repository.addClient(client);
  }

  listClients() {
    return this.repository.listClients();
  }
}
