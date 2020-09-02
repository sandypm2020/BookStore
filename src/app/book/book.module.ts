import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [BookListComponent, AddBookComponent],
  imports: [CommonModule, SharedModule],
})
export class BookModule {}
