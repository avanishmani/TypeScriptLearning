import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h1>{{quantity}} from child</h1>
      <h2>Child Component Data </h2>
      <input #ti type="text">
      <button (click)="sendToParent(ti.value)">Send Message !</button>
      <ng-content select="button"></ng-content>
      <ng-content></ng-content>
    </div>
  `,
})
export class ChildComp {
  title = 'Child Component';
  @Input() quantity: number = 0;
  @Output() childEvent:EventEmitter<any>=new EventEmitter();
  sendToParent(msg:any){
    this.childEvent.emit(msg);
  }
}
