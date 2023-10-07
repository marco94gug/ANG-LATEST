import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: UserInterface[] = [
    {
      id: 1,
      name: 'Marco',
      lastname: 'Test',
      email: 'marco.test@gmail.com',
      fiscalcode: 'TSTMRC72M22Z444S',
      province: 'Torino',
      phone: '010345002',
      age: 29,
    },
    {
      id: 2,
      name: 'Pippo',
      lastname: 'Disney',
      email: 'pippo.disney@gmail.com',
      fiscalcode: 'DSNPIP22M22Z444S',
      province: 'Napoli',
      phone: '450459494',
      age: 43,
    },
    {
      id: 3,
      name: 'Pluto',
      lastname: 'Disney',
      email: 'pluto.disney@gmail.com',
      fiscalcode: 'DSNPLT32M22Z444S',
      province: 'Roma',
      phone: '023657574',
      age: 23,
    },
    {
      id: 4,
      name: 'Paperino',
      lastname: 'Disney',
      email: 'paperino.disney@gmail.com',
      fiscalcode: 'DSNPPN22M22Z444S',
      province: 'Toulone',
      phone: '22002010',
      age: 71,
    },
  ];

  get users() {
    return this._users;
  }

  deleteUser(user: UserInterface) {
    this._users = this._users.filter((item) => item.name !== user.name);
  }
}
