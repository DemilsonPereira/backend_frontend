import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  public paciente;
  public formPaciente: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDadosPacientes();
    this.formConstrutor();
  }

  onSubmit(): void {
    console.log(this.formPaciente.value)
    this.apiService.postCreatPacientes(this.formPaciente.value).subscribe(
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
    this.formPaciente = this.fb.group({
      nome: [dados?.nome || '', Validators.required],
      sexo: [dados?.sexo || '', Validators.required],
      telefone: [dados?.telefone || '', Validators.required],
      AtendimentoId: [dados?.AtendimentoId || '', Validators.required]
    })
  }

  //LISTAR
  private loadDadosPacientes(): void {
    this.apiService.getAllPacientes().subscribe(res => {
      console.log(res);
      this.paciente = res;
    });
  }

}
