import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  id: number;

  constructor(
    private service: LivrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.livro = new Livro();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getLivrosById(this.id)
          .subscribe(
            response => this.livro = response,
            errorResponse => this.livro = new Livro()
          )
      }

    })
  }

  voltarListagem() {
    this.router.navigate(['/livros-lista'])
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.livro)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o livro']
        })
    } else {
      this.service
        .salvar(this.livro)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.livro = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;

        })
    }
  }
}
