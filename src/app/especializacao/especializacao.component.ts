import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-especializacao',
  templateUrl: './especializacao.component.html',
  styleUrls: ['./especializacao.component.css']
})
export class EspecializacaoComponent implements OnInit {

  public especializacao;
  public formEspecializacao: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDadosEspecializacao();
    this.formConstrutor();
  }

  onSubmit(): void {
    console.log(this.formEspecializacao.value)
    this.apiService.postCreatEspecializacao(this.formEspecializacao.value).subscribe(
      (res) => {
        alert("Cadastrado com sucesso")
      },
      ({ error, status }: HttpErrorResponse) => {
        alert("Não foi possível fazer cadastrar, por favor, tente novamente");
      }
    )
  }

  //CADASTRAR
  private formConstrutor(dados = null): void {
    this.formEspecializacao = this.fb.group({
      nome: [dados?.nome || '', Validators.required]
    })
  }

  //LISTAR
  private loadDadosEspecializacao(): void {
    this.apiService.getAllEspecializacao().subscribe(res => {
      console.log(res);
      this.especializacao = res;
    });
  }

}
