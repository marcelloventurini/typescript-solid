import { Client } from '../entities/client.entity.js';
import { ClientRepository } from './client.repository.js';

export class InMemoryRepository implements ClientRepository {
  private db: Client[];

  constructor() {
    this.db = [];
  }

  addClient(client: Client): void {
    this.db.push(client);
  }

  listClients(): Client[] {
    return this.db;
  }
}
