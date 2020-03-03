import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
// import { IAppState, rootReducer, INITIAL_STATE } from './store';
import rootReducer  from './store';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
} from 'redux';


export const store: Store<any> = createStore(
  rootReducer,
  applyMiddleware(createLogger()),
);

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<any>) {
        // ngRedux.configureStore(rootReducer, INITIAL_STATE);
         // ngRedux.configureStore(rootReducer, {},[createLogger()]);
             ngRedux.provideStore(store);

    }
 }
