import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
    {path:"", pathMatch: 'full', redirectTo: 'characters'},
  
  {path:"characters", component: TableComponent},
  {path:"characters/:idcharacter", component: DetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
