import { UserService } from './../user.service';
import { Component, Input } from '@angular/core';

interface User {
  name: string;
  age: number;
  email: string;
  lastname: string;
  fiscalcode: string;
  phone: string;
  province: string;
}

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input('user-data') user!: User;

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userService.deleteUser(this.user);
  }
}
