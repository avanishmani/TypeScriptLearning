import { Component ,OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <h1>App Componenent</h1>
    <hr>
    <input #ti type="text" (change)="title = ti.value">
    <input type="checkbox" (change)="show = !show">
    <input #rng type="number" (input)="power = rng.value">
    <br>
    <hr>
    <app-child *ngIf="show" [power]="power" [message]="title"></app-child>
  </div>
    
  `,
  styles: []
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'step1-life'; 
  power: any = 1;
  show = true;
  constructor() {
    console.log("AppComponent's constructor was called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent's ngOnChanges was called")
  }

  ngOnInit() {
    console.log("AppComponent's ngOnInit was called")
  }

  ngOnDestroy() {
    console.log("AppComponent's ngOnDestroy was called")
  }

}
