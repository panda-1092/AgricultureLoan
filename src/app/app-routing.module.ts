import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularfileuploaderComponent } from './angularfileuploader/angularfileuploader.component';
import { CreateCustprofileComponent } from './create-custprofile/create-custprofile.component';
import {CustomerapplyloanComponent} from './customerapplyloan/customerapplyloan.component'
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
   {path : 'addLoan', component : CustomerapplyloanComponent},
   {path : 'viewLoan',component : CustomerloanstatusComponent},
   {path : 'Profile',component :  ProfileListComponent},
  //  {path : 'getProfile',component : CustomerprofileComponent},
   {path : 'addLoan/addDocuments', component : AngularfileuploaderComponent},
   {path:'',redirectTo:'addLoan',pathMatch:'full'},
   {path:'update-profile/:loanid',component:UpdateProfileComponent},
   {path:'create-custprofile',component: CreateCustprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
