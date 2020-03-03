import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { INCREMENT } from './actions';
import {Store} from 'redux';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularedux-todo';
  counter : number;

  constructor(private ngRedux: NgRedux<any>){
    this.ngRedux.select(t=>{
      debugger
    })
        console.log('i am',this.ngRedux.select('todo').subscribe((a:any)=>{
          this.counter = a.counter;
        }))
  }

  increment=()=>{
  	this.ngRedux.dispatch({type:INCREMENT})
  }
}
