import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit {

  // public listarMedicos;
  displayedColumns: string[] = ['id', 'nome', 'sexo', 'telefone', 'crm'];

  public listarMedicos;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMedicos().subscribe(res => {
      this.listarMedicos = res;
    })
  }
}
