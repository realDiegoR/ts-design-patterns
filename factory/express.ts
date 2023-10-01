import { HttpAdapter, HttpAdapterFactory } from "./interfaces"

export class ExpressAdapter implements HttpAdapter {
    get() {
        console.log('GET Express')
    }

    post() {
        console.log('POST Express')
    }

    put() {
        console.log('PUT Express')
    }

    delete() {
        console.log('DELETE Express')
    }
}

export class ExpressFactory implements HttpAdapterFactory {
    makeAdapter() {
        return new ExpressAdapter()
    }
}