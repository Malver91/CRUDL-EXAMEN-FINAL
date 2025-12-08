class Vehiculo {
    constructor({ placa, marca, modelo, version = null, color = null, numPuestos = null, numPuertas = null, combustible = null, kilometros = null, cilindraje = null, categoria = null }) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.color = color;
        this.numPuestos = numPuestos;
        this.numPuertas = numPuertas;
        this.combustible = combustible;
        this.kilometros = kilometros;
        this.cilindraje = cilindraje;
        this.categoria = categoria;
    }
}

module.exports = Vehiculo;
