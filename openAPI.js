const openApiDocs = {
    routePrefix: '/docs',
    exposeRoute: true,
    openapi: {
      openapi: '3.0.0',
      info: {
        title: "Missão Vida API",
        description: "API do Projeto Missão Vida",
        version: "1.0.0",
      },
      externalDocs: {
        url: 'https://swagger.io/resources/open-api/',
        description: 'Find more info here'
      },
      servers: [
        { url: 'https://backendnovomissaovida.vercel.app', description: 'Servidor de Produção' },
      ],
  
      tags: [
        { name: 'Auth', description: 'Endpoints relacionados à autenticação' },
        { name: 'Usuario', description: 'Endpoints relacionados ao usuário' },
        { name: 'Acolhido', description: 'Endpoints relacionados ao acolhido' }
      ],
      components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
          }
      },
      security: [
          {
              BearerAuth: []
          }
      ]
    },
};

module.exports = openApiDocs