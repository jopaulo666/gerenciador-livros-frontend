import { LayoutComponent } from './../layout/layout.component';
import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros', component: LayoutComponent, children: [
      { path: 'form', component: LivrosFormComponent },
      { path: 'form/:id', component: LivrosFormComponent },
      { path: 'lista', component: LivrosListaComponent },
      { path: '', redirectTo: '/livros/lista', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
