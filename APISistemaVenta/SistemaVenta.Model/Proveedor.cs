namespace SistemaVenta.Model;

public partial class Proveedor
{
    public int IdProveedor { get; set; }
    public string NombreProveedor { get; set; } = null!;
    public string? Telefono { get; set; }
    public string? Email { get; set; }
    public string? Direccion { get; set; }
}
