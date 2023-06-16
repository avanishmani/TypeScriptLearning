import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
    <label for="terms"> Show Terms and Condition</label>
    <input id="terms" type="checkbox" (change)="show=!show">
    <fieldset *ngIf="show">
      <legend>
        Terms and Condition !
      </legend>
      <p>1st Condition !</p>
      <p>2nd Condition !</p>
      <p>3rd Condition !</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint minima fugit, eveniet deleniti maxime magni expedita doloremque id, dolorum omnis aliquid sed, quo repellendus non qui unde quod sequi!</p>
    </fieldset>
    
    <ng-template [ngIf]=!show>Please Click the checkbox First</ng-template>
    <hr>
    <h2>Family Chart Of Tripathi Brother's</h2>
    <ol>
      <li *ngFor="let n of avg">{{n}}</li>
    </ol>
  </div>
  `,
})
export class AppComponent {
  title = 'directive';
  show=false;
  avg=["Kuldeep","Abhishek","Avanish","Ashish","Satyam","Shubham","Priyesh","Radikesh"];
}
