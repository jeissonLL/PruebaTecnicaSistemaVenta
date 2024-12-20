using System;
using System.Collections.Generic;

namespace SistemaVenta.Model;

public partial class Auditoria
{
    public int AuditoriaId { get; set; }

    public int? IdUsuario { get; set; }

    public string? Usuario { get; set; }

    public string? Accion { get; set; }

    public string? EntidadAfectada { get; set; }

    public DateTime? FechaAccion { get; set; }

    public string? DetalleAccion { get; set; }
}
