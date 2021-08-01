import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public account = {
    password: null
  };
  public barLabel: string = "Password strength";
  hide:boolean = true;

  constructor() { }

  ngOnInit() {

  }
}
