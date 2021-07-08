import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() navClickOption=new EventEmitter<string>();
  option= '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onLogin(){
    this.option="Login";
    this.navClickOption.emit(this.option);
  }
  onNoticeClick(){
    this.option="Notice";
    this.navClickOption.emit(this.option);
  }
  onContactClick(){
    this.option="Contacts";
    this.navClickOption.emit(this.option);
  }

}
