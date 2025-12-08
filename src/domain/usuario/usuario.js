class Usuario {
    constructor({ id = null, clave, nombre, rol }) {
        this.id = id;
        this.clave = clave;
        this.nombre = nombre;
        this.rol = rol;
    }
}

module.exports = Usuario;
