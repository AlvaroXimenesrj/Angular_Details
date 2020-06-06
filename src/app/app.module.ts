import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Components
import { routing } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule,
            SharedModule,
            routing],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
