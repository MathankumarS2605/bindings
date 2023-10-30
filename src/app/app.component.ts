import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindings';
  themeName:string="red";
  size:number=100;
  enableDisable:boolean=false;
  firstName:string="Mathan";
  lastName:string="Kumar";
  reset:boolean=false;
  


}
