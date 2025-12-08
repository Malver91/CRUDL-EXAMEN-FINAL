const VehiculoRepositoryMySQL = require('../../infrastructure/repositories/vehiculoRepositoryMySQL');
const VehiculoService = require('../../application/vehiculo/vehiculoService');

const repo = new VehiculoRepositoryMySQL();
const service = new VehiculoService(repo);

module.exports = {
    crear: async (req, res, next) => {
        try {
            const v = await service.crearVehiculo(req.body);
            res.status(201).json(v);
        } catch (err) { next(err); }
    },

    listar: async (req, res, next) => {
        try {
            const vs = await service.listarVehiculos();
            res.json(vs);
        } catch (err) { next(err); }
    },

    obtener: async (req, res, next) => {
        try {
            const placa = req.params.placa;
            const v = await service.obtenerPorPlaca(placa);
            if (!v) return res.status(404).json({ msg: 'Vehiculo no encontrado' });
            res.json(v);
        } catch (err) { next(err); }
    },

    actualizar: async (req, res, next) => {
        try {
            const placa = req.params.placa;
            const actualizado = await service.actualizarVehiculo(placa, req.body);
            res.json(actualizado);
        } catch (err) { next(err); }
    },

    eliminar: async (req, res, next) => {
        try {
            const placa = req.params.placa;
            const ok = await service.eliminarVehiculo(placa);
            res.json({ deleted: ok });
        } catch (err) { next(err); }
    }
};
