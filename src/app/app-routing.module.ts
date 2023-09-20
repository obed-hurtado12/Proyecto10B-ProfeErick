import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './modules/news/news.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {path:"news", component: NewsComponent},
  {path:"about", component: AboutComponent},
  {path:"**", redirectTo: "/", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})


export class AppRoutingModule { }
