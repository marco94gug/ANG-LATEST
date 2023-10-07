import { Component } from '@angular/core';
import { User } from './class/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-latest';
  showForm = false;
  userSelected: User = new User();

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }

  saved(value: any) {
    this.showForm = !value;
  }
}
