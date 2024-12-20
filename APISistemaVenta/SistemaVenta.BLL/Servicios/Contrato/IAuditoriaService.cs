using SistemaVenta.DTO;

namespace SistemaVenta.BLL.Servicios.Contrato
{
    public interface IAuditoriaService
    {
        Task<List<AuditoriaDTO>> Lista();
    }
}
