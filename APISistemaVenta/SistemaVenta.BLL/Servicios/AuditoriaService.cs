using AutoMapper;
using SistemaVenta.BLL.Servicios.Contrato;
using SistemaVenta.DAL.Repositorios.Contrato;
using SistemaVenta.DTO;
using SistemaVenta.Model;

namespace SistemaVenta.BLL.Servicios
{
    public class AuditoriaService : IAuditoriaService
    {
        private readonly IGenericRepository<Auditoria> _auditoriaRepositorio;
        private readonly IMapper _mapper;

        public AuditoriaService(IGenericRepository<Auditoria> auditoriaRepositorio, IMapper mapper)
        {
            _auditoriaRepositorio = auditoriaRepositorio;
            _mapper = mapper;
        }

        public async Task<List<AuditoriaDTO>> Lista()
        {
            try
            {
                var listaAuditoria = await _auditoriaRepositorio.Consultar();
                return _mapper.Map<List<AuditoriaDTO>>(listaAuditoria.ToList());

            }
            catch
            {
                throw;
            }
        }
    }
}
