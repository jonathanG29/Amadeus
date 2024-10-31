import { Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/perfil', pathMatch: 'full' },
  // Otras rutas según sea necesario
];
