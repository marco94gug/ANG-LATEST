import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  title = 'Users';

  constructor(public service: UserService) {}

  deleteUser(user: User) {
    this.service.deleteUser(user);
  }
}
