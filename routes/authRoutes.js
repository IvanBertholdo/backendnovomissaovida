const authController = require('../controllers/authController');

async function authRoutes(fastify, options) {
    // Rota para registro de usuário
    fastify.post('/register', {
        schema: {
            description: 'Registra novo usuário',
            tags: ['Auth'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    nome_usuario: { type: 'string' },
                    username: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['nome_usuario','username', 'password']
            },
            response: {
                201: {
                    description: 'Usuário registrado com sucesso',
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                400: {
                    description: 'Erro ao registrar usuário (usuário já existe ou dados inválidos)',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: authController.registerUsuario
    });

    // Rota para login de usuário
    fastify.post('/login', {
        schema: {
            description: 'Login do usuário',
            tags: ['Auth'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['username', 'password']
            },
            response: {
                200: {
                    description: 'Usuário logado com sucesso',
                    type: 'object',
                    properties: {
                        token: { type: 'string' },
                        message: { type: 'string' }
                    }
                },
                401: {
                    description: 'Credenciais inválidas',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: authController.loginUsuario
    });
}

module.exports = authRoutes;