import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddBookComponent } from './add-book/add-book.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookListComponent,
  },
  {
    path: 'add-book',
    pathMatch: 'full',
    component: AddBookComponent,
  },
];

@NgModule({
  declarations: [BookListComponent, AddBookComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class BookModule {}
