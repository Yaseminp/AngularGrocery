import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GroceryComponent } from './grocery/grocery.component';


@NgModule({
  declarations: [
    GroceryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
