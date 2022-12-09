import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './component/accueil/accueil.component';
import { PanierComponent } from './component/panier/panier.component';
import { ProfilComponent } from './component/profil/profil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Panier', component: PanierComponent },
  { path: 'Profil', component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
