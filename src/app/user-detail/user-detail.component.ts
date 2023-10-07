import { Component, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  @Input('user-selected-data') user!: UserInterface;

  constructor(private userService: UserService) {}

  saveUser() {
    this.userService.updateUser(this.user);
  }
}
