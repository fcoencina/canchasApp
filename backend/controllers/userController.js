
const User = require("../models/User");

async function createUser(_username, _password) {
    try {
        //create retorna el registro si se pudo crear.
        const user = await User.create({
            username: _username,
            password: _password
        });

        return user;
    } catch (error) {
        return error;
    }
}

async function updateUser(_id, _username, _password) {
    try {
        //update retorna 0 si no encuentra
        const tryUpdate = await User.update(
            {
                username: _username,
                password: _password
            },
            {
                where: {
                    id: _id
                }
            }
        );

        return tryUpdate;
    } catch (error) {
        return error;
    }
}

async function getUserByUsername(_username) {
    try {
        //findOne retorna null si no encuentra
        const user = await User.findOne({
            where: {
                username: _username,
            }
        });
        // Retornar el usuario
        return user;
    } catch (error) {
        return error;
    }
}

async function deleteUser(_id) {
    try {
        //destroy retorna 0 si no encuentra
        const tryDelete = await User.destroy({
            where: {
                id: _id
            }
        });

        return tryDelete;
    } catch (error) {
        return error;
    }
}

async function getUsers() {
    try {
        //findAll retorna null si no encuentra
        const users = await User.findAll();

        // Retornar los usuarios
        return users;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createUser,
    updateUser,
    getUserByUsername,
    deleteUser,
    getUsers
}
