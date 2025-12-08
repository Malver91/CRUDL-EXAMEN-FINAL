const UsuarioRepositoryMySQL = require('../../infrastructure/repositories/usuarioRepositoryMySQL');
const UsuarioService = require('../../application/usuario/usuarioService');

const repo = new UsuarioRepositoryMySQL();
const service = new UsuarioService(repo);

module.exports = {
    crear: async (req, res, next) => {
        try {
            const usuario = await service.crearUsuario(req.body);
            res.status(201).json(usuario);
        } catch (err) {
            next(err);
        }
    },

    listar: async (req, res, next) => {
        try {
            const usuarios = await service.listarUsuarios();
            res.json(usuarios);
        } catch (err) { next(err); }
    },

    obtener: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const usuario = await service.obtenerPorId(id);
            if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });
            res.json(usuario);
        } catch (err) { next(err); }
    },

    actualizar: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const actualizado = await service.actualizarUsuario(id, req.body);
            res.json(actualizado);
        } catch (err) { next(err); }
    },

    eliminar: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const ok = await service.eliminarUsuario(id);
            res.json({ deleted: ok });
        } catch (err) { next(err); }
    }
};
