import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId
  console.log(sessionId, 'middleware')
  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
