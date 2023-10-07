import { Component, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  @Input('user-selected-data') user!: UserInterface;

  saveUser() {
    console.log(this.user);
  }
}
