import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  public medico;
  public formMedico: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDadosMedicos();
    this.formConstrutor();
  }

  onSubmit(): void {
    console.log(this.formMedico.value)
    this.apiService.postCreatMedicos(this.formMedico.value).subscribe(
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
      this.formMedico = this.fb.group({
      nome: [dados?.nome || '', Validators.required],
      sexo: [dados?.sexo || '', Validators.required],
      telefone: [dados?.telefone || '', Validators.required],
      crm: [dados?.crm || '', Validators.required],
      AtendimentoId: [dados?.AtendimentoId || '', Validators.required]
    })
  }

  //LISTAR
  private loadDadosMedicos(): void {
    this.apiService.getAllMedicos().subscribe(res => {
      console.log(res);
      this.medico = res;
    });
  }

  // ATUALIZAR
  // private updateDadosMedicos(): void {
  //   this.apiService.putAllMedicos().subscribe(res => {
  //     console.log(res);
  //     this.medico = res;
  //   });
  // }

}
