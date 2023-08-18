const User = require('../../models/users'); // Asegúrate de importar correctamente el modelo User

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear el usuario.', details: error.message });
    }
};


// Actualizar un usuario existente por su ID
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await User.update(req.body, {
            where: { id_users: id }
        });
        if (updated) {
            res.status(200).json({ message: 'Usuario actualizado exitosamente.' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario.' });
    }
};

// Eliminar un usuario por su ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await User.destroy({
            where: { id_users: id }
        });
        if (deleted) {
            res.status(204).send(); // 204 No Content
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el usuario.' });
    }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
};
