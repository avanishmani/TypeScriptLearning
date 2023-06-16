import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
    <h1>Inside the Parent Class</h1>
    
    <app-child [quantity]="count"  (childEvent)="RecievedFromChld($event)">
      <h2>{{msg}} is the Message recieved by child class</h2>
      <h3>heading 3</h3>
      <button (click)="myFunction()"> Click Me</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ratione quibusdam illo, vel omnis veritatis, hic sunt laudantium et ab magnam saepe error repellat odio molestias aut reiciendis quo est?</p>
      <!-- <div>{{title}}</div> -->
      <div>{{title}}</div>
      <div>{{count}}</div>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
        <li>List 5</li>
      </ul>
    </app-child>
    <button (click)="count=count+1"> Increase Count  {{count}}</button>
  </div>
  `,
})
export class AppComponent {
  title = 'steps';
  count=0;
  myFunction() {
    alert('Button clicked!');
  }
  msg:any="";
  RecievedFromChld(msg:any){
this.msg=msg;
  }
} 
