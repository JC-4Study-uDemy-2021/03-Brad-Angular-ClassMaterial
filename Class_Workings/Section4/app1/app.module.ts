import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './Components/Users/users.component';

@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
