import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
 {path:'load',component:LoaderComponent},
 {path:'home',component:BodyComponent},
 {path:'',redirectTo:'load',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
