import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankApp';
  option = 'Contacts';

  onTabClick(opt: string){
    this.option = opt;
    console.log("hello");
  }
}
