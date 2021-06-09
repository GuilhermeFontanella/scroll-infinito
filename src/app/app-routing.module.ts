import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteComponent } from './componente/componente.component';

const routes: Routes = [
  {path: 'scroll', component: ComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
