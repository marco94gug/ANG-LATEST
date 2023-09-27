import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  title = 'Users';

  constructor(public service: UserService) {}

  deleteUser(user: any) {
    this.service.deleteUser(user);
  }
}
