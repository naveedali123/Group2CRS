import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import{AdminComponent} from './components/admin/admin.component';


const routes: Routes = [

  {path:"header", component:HeaderComponent},
  {path:"main", component:MainComponent},
  {path:"admin", component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
