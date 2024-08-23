const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const strongPassword = require('../passwordUtils');

const registerUsuario = async (req, reply) => {
    try {
        const { nome_usuario, username, password } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await prisma.usuario.findUnique({
            where: { username }
        });

        if (existingUser) {
            return reply.status(409).send({ message: "Usuário já existe" });
        }

        // Hash da senha antes de salvar no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        // Salvar o usuário no banco de dados
        await prisma.usuario.create({
            data: {
                nome_usuario: nome_usuario,
                username,
                password: hashedPassword
            }
        });

        reply.send({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        reply.status(500).send({ message: 'Erro ao registrar usuário', error: error.message });
    }
};

const loginUsuario = async (req, reply) => {
    try {
        const { username, password } = req.body;

        // Encontra o usuário no banco de dados
        const user = await prisma.usuario.findUnique({
            where: { username }
        });

        if (!user) {
            return reply.status(404).send({ message: 'Usuário não encontrado' });
        }

        // Compara a senha fornecida com a senha hasheada no banco de dados
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return reply.status(401).send({ message: 'Senha incorreta' });
        }

        // Gera um token JWT com o nome de usuário como payload
        const token = jwt.sign({ username: user.username }, strongPassword, { expiresIn: '1h' });

        reply.send({ token });
    } catch (error) {
        reply.status(500).send({ message: 'Erro ao fazer login', error: error.message });
    }
};

module.exports = {
    registerUsuario,
    loginUsuario
};