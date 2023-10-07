import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  title = 'Users';

  @Output() updateUser = new EventEmitter<UserInterface>();

  constructor(public service: UserService) {}

  deleteUser(user: UserInterface) {
    this.service.deleteUser(user);
  }

  selectUser(user: UserInterface) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
