const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import Fastify from 'fastify'
import cors from '@fastify/cors'
const swagger = require('@fastify/swagger');
const swaggerui = require('@fastify/swagger-ui');
const fastifyJwt = require('@fastify/jwt');
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const acolhidoRoutes = require('../routes/acolhidoRoutes');
const openApiDocs = require('../openAPI')
const strongPassword = require('../passwordUtils');


const app = Fastify({ 
  logger: true 
})
const PORT = process.env.PORT || 3333

app.register(cors);
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

export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}