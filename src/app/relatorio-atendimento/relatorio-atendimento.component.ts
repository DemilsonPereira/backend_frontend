import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-relatorio-atendimento',
  templateUrl: './relatorio-atendimento.component.html',
  styleUrls: ['./relatorio-atendimento.component.css']
})
export class RelatorioAtendimentoComponent implements OnInit {

  public listarRelatorioAtendimento;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllAtendimento().subscribe(res => {
      this.listarRelatorioAtendimento = res;
      this.orderData(this.listarRelatorioAtendimento.atendimentos, this.listarRelatorioAtendimento.medicos, this.listarRelatorioAtendimento.pacientes);
    })
  }

  private orderData(atendimentos: any, medicos: any, pacientes: any): void {
    const atendimentosMedico = [];

    medicos.forEach(medico => {
      const atendimentosMedico = atendimentos.filter(atendimento => atendimento.MedicoId === medico.id);
      const pacientesAtendidos = [];
      pacientes.forEach(paciente => {
        const atendimentosPaciente = atendimentosMedico.filter(atendimento => atendimento.PacienteId === paciente.id);
        const dadoPaciente = {
          id: paciente.id,
          nome: paciente.nome,
          atendimentos: atendimentosPaciente
        };
        pacientesAtendidos.push(dadoPaciente);
      });
      const dadosMedico = {
        id: medico.id,
        nome: medico.nome,
        atendimentos: pacientesAtendidos
      };
      atendimentosMedico.push(dadosMedico);
    });

    console.log(atendimentosMedico);
  }

}
