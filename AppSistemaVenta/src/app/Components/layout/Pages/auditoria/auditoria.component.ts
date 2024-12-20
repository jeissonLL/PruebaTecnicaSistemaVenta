import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { Auditoria } from 'src/app/Interfaces/auditoria';
import { AuditoriaService } from 'src/app/Services/auditoria.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit, AfterViewInit{

  columnasTabla: string[] = ['usuario','accion','entidadAfectada','fechaAccion', 'detalleAccion'];
  dataInicio:Auditoria[] = [];
  dataListaAuditoria = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla! : MatPaginator;

  constructor(
    private dialog: MatDialog,
    private _auditoriaService:AuditoriaService,
    private _utilidadServicio: UtilidadService

  ) { }

  obtenerAuditoria(){

    this._auditoriaService.lista().subscribe({
      next: (data) => {
        if(data.status)
          this.dataListaAuditoria.data = data.value;
        else
          this._utilidadServicio.mostrarAlerta("No se encontraron datos","Oops!")
      },
      error:(e) =>{}
    })

  }

  ngOnInit(): void {
    this.obtenerAuditoria();
  }

  ngAfterViewInit(): void {
    this.dataListaAuditoria.paginator = this.paginacionTabla;
  }

  aplicarFiltroTabla(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaAuditoria.filter = filterValue.trim().toLocaleLowerCase();
  }

}
