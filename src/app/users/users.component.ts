import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  public users: any[] = [];

  constructor(public service: UserService) {}

  ngOnInit() {
    this.users = this.service.users;
  }

  onDeleteUser(user: any) {
    this.service.deleteUser(user);
  }
}
