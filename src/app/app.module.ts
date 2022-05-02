import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerapplyloanComponent } from './customerapplyloan/customerapplyloan.component';
import { FormsModule } from '@angular/forms';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AngularfileuploaderComponent } from './angularfileuploader/angularfileuploader.component';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { CreateCustprofileComponent } from './create-custprofile/create-custprofile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerapplyloanComponent,
    CustomerlistComponent,
    AngularfileuploaderComponent,
    CustomerloanstatusComponent,
    CreateCustprofileComponent,
    ProfileListComponent,
    UpdateProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
