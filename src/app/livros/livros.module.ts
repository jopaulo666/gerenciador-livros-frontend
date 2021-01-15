import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosFormComponent } from './livros-form/livros-form.component';


@NgModule({
  declarations: [LivrosFormComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ], exports: [
    LivrosFormComponent
  ]
})
export class LivrosModule { }
