import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';
import { counterReducer } from './counter/counter.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
