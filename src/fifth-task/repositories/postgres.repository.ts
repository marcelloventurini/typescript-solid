import { Client } from '../entities/client.entity.js';
import { ClientRepository } from './client.repository.js';

export class PostgresRepository implements ClientRepository {
  private db: Record<number, Client>;

  constructor() {
    this.db = {};
  }

  addClient(client: Client): void {
    return this.add(client);
  }

  listClients(): Client[] | Promise<Client[]> {
    return this.list();
  }

  private add(client: Client) {
    this.db[client.id] = client;
  }

  private list() {
    const clients: Client[] = [];

    for (const key in this.db) {
      if (Object.prototype.hasOwnProperty.call(this.db, key)) {
        clients.push(this.db[key]);
      }
    }

    return clients;
  }
}
