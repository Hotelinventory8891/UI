import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component'
 
const routes: Routes = [
  { path: '', redirectTo: 'Admin', pathMatch: 'full'},
  { path: 'Admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
