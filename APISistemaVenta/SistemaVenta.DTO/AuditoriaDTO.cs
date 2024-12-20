namespace SistemaVenta.DTO
{
    public class AuditoriaDTO
    {
        public int AuditoriaId { get; set; }

        public int? IdUsuario { get; set; }

        public string? Usuario { get; set; }

        public string? Accion { get; set; }

        public string? EntidadAfectada { get; set; }

        public DateTime? FechaAccion { get; set; }

        public string? DetalleAccion { get; set; }
    }
}
