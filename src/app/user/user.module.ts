import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: 'add-user',
    pathMatch: 'full',
    component: AddUserComponent,
  },
  {
    path: 'edit-user',
    // path: ':id',
    pathMatch: 'full',
    component: UserEditComponent,
  },
];

@NgModule({
  declarations: [UserListComponent, AddUserComponent, UserEditComponent],
  imports: [CommonModule],
})
export class UserModule {}
