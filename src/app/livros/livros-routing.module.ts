import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'livros-form', component: LivrosFormComponent},
  {path: 'livros-lista', component: LivrosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
