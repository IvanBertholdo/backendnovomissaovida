const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import Fastify from 'fastify'
const fastifycors = require('@fastify/cors');
const swagger = require('@fastify/swagger');
const swaggerui = require('@fastify/swagger-ui');
const fastifyJwt = require('@fastify/jwt');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const acolhidoRoutes = require('./routes/acolhidoRoutes');
const openApiDocs = require('./openAPI')
const strongPassword = require('./passwordUtils');


const app = Fastify({ 
  logger: true 
})
const PORT = process.env.PORT || 3333

app.register(fastifycors);
app.register(fastifyJwt, {
  secret: strongPassword
})

app.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
})

app.register(swagger, openApiDocs);
app.register(swaggerui, openApiDocs);

app.register(acolhidoRoutes, { prefix: '/api' });
app.register(userRoutes, { prefix: '/api' });
app.register(authRoutes, { prefix: '/auth' });

(async () => {
  try {
      // Teste a conexão com o banco de dados
      await prisma.$connect();
      app.log.info('Connection has been established successfully.');
      
      // Inicie o servidor Fastify
      app.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
          if (err) {
              app.log.error(err);
              process.exit(1);
          }
          app.log.info(`Server is running on port ${PORT}`);
      });
  } catch (err) {
      app.log.error('Unable to connect to the database:', err);
  }
})();