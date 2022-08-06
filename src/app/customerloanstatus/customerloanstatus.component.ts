import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customerloanstatus',
  templateUrl: './customerloanstatus.component.html',
  styleUrls: ['./customerloanstatus.component.css']
})
export class CustomerloanstatusComponent implements OnInit {
  customers=this.sharedService.getClickEvent();
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
