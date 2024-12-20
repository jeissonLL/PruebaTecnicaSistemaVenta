import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Proveedor } from 'src/app/Interfaces/Proveedor';
import { ProveedorService } from 'src/app/Services/Proveedor.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-proveedor',
  templateUrl: './modal-proveedor.component.html',
  styleUrls: ['./modal-proveedor.component.css']
})
export class ModalProveedorComponent implements OnInit {
  formularioProveedor:FormGroup;
  tituloAccion:string = "Agregar";
  botonAccion:string = "Guardar";

  constructor(
    private modalActual: MatDialogRef<ModalProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProveedor: Proveedor,
    private fb: FormBuilder,
    private _proveedorServicio: ProveedorService,
    private _utilidadServicio: UtilidadService
  ) { 

    this.formularioProveedor = this.fb.group({
      nombreProveedor: ['',Validators.required],
      telefono: ['',Validators.required],
      email: ['',Validators.required],
      direccion: ['',Validators.required]
    });

    if(this.datosProveedor != null){

      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }

  }

  ngOnInit(): void {
    if(this.datosProveedor != null){
      this.formularioProveedor.patchValue({

        nombreProveedor: this.datosProveedor.nombreProveedor,
        telefono: this.datosProveedor.telefono,
        email: this.datosProveedor.email,
        direccion: this.datosProveedor.direccion
      });

    }
  }

  guardarEditar_Proveedor(){

    const _proveedor: Proveedor = {
      idProveedor : this.datosProveedor == null ? 0 : this.datosProveedor.idProveedor,
      nombreProveedor : this.formularioProveedor.value.nombreProveedor,
      telefono: this.formularioProveedor.value.telefono,
      email  : this.formularioProveedor.value.email,
      direccion: this.formularioProveedor.value.direccion,
    }

    if(this.datosProveedor == null){

      this._proveedorServicio.guardar(_proveedor).subscribe({
        next: (data) =>{
          if(data.status){
            this._utilidadServicio.mostrarAlerta("El proveedor fue registrado","Exito");
            this.modalActual.close("true")
          }else
            this._utilidadServicio.mostrarAlerta("No se pudo registrar el proveedor","Error")
        },
        error:(e) => {}
      })

    }else{

      this._proveedorServicio.editar(_proveedor).subscribe({
        next: (data) =>{
          if(data.status){
            this._utilidadServicio.mostrarAlerta("El proveedor fue editado","Exito");
            this.modalActual.close("true")
          }else
            this._utilidadServicio.mostrarAlerta("No se pudo editar el proveedor","Error")
        },
        error:(e) => {}
      })
    }

  }

}
