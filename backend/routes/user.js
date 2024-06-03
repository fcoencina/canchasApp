
const express = require('express');
const router = express.Router();
const {
    updateUser,
    getUserByUsername,
    deleteUser,
    getUsers
} = require("../controllers/userController");

// Aquí van los endpoints


module.exports = router;
