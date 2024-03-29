import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PolicemenComponent } from './components/policemen/policemen.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';
// import {UsersComponent} from './components/users/users.component';
// import {TimelineComponent} from './components/timeline/timeline.component';
// import {ProfileComponent} from './components/profile/profile.component';
// import {FollowingComponent} from './components/following/following.component';
// import {FollowedComponent} from './components/followed/followed.component';

// import { UserGuard } from './services/user.guard';  // para proteger las url

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    // {path: '', component:TimelineComponent, canActivate:[UserGuard]},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'policemen',component:PolicemenComponent},
    {path: 'statistics',component:StatisticsComponent},
    // {path: 'register', component: RegisterComponent},
    // {path: 'mis-datos', component: UserEditComponent, canActivate:[UserGuard]},
    // {path: 'gente/:page', component: UsersComponent, canActivate:[UserGuard]},
    // {path: 'gente', component: UsersComponent, canActivate:[UserGuard]},
    // {path: 'timeline',component:TimelineComponent, canActivate:[UserGuard]},
    // {path: 'perfil/:id',component:ProfileComponent, canActivate:[UserGuard]},
    // {path: 'siguiendo/:id/:page',component:FollowingComponent, canActivate:[UserGuard]},
    // {path: 'seguidores/:id/:page',component:FollowedComponent, canActivate:[UserGuard]},
    
    {path:'**', component: HomeComponent}, //cuando escribimos algo q no existe(error 404)
  
];

export const appRoutingProviders:any[] = []; //
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);