import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly APIURL = 'http://localhost:8080/api'

  private readonly MEDICO_SERVICE = this.APIURL + '/medico'
  private readonly PACIENTE_SERVICE = this.APIURL + '/paciente'
  // private readonly LISTARMEDICO_SERVICE = this.APIURL + '/paciente'
  private readonly ESPECIALIZACAO_SERVICE = this.APIURL + '/especializacaoMedica'
  private readonly PLANOSAUDE_SERVICE = this.APIURL + '/planoSaude'
  private readonly ATENDIMENTO_SERVICE = this.APIURL + '/atendimento'

  constructor(private httpClient: HttpClient) { }

  getAllMedicos(): Observable<any> {
    console.log('Dentro da funcão Médico');
    return this.httpClient.get(this.MEDICO_SERVICE);
  }

  postCreatMedicos(dados): Observable<any> {
    return this.httpClient.post(this.MEDICO_SERVICE, dados);
  }


  getAllPacientes(): Observable<any> {
    console.log('Dentro da funcão Paciente');
    return this.httpClient.get(this.PACIENTE_SERVICE);
  }

  postCreatPacientes(dados): Observable<any> {
    return this.httpClient.post(this.PACIENTE_SERVICE, dados);
  }

  getAllEspecializacao(): Observable<any> {
    console.log('Dentro da funcão Especialização');
    return this.httpClient.get(this.ESPECIALIZACAO_SERVICE);
  }

  postCreatEspecializacao(dados): Observable<any> {
    return this.httpClient.post(this.ESPECIALIZACAO_SERVICE, dados);
  }

  getAllPlanoSaude(): Observable<any> {
    console.log('Dentro da funcão Plano de Saúde');
    return this.httpClient.get(this.PLANOSAUDE_SERVICE);
  }

  postCreatPlanoSaude(dados): Observable<any> {
    return this.httpClient.post(this.PLANOSAUDE_SERVICE, dados);
  }

  getAllAtendimento(): Observable<any> {
    console.log('Dentro da funcão Atendimento');
    return this.httpClient.get(this.ATENDIMENTO_SERVICE);
  }

  postCreaAtendimento(dados): Observable<any> {
    return this.httpClient.post(this.ATENDIMENTO_SERVICE, dados);
  }

}

