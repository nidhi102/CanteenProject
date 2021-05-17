import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search/user-search.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'user',component:UserComponent,outlet:'data'},
  {path:'user-search',component:UserSearchComponent,outlet:'data'},
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employ-search',component:EmploySearchComponent,outlet:'data'},
  {path:'customer',component:CustomerComponent,outlet:'data'},
  {path:'customer-search',component:CustomerSearchComponent,outlet:'data'},

  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploySearchComponent,
    UserSearchComponent,
    CustomerSearchComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
