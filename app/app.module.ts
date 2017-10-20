import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing Components
import { AppComponent }  from './components/app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
