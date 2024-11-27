import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

const routes: Routes = [
  { path: 'task', component: TaskdetailsComponent }

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
