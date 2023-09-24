import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  title = 'Users';
  users = [
    {
      name: 'Marco',
      lastname: 'Test',
      email: 'marco.test@gmail.com',
      fiscalcode: 'TSTMRC72M22Z444S',
      province: 'Torino',
      phone: '010345002',
      age: 29,
    },
    {
      name: 'Pippo',
      lastname: 'Disney',
      email: 'pippo.disney@gmail.com',
      fiscalcode: 'DSNPIP22M22Z444S',
      province: 'Napoli',
      phone: '450459494',
      age: 43,
    },
    {
      name: 'Pluto',
      lastname: 'Disney',
      email: 'pluto.disney@gmail.com',
      fiscalcode: 'DSNPLT32M22Z444S',
      province: 'Roma',
      phone: '023657574',
      age: 23,
    },
    {
      name: 'Paperino',
      lastname: 'Disney',
      email: 'paperino.disney@gmail.com',
      fiscalcode: 'DSNPPN22M22Z444S',
      province: 'Toulone',
      phone: '22002010',
      age: 71,
    },
  ];
}