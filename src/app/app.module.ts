import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackdropComponent } from './components/UI/backdrop/backdrop.component';
import { CardComponent } from './components/UI/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    BackdropComponent,
    CardComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
