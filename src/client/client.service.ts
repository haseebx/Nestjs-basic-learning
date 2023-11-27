import { Injectable } from '@nestjs/common';
import { CreateClientDTO } from './dto';

Injectable();
export class ClientService {
  private store = new Map<number, CreateClientDTO>();

  addClient(client: CreateClientDTO) {
    this.store.set(client.id, client);
  }
  getClient(id: number) {
    return this.store.get(id);
  }
  getClients() {
    return Array.from(this.store.values());
  }
  updateClient(id: number, clientUpdates: CreateClientDTO) {
    const currentClient = this.store.get(id);
    const updatedClient = {
      ...currentClient,
      ...clientUpdates,
    };

    this.store.set(id, updatedClient);

    return updatedClient;
  }
  deleteClient(id: number) {
    const deleteUser = this.store.get(id);
    this.store.delete(id);
    return deleteUser;
  }
}
