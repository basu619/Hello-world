import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{} from './home-page/home-page.component';
import{HomePageComponent}from './home-page/home-page.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
     
  },
  {
    path: 'login',
    component: HomePageComponent,
     
  },
  {
    path: '**',
    component: NopagefoundComponent,
     
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
