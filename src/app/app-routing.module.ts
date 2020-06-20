import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component'
import {PropertyComponent} from './components/property/property.component'
 
const routes: Routes = [
  { path: '', redirectTo: 'Admin', pathMatch: 'full'},
  { path: 'Admin', component: AdminComponent },
  { path: 'ListProperty', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
