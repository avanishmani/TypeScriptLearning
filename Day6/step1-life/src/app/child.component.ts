import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
   <div style="border : 2px dotted red; padding : 10px">
     <h2>Child Component</h2>
    <h3>Message : {{ message }}</h3>
    <h3>Power : {{ power }}</h3>
    <h4 #box> default message </h4>
   </div>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnChanges,
OnInit,
OnDestroy,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked,
DoCheck {

@Input() message: any = "default message";
@Input() power: any = 0;
@ViewChild('box') rawHTML: ElementRef = new ElementRef('box');
constructor() {
  console.log("ChildComponent's constructor was called");
}

ngOnChanges(changes: SimpleChanges): void {
 // console.log("ChildComponent's ngOnChanges was called")
  //console.log("++++++++++++++++++++++++++++++++++++++")
  if (changes['power'].currentValue > 10) {
    this.power = 10;
  }
  console.log("++++++++++++++++++++++++++++++++++++++")

}

ngOnInit() {
  // used to make api calls 
//  console.log("ChildComponent's ngOnInit was called")
}

ngAfterContentInit() {
  //console.log("ChildComponent's ngAfterContentInit was called")
}

ngAfterContentChecked() {
  //console.log("ChildComponent's ngAfterContentChecked was called")
}

ngAfterViewInit() {
  //console.log("ChildComponent's ngAfterViewInit was called");
   console.log( this.rawHTML.nativeElement.innerHTML )
}

ngAfterViewChecked() {
  //console.log("ChildComponent's ngAfterViewChecked was called")
}

ngDoCheck(): void {
  //console.log("ChildComponent's ngDoCheck was called")
 console.log(this.rawHTML.nativeElement.innerHTML)
}

ngOnDestroy() {
  // is used to unregister api calls
 // console.log("ChildComponent's ngOnDestroy was called")
}


}
