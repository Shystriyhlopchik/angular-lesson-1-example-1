import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
