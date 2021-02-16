import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './medicos/medico/medico.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from "@angular/material/table";
import { EspecializacaoComponent } from './especializacao/especializacao.component';
import { PlanoSaudeComponent } from './plano-saude/plano-saude.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { RelatorioAtendimentoComponent } from './relatorio-atendimento/relatorio-atendimento.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'medicos', component: MedicoComponent
  },
  {
    path: 'pacientes', component: PacientesComponent
  },
  {
    path: 'especializacaoMedica', component: EspecializacaoComponent
  },
  {
    path: 'listar-medicos', component: ListarMedicosComponent
  },
  {
    path: 'plano-saude', component: PlanoSaudeComponent
  },
  {
    path: 'atendimento', component: AtendimentoComponent
  },
  {
    path: 'relatorio-atendimento', component: RelatorioAtendimentoComponent
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HomePageComponent,
    PacientesComponent,
    EspecializacaoComponent,
    PlanoSaudeComponent,
    ListarMedicosComponent,
    AtendimentoComponent,
    RelatorioAtendimentoComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CdkTableModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
