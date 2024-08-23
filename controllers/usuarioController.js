const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const updateUsuario = async (req, reply) => {
    try {
        const {nome, username, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const updateUser = await prisma.usuario.update({
            where: {username},
            data: {
                nome_usuario: nome,
                password: hashedPassword
            }
        })
        return reply.status(200).send(updateUser);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

const getUsuarios = async (req, reply) => {
    try {
        const users = await prisma.usuario.findMany();
        return reply.send(users);
    } catch (error) {
        return reply.status(400).send(error);
    }
};


const getUsuarioById = async (req, reply) => {
    try {
        const { id_usuario } = req.params;
        const user = await prisma.usuario.findUnique({
            where: { id_usuario: parseInt(id_usuario) }
        });
        
        if (!user) {
            return reply.status(404).send({ message: "Usuário não encontrado" });
        }

        return reply.send(user);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

module.exports = {
    updateUsuario,
    getUsuarios,
    getUsuarioById
};