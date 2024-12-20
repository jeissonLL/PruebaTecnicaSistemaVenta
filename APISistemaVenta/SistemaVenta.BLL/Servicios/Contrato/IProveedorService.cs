using SistemaVenta.DTO;

namespace SistemaVenta.BLL.Servicios.Contrato
{
    public interface IProveedorService
    {
        Task<List<ProveedorDTO>> Lista();
        Task<ProveedorDTO> Crear(ProveedorDTO modelo);
        Task<bool> Editar(ProveedorDTO modelo);
        Task<bool> Eliminar(int id);
    }
}
