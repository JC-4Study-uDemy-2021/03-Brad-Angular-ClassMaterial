import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './Components/User/user.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserComponent
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
