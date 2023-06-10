import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { GuardiasGuard } from './guards/guardias.guard';

const routes: Routes = [
  {path: 'home', component: PrimerComponenteComponent},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'segundo', component: SegundoComponenteComponent, canActivate: [GuardiasGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
