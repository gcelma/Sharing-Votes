import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppGridComponent } from '../components/layout/app-grid/app-grid.component';
import { AppWelcomeComponent } from '../components/app-welcome/app-welcome.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { EntityRegisterComponent } from '../componentes/entity-register/entity-register.component';


const app_Routes: Routes = [
  { path: 'home', component: AppWelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'entity-register', component: EntityRegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
