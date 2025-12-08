// caso de uso
class UsuarioService {
    // recive un repositorio que cumpla la "interface" (injected)
    constructor(usuarioRepository) {
        this.repo = usuarioRepository;
    }

    async crearUsuario(data) {
        // validaciones simples
        if (!data.clave || !data.nombre || !data.rol) {
            throw new Error('Campos clave, nombre y rol son obligatorios');
        }
        return await this.repo.guardar(data);
    }

    async obtenerPorId(id) {
        return await this.repo.buscarPorId(id);
    }

    async actualizarUsuario(id, data) {
        data.id = id;
        return await this.repo.actualizar(data);
    }

    async eliminarUsuario(id) {
        return await this.repo.eliminar(id);
    }

    async listarUsuarios() {
        return await this.repo.listarTodos();
    }
}

module.exports = UsuarioService;
