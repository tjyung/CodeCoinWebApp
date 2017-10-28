import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);