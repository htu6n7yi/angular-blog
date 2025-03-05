
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: PagesComponent },
  // Adicione outras rotas conforme necessário
];
