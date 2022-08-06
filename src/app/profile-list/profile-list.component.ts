import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

import {Profile} from '../profile'
import { ProfileService } from '../profile.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles:any;
  customers=this.sharedService.getClickEvent();
  constructor(private profileService:CustomerService,
    private router:Router,private sharedService:SharedService) { }

  ngOnInit(): void {
    
  }
 
 
}