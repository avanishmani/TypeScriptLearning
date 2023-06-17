import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    
      <h1>
        Welcome to {{title}}!
      </h1>
      
    <h2>*ngFor Directives</h2>
    <ul>
      <p>Tripathi Brother's List !</p>
      <li *ngFor="let hero of avg; index as id">{{id+1}}~{{hero}}</li>
    </ul>
    <ng-template ngFor let-hero [ngForOf]="avg">
      {{hero}} 
    </ng-template>
    <hr>
    <h2>*ngSwitch Directives</h2>
    <input #rng type="range" min="0" max="5" [value]="rating" (input)="rating=rng.value"/>  {{rating}} 
    <div [ngSwitch]="rating" >
      <h2 *ngSwitchCase="1" class="rat">*</h2>
      <h2 *ngSwitchCase="2" class="rat">**</h2>
      <h2 *ngSwitchCase="3" class="rat">***</h2>
      <h2 *ngSwitchCase="4" class="rat">****</h2>
      <h2 *ngSwitchCase="5" class="rat">*****</h2>
      <h2 *ngSwitchDefault="" class="rat">Not Rated till yet !</h2>
    </div>
    <div>*ngNonBindable Directive</div>
    <h3 ngNonBindable> {{hello Masai}}</h3>
  `,
  styles: [`
  .rat{
    margin:0px;
    font-family:arial;
    color: goldenrod;
  }
  `]
})
export class AppComponent {
  title = 'step1-directives';
  rating="3";
  avg=["Kuldeep","Abhishek","Avanish","Ashish","Satyam","Shubham","Priyesh","Radikesh"];
}
