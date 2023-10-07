import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  @Input('user-selected-data') user!: UserInterface;
  @Output('saved') onSave = new EventEmitter();
  constructor(private userService: UserService) {}

  saveUser() {
    this.userService.updateUser(this.user);
    this.onSave.emit(true);
  }
}
