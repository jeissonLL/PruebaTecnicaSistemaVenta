using AutoMapper;
using SistemaVenta.BLL.Servicios.Contrato;
using SistemaVenta.DAL.Repositorios.Contrato;
using SistemaVenta.DTO;
using SistemaVenta.Model;

namespace SistemaVenta.BLL.Servicios
{
    public class ProveedorService : IProveedorService
    {
        private readonly IGenericRepository<Proveedor> _ProveedorRepositorio;
        private readonly IMapper _mapper;

        public ProveedorService(IGenericRepository<Proveedor> proveedorRepositorio, IMapper mapper)
        {
            _ProveedorRepositorio = proveedorRepositorio;
            _mapper = mapper;
        }

        public async Task<ProveedorDTO> Crear(ProveedorDTO modelo)
        {
            try
            {
                var proveedorCreado = await _ProveedorRepositorio.Crear(_mapper.Map<Proveedor>(modelo));

                if (proveedorCreado.IdProveedor == 0)
                    throw new TaskCanceledException("No se pudo crear");

                return _mapper.Map<ProveedorDTO>(proveedorCreado);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(ProveedorDTO modelo)
        {
            try
            {
                var proveedoroModelo = _mapper.Map<Proveedor>(modelo);
                var proveedorEncontrado = await _ProveedorRepositorio.Obtener(u =>
                    u.IdProveedor == proveedoroModelo.IdProveedor
                );

                if (proveedorEncontrado == null)
                    throw new TaskCanceledException("El producto no existe");

                proveedorEncontrado.NombreProveedor = proveedoroModelo.NombreProveedor;
                proveedorEncontrado.Telefono = proveedoroModelo.Telefono;
                proveedorEncontrado.Direccion = proveedoroModelo.Direccion;
                proveedorEncontrado.Email = proveedoroModelo.Email;

                bool respuesta = await _ProveedorRepositorio.Editar(proveedorEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("No se pudo editar"); ;

                return respuesta;
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                var eliminarEncontrado = await _ProveedorRepositorio.Obtener(p => p.IdProveedor == id);

                if (eliminarEncontrado == null)
                    throw new TaskCanceledException("El producto no existe");

                bool respuesta = await _ProveedorRepositorio.Eliminar(eliminarEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("No se pudo elminar"); ;

                return respuesta;
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<ProveedorDTO>> Lista()
        {
            try
            {
                var ListaProveedor = await _ProveedorRepositorio.Consultar();
                return _mapper.Map<List<ProveedorDTO>>(ListaProveedor.ToList());
            }
            catch
            {
                throw;
            }
        }
    }
}
