import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackdropComponent } from './components/UI/backdrop/backdrop.component';
import { CardComponent } from './components/UI/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { TodosService } from './services/todos.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BackdropComponent,
    CardComponent,
    HeaderComponent,
    FormComponent,
    TodoListComponent,
    TodoItemComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [FormService, TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
