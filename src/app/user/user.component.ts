import { User } from '../class/User';
import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input('user-data') user!: User;
  @Output('deleteUser') userDeleted = new EventEmitter();
  @Output('userSelected') onSelectUser = new EventEmitter();

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }
}
