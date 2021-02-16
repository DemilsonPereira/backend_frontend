import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-plano-saude',
  templateUrl: './plano-saude.component.html',
  styleUrls: ['./plano-saude.component.css']
})
export class PlanoSaudeComponent implements OnInit {

  public planoSaude;
  public formPlanoSaude: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDadosPlanoSaude();
    this.formConstrutor();
  }

  onSubmit(): void {
    console.log(this.formPlanoSaude.value)
    this.apiService.postCreatPlanoSaude(this.formPlanoSaude.value).subscribe(
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
    this.formPlanoSaude = this.fb.group({
      nome: [dados?.nome || '', Validators.required]
    })
  }

  //LISTAR
  private loadDadosPlanoSaude(): void {
    this.apiService.getAllPlanoSaude().subscribe(res => {
      console.log(res);
      this.planoSaude = res;
    });
  }

}
