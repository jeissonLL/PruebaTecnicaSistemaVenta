export interface Auditoria {
    auditoriaId: number;
    idUsuario?: number | null;
    usuario?: string | null;
    accion?: string | null;
    entidadAfectada?: string | null;
    fechaAccion?: Date | null;
    detalleAccion?: string | null;
  }