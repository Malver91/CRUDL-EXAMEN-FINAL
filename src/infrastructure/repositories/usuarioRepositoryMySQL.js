const pool = require('../db/mysqlConnection');
const Usuario = require('../../domain/usuario/usuario');

class UsuarioRepositoryMySQL {
    async guardar(data) {
        const sql = 'INSERT INTO usuario (clave, nombre, rol) VALUES (?, ?, ?)';
        const params = [data.clave, data.nombre, data.rol];
        const [result] = await pool.execute(sql, params);
        return new Usuario({ id: result.insertId, ...data });
    }

    async buscarPorId(id) {
        const sql = 'SELECT id, clave, nombre, rol FROM usuario WHERE id = ?';
        const [rows] = await pool.execute(sql, [id]);
        if (rows.length === 0) return null;
        return new Usuario(rows[0]);
    }

    async actualizar(data) {
        const sql = 'UPDATE usuario SET clave = ?, nombre = ?, rol = ? WHERE id = ?';
        const params = [data.clave, data.nombre, data.rol, data.id];
        await pool.execute(sql, params);
        return new Usuario(data);
    }

    async eliminar(id) {
        const sql = 'DELETE FROM usuario WHERE id = ?';
        const [result] = await pool.execute(sql, [id]);
        return result.affectedRows > 0;
    }

    async listarTodos() {
        const sql = 'SELECT id, clave, nombre, rol FROM usuario';
        const [rows] = await pool.execute(sql);
        return rows.map(r => new Usuario(r));
    }
}

module.exports = UsuarioRepositoryMySQL;
