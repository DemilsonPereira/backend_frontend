import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  public atendimento;
  public formAtendimento: FormGroup

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDadosAtendimento();
    this.formConstrutor();
  }

  onSubmit(): void {
    console.log(this.formAtendimento.value)
    this.apiService.postCreaAtendimento(this.formAtendimento.value).subscribe(
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
    this.formAtendimento = this.fb.group({
      descricao: [dados?.descricao || '', Validators.required],
      dataAtendimento: [dados?.dataAtendimento || '', Validators.required],
      MedicoId: [dados?.MedicoId || '', Validators.required],
      PacienteId: [dados?.PacienteId || '', Validators.required]

    })
  }

  //LISTAR
  private loadDadosAtendimento(): void {
    this.apiService.getAllAtendimento().subscribe(res => {
      console.log(res);
      this.atendimento = res;
    });
  }

}
