import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../class/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  private userCopy!: User;
  private __user!: User;

  @Input('user-selected-data') set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  @Output('saved') onSave = new EventEmitter();
  constructor(private userService: UserService) {}

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.onSave.emit(true);
  }

  resetForm(form: NgForm) {
    if (this.user.id === 0) {
      form.form.reset();
    } else {
      this.user = this.userCopy;
    }
  }
}
