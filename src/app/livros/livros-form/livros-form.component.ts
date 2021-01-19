import { LivrosService } from './../../livros.service';
import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livro: Livro;
  success: boolean = false;
  errors: String[];

  constructor( private service: LivrosService ) { 
    this.livro = new Livro();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.livro).subscribe(response => {
      this.success = true;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      
    })
  }
}
