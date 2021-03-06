import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./main.component";
import {HomeComponent} from "./home/home.component";
import {FeildComponent} from "./feild/feild.component";
import {OrganComponent} from "./organ/organ.component";
import {ProfileComponent} from "./profile/profile.component";
import {ChangepassComponent} from "./changepass/changepass.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {path:'dashboard', component:HomeComponent},
      {path:'feild', component: FeildComponent},
      {path: 'organ', component: OrganComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'change-password', component: ChangepassComponent},
      {path: 'user', component: UserComponent}
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
