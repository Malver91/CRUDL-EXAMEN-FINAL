// caso de uso
class VehiculoService {
    constructor(vehiculoRepository) {
        this.repo = vehiculoRepository;
    }

    async crearVehiculo(data) {
        if (!data.placa || !data.marca || !data.modelo) {
            throw new Error('Campos placa, marca y modelo son obligatorios');
        }
        return await this.repo.guardar(data);
    }

    async obtenerPorPlaca(placa) {
        return await this.repo.buscarPorPlaca(placa);
    }

    async actualizarVehiculo(placa, data) {
        data.placa = placa;
        return await this.repo.actualizar(data);
    }

    async eliminarVehiculo(placa) {
        return await this.repo.eliminar(placa);
    }

    async listarVehiculos() {
        return await this.repo.listarTodos();
    }
}

module.exports = VehiculoService;

