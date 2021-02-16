import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public menus = [
    {id:'medicos',valor:'Médicos'},
    {id:'pacientes',valor:'Pacientes'},
    {id:'listar-medicos',valor:'Lista de Médicos'},
    {id:'especializacaoMedica',valor:'Especialização Médica'},
    {id:'plano-saude',valor:'Plano de saúde'},
    {id:'atendimento',valor:'Atendimento'},
    {id:'relatorio-atendimento',valor:'Relatório de atendimento'}
  ]
  public onClickButton(menu: string): void {
    this.router.navigate([menu]);
  }
}
