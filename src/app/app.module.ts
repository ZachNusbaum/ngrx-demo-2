import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer'
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    StoreModule.forRoot({ message: simpleReducer, post: postReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
