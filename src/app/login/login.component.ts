import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  cadastrar: boolean

  constructor(private router: Router) { }

  onSubmit(){
    this.router.navigate(['/home'])
  }

  preparaCadastro(event){
    event.preventDefault();
    this.cadastrar = true;
  }

  cancelaCadastro(){
    this.cadastrar = false;
  }

}
