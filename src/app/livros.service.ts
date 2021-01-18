import { Livro } from './livros/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor( private http: HttpClient ) {
    
   }

   salvar (livro: Livro) : Observable<Livro> {
     return this.http.post<Livro>('http://localhost:8080/api/livros', livro);
   }

  getLivros() : Livro {
    let livro : Livro = new Livro();
    livro.titulo = "O Alquimista";
    livro.autor = "Paulo Coelho";
    livro.descricao = "Uma histporia de alquimista";
    return livro;
  }
}
