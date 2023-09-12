import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCComponent } from './help-c/help-c.component';

const routes: Routes = [
  {
    component:HelpCComponent,
    path:'help'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
