import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularedux-todo';
  mycounter = 0;

  @select() counter;
  @select() todos;

  constructor(private ngRedux: NgRedux){
  	console.log('counter',this.counter,this.todos)
  }

  increment=()=>{
  	this.ngRedux.dispatch({type:'increment',counter:this.mycounter})
  }
}
