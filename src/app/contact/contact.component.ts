import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contacts=[{type:"Call Us",value:"+91 7007396475",iconClass:"fa fa-phone"},{type:"Office",value:"Chitrakut Soc,Dharavi,Mumbai",iconClass:"fa fa-map-marker"},{type:"Office",value:"Fca-3650, Sgm Nagar, Delhi",iconClass:"fa fa-map-marker"},{type:"Email Us",value:"DemoBank@noobf.com",iconClass:"fa fa-envelope"}]

  ngOnInit(): void {
  }

}
