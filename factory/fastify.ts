import { HttpAdapter, HttpAdapterFactory } from "./interfaces"

export class FastifyAdapter implements HttpAdapter {
    get() {
        console.log('GET Fastify')
    }

    post() {
        console.log('POST Fastify')
    }

    put() {
        console.log('PUT Fastify')
    }

    delete() {
        console.log('DELETE Fastify')
    }
}

export class FastifyFactory implements HttpAdapterFactory {
    makeAdapter() {
        return new FastifyAdapter()
    }
}